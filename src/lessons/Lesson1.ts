import { PlayingField } from "../game/PlayingField/PlayingField";


/**
 * Ziel: Bewege den Spieler zum ❤️. Wie auch immer du möchtest
 */
export class Lesson1 extends PlayingField {
	public get lessonName() {
		return "Lesson 1";
	}
	constructor() {
		super(10, 10);
		this.spawnPlayer(5, 5);
		this.spawnItem(5, 4, "❤️");
	}

	public run() {
		// this.player <--- Das ist der Spieler den du bewegen kannst
	}


	public checkGameConditions(): boolean {
		if(this.player.x === 5 && this.player.y === 4) {
			return true;
		}
	}
}