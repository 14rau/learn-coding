import { PlayingField } from "../game/PlayingField/PlayingField";

/**
 * Bewege den Spieler zum ❤️.
 * Benutze dafür einen for-loop
 */
export class Lesson2 extends PlayingField {
	public get lessonName() {
		return "Lesson 2";
	}
	constructor() {
		super(10, 10);
		this.spawnPlayer(5, 5);
		this.spawnItem(5, 0, "❤️");
	}

	public run() {
		// Bewege den Spieler zum X
		// this.player <--- Das ist der Spieler den du bewegen kannst
		// Der einfachste Weg wäre es den Spieler einfach 5 Schritte nach oben zu bewegen:
		// this.player.moveUp();
		// this.player.moveUp();
		// this.player.moveUp();
		// this.player.moveUp();
		// this.player.moveUp();
		// Aber das ist nicht besonders elegant. Benutze stattdessen einen for-loop:
		/**
		 * for(let start = 0; start < ende; start++) {
		 * }
		 */
	}


	public checkGameConditions(): boolean {
		if(this.player.x === 5 && this.player.y === 0) {
			return true;
		}
	}
}