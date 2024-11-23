import { PlayingField } from "../PlayingField/PlayingField";
import { Entity } from "./Entity";

export class Marker extends Entity {
	public get type() {
		return "marker";
	}
	constructor({ x, y, symbol }, gameField: PlayingField) {
		super({ x, y, symbol, gameField });
	}	
}