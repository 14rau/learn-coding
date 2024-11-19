import { PlayingField } from "../PlayingField/PlayingField";
import { RenderItem } from "../types";

export class Entity {
	public get type() {
		return "entity";
	}
	protected $x: number;
	protected $y: number;
	protected $symbol: string;

	protected actions: {
		kind: string,
		data: any
	}[] = [];

	protected gameField: PlayingField;

	public get x() {
		return this.$x;
	}

	public get y() {
		return this.$y;
	}

	public get symbol() {
		return this.$symbol;
	}

	constructor({ x, y, symbol, gameField } : { x: number, y: number, symbol: string, gameField: PlayingField }) {
		this.$x = x
		this.$y = y
		this.$symbol = symbol
		this.gameField = gameField;
	}

	public getRenderData(): RenderItem {
		return {
			x: this.$x,
			y: this.$y,
			symbol: this.symbol
		}
	}


	public action(action: { kind: string, data: any }) {
		if(this.gameField.gameEnded === true) return; // no action will be performed
		// put action on the action stack
		this.actions.push(action);
		// perform the action
		this[action.kind](action.data);
		this.gameField.rememberFrame();
		if(this.gameField.checkForGameErrors() === true) {
			this.gameField.endGame();
		}
	}
}