
import { PlayingFieldV2 } from "../PlayingField/PlayingFieldV2";
import { Player } from "./Player";


export enum Direction {
	Up = 0,
	Right = 1,
	Down = 2,
	Left = 3
}

const renderDirections = {
	[Direction.Up]: "^",
	[Direction.Right]: ">",
	[Direction.Down]: "v",
	[Direction.Left]: "<"
}
export class TurnablePlayer extends Player {
	private direction: Direction = Direction.Right;
	constructor({ x, y }, field: PlayingFieldV2) {
		super({ x, y }, field);
	}
	
	public turnRight() {
		this.action({ kind: "$turnRight", data: {} });
	}

	public turnLeft() {
		this.action({ kind: "$turnLeft", data: {} });
	}

	public turnUp() {
		this.action({ kind: "$turnUp", data: {} });
	}

	public turnDown() {
		this.action({ kind: "$turnDown", data: {} });
	}

	protected $turnUp() {
		this.direction = Direction.Up;
	}

	protected $turnDown() {
		this.direction = Direction.Down;
	}

	protected $turnRight() {
		this.direction = Direction.Right
	}

	protected $turnLeft() {
		this.direction = Direction.Left;
	}

	public getRenderData() {
		return {
			...super.getRenderData(),
			symbol: renderDirections[this.direction]
		}
	}

	public movePlayer() {
		this.action({ kind: "$movePlayer", data: {} });
	}

	protected $movePlayer() {
		switch(this.direction) {
			case Direction.Up:
				this.moveUp();
				break;
			case Direction.Down:
				this.moveDown();
				break;
			case Direction.Left:
				this.moveLeft();
				break;
			case Direction.Right:
				this.moveRight();
				break;
		}
	}

	public get entities() {
		return this.gameField.entities;
	}

	public checkFront(): "wall" | "empty" | "item" | "out-of-bounds" {
		const { x, y } = this.calculateNextPosition();
		const frontEntity = this.entities.find(entity => {
			switch(this.direction) {
				case Direction.Up:
					return entity.x === this.x && entity.y === this.y - 1;
				case Direction.Down:
					return entity.x === this.x && entity.y === this.y + 1;
				case Direction.Left:
					return entity.x === this.x - 1 && entity.y === this.y;
				case Direction.Right:
					return entity.x === this.x + 1 && entity.y === this.y;
			}
		});
		if(frontEntity) {
			return frontEntity.type as "wall" | "item";
		}
		
		if(x < 0 || y < 0 || x >= this.gameField.width || y >= this.gameField.height) {
			return "out-of-bounds";
		}


		return "empty";
	}
	public checkUnder(): "wall" | "empty" | "item" {
		const frontEntity = this.entities.find(entity => {
			return entity.x === this.x && entity.y === this.y + 1;
		});
		if(frontEntity) {
			return frontEntity.type as "wall" | "item";
		}
		return "empty";
	}

	public calculateNextPosition(): { x: number, y: number } {
		switch(this.direction) {
			case Direction.Up:
				return { x: this.x, y: this.y - 1 };
			case Direction.Down:
				return { x: this.x, y: this.y + 1 };
			case Direction.Left:
				return { x: this.x - 1, y: this.y };
			case Direction.Right:
				return { x: this.x + 1, y: this.y };
		}
	}
}