import { randomInt } from "crypto";
import { PlayingFieldV2 } from "../game/PlayingField/PlayingFieldV2";




/**
 * Ziel: Schreibe ein Programm, welches den Spieler 
 * Du darfst nicht: moveLeft, moveRight, moveUp, moveDown verwenden. Nutze nur die
 * turnMethoden und movePlayer. Move player bewegt den Spieler in die Richtung in die er schaut.
 */
export class Lesson7 extends PlayingFieldV2 {
	public get lessonName() {
		return "Lesson 7";
	}
	constructor() {
		super(10, 10);
		this.spawnPlayer(5, 5);
		this.spawnItem(randomInt(10), randomInt(10), "❤️");
	}

	public run() {
	
	}


	public checkGameConditions(): boolean {
		if(this.player.inventory[0]) return true;
		return false;
	}
}