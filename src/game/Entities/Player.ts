
import { PlayingField } from "../PlayingField/PlayingField";
import { Item } from "./Item";
import { Moveable } from "./Moveable";

export class Player extends Moveable {
	public get type() {
		return "player";
	}
	public inventory: Item[] = [];
	constructor({ x, y }, gameField: PlayingField) {
		super({ x, y, symbol: "P", gameField });
	}

	protected $pickUpItem() {
		const item = this.gameField.items.find(item => item.getRenderData().x === this.x && item.getRenderData().y === this.y);
		if(item) {
			this.inventory.push(item);
			this.gameField.items = this.gameField.items.filter(i => i !== item);
		}
	}

	/**
	 * drop the last item in the inventory
	 */
	protected $dropItem() {
		const item = this.inventory.pop();
		if(item) {
			this.gameField.spawnItem(this.x, this.y, item.symbol);
		}
	}

	public dropItem() {
		this.action({ kind: "$dropItem", data: {} });
	}

	public pickUpItem() {
		this.action({ kind: "$pickUpItem", data: {} });
	}
}