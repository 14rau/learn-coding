import { PlayingField } from "../game/PlayingField/PlayingField";


/**
 * Ziel: Bewege den Spieler zum ❤️ und hebe das ❤️ auf. Dann lege das Item an der position 5 5 ab.
 */
export class Lesson4 extends PlayingField {
	public get lessonName() {
		return "Lesson 4";
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
		const item = this.items[0];
		if(!item) return false;
		if(item.x === 5 && item.y === 5) return true;
		return false;
	}
}