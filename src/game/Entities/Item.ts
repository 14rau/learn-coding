import { PlayingField } from "../PlayingField/PlayingField";
import { Entity } from "./Entity";

export class Item extends Entity {
	public get type() {
		return "item";
	}
	constructor({ x, y, symbol }, gameField: PlayingField) {
		super({ x, y, symbol, gameField });
	}	
}