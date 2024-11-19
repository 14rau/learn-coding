import { PlayingFieldV2 } from "../game/PlayingField/PlayingFieldV2";



/**
 * Ziel: Schreibe ein Programm, welches den Spieler 
 * Du darfst nicht: moveLeft, moveRight, moveUp, moveDown verwenden. Nutze nur die
 * turnMethoden und movePlayer. Move player bewegt den Spieler in die Richtung in die er schaut.
 */
export class Lesson7 extends PlayingFieldV2 {
	public get lessonName() {
		return "Lesson 6";
	}
	constructor() {
		super(10, 10);
		this.spawnPlayer(9, 9);
		this.spawnItem(0, 0, "❤️");
		this.drawWall(1, 0, "y", 9);
		this.drawWall(3, 1, "y", 9);
		this.drawWall(5, 0, "y", 9);
		this.drawWall(6, 4, "x", 3);
	}

	public run() {
		// this.player <--- Das ist der Spieler den du bewegen kannst
	}


	public checkGameConditions(): boolean {
		return false;
	}
}