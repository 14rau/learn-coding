import { PlayingField } from "../game/PlayingField/PlayingField";


/**
 * Ziel: Bewege den Spieler zum ❤️ und hebe das ❤️ auf
 */
export class Lesson3 extends PlayingField {
	public get lessonName() {
		return "Lesson 3";
	}
	constructor() {
		super(10, 10);
		this.spawnPlayer(5, 5);
		this.spawnItem(8, 4, "❤️");
	}

	public run() {
		// this.player <--- Das ist der Spieler den du bewegen kannst
	}


	public checkGameConditions(): boolean {
		if(this.player.inventory[0]) return true;
		return false;
	}
}