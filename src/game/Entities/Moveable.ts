import { Entity } from "./Entity";

export class Moveable extends Entity {


	public moveUp() {
		this.action({
			kind: "move",
			data: {
				direction: "$y",
				amount: -1
			}
		})
	}

	public moveDown() {
		this.action({
			kind: "move",
			data: {
				direction: "$y",
				amount: 1
			}
		})
	}

	public moveLeft() {
		this.action({
			kind: "move",
			data: {
				direction: "$x",
				amount: -1
			}
		})
	}

	public moveRight() {
		this.action({
			kind: "move",
			data: {
				direction: "$x",
				amount: 1
			}
		})
	}

	protected move(action: { direction: "$x" | "$y", amount: number }) {
		this[action.direction] += action.amount;		
	}
}