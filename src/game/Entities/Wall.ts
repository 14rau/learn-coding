
import { PlayingField } from "../PlayingField/PlayingField";
import { Entity } from "./Entity";

export class Wall extends Entity {
	public get type() {
		return "wall";
	}
	constructor({ x, y }, gameField: PlayingField) {
		super({ x, y, symbol: "#", gameField });
	}	
}