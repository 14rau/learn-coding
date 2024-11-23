import { PlayingFieldV2 } from "../game/PlayingField/PlayingFieldV2";



/**
 * Ziel: Schreibe ein Programm, welches den Spieler 
 * Du darfst nicht: moveLeft, moveRight, moveUp, moveDown verwenden. Nutze nur die
 * turnMethoden und movePlayer. Move player bewegt den Spieler in die Richtung in die er schaut.
 * Sammel das herz ein, ohne die Wände zu berühren.
 * Viel Erfolt das finale Problem zu lösen! Das hier ist ein schweres level. Du solltest die Lösung nicht hart coden, sondern versuchen eine allgemeine Lösung zu finden.
 * Regeln:
 * - du darfst NICHT in this.items nach dem herz suchen
 * - du darfst NICHT in this.walls nach den Wänden suchen
 * - du darfst deine eigenen koordinaten benutzen und die abspeichern um rauszufinden wo du schon warst
 * - du darfst marker setzen um zu wissen wo du schon warst
 */
export class Lesson8 extends PlayingFieldV2 {
	public get lessonName() {
		return "Lesson 8";
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
		this.items
	}


	public checkGameConditions(): boolean {
		if(this.player.inventory[0]) return true;
		return false;
	}
}