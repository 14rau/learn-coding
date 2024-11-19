import { Item } from "../Entities/Item";
import { Player } from "../Entities/Player";
import { Wall } from "../Entities/Wall";
import { renderGrid } from "../Grid";

export class PlayingField {
	public gameEnded = false;
	public get lessonName() {
		return "";
	}
	protected maxRounds = 1000;
	private gameBoard: string[] = [];
	private gameStat: [ string, string ][] = [];
	private endGameMessage: string = "";

	public rememberFrame() {
		this.gameBoard.push(this.render());
		this.gameStat.push(this.getPlayerStats());
	}
	protected round = 0;
	private get renderItems() {
		return [
			// player has the highest render priority
			this.player.getRenderData(),
			...this.items.map(item => item.getRenderData()),
			...this.walls.map(wall => wall.getRenderData())
		]
	}

	public get entities() {
		return [ ...this.items, ...this.walls ];
	}
	public walls: Wall[] = [];
	public items: Item[] = [];
	private x: number;
	private y: number;

	public get width() {
		return this.x;
	}

	public get height() {
		return this.y;
	}

	protected player: Player;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public spawnPlayer(posX: number, posY: number) {
		this.player = new Player({ x: posX, y: posY }, this);
	}

	public endGame() {
		this.gameEnded = true;
	}

	public async runGame(dry = false): Promise<boolean> {
		let didWon = false;
		// add first frame
		this.rememberFrame();
		this.run();
		console.log(this.checkGameConditions());
		if(dry === false)
			await this.playback();
		if(this.gameEnded === false && this.checkGameConditions() === true) {
			didWon = true;
			this.endGameMessage = "Congratulations, you won!";
		}
		console.log(this.endGameMessage);
		return didWon;
	}

	public testGame(): boolean {
		let didWon = false;
		this.rememberFrame();
		this.run();
		if(this.gameEnded === false && this.checkGameConditions() === true) {
			didWon = true;
		}
		return didWon;
	}

	public async playback() {
		for(let i = 0; i < this.gameBoard.length; i++) {
			console.log(this.gameBoard[i]);
			console.log(...this.gameStat[i]);
			await new Promise(resolve => setTimeout(resolve, 1000));
		}
	}

	public spawnItem(posX: number, posY: number, symbol: string) {
		this.addItem(new Item({ x: posX, y: posY, symbol }, this));
	}

	public spawnWall(posX: number, posY: number) {
		this.walls.push(new Wall({ x: posX, y: posY }, this));
	}

	public drawWall(fromX: number, fromY: number, direction: "x" | "y", length: number) {
		for(let i = 0; i < length; i++) {
			const x = direction === "x" ? fromX + i : fromX;
			const y = direction === "y" ? fromY + i : fromY;
			this.spawnWall(x,y);
		}
	}

	protected addItem(item: Item) {
		this.items.push(item);
	}

	public render() {
		return renderGrid(this.x, this.y, this.renderItems);
	}

	public run() {

	}

	public checkForGameErrors() {
		// if player gets out of bounds -> game over
		const position = this.player.getRenderData();
		if(position.x < 0 || position.x >= this.x || position.y < 0 || position.y >= this.y) {
			this.endGameMessage = "Oh no, you ran out of bounds!";
			return true;
		}
		// check if player is on a wall -> game over
		const wall = this.walls.find(wall => wall.getRenderData().x === position.x && wall.getRenderData().y === position.y);
		if(wall) {
			this.endGameMessage = "Ouch! You hit a wall!";
			return true;
		}
	}

	protected getPlayerStats() {
		return [
			`Player position: ${this.player.getRenderData().x}, ${this.player.getRenderData().y}`,
			`Player inventory: ${this.player.inventory.length}`
		] as [ string, string ];
	}


	public checkGameConditions(): boolean {
		return true;
	}
}