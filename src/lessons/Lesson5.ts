import { PlayingField } from "../game/PlayingField/PlayingField";


/**
 * Ziel: Schreibe ein Programm, welches in der oberen linken ecke LOVE schreibt
 * Sammel dafür in der richtigen reihenfolge die Buchstaben ein, und platziere sie an der richtigen Stelle 
 */
export class Lesson5 extends PlayingField {
	public get lessonName() {
		return "Lesson 5";
	}
	constructor() {
		super(10, 10);
		this.spawnPlayer(6, 7);
		this.spawnItem(5, 4, "L");
		this.spawnItem(0, 0, "O");
		this.spawnItem(1, 2, "V");
		this.spawnItem(4, 0, "E");
	}

	public run() {
		// this.player <--- Das ist der Spieler den du bewegen kannst
	}


	public checkGameConditions(): boolean {
		if(this.items.length !== 4) return false; // all items must be placed
		for(const item of this.items) {
			if(item.symbol === "L") {
				if(!(item.x === 0 && item.y === 0)) return false;
			}
			if(item.symbol === "O") {
				if(!(item.x === 1 && item.y === 0)) return false;
			}
			if(item.symbol === "V") {
				if(!(item.x === 2 && item.y === 0)) return false;
			}
			if(item.symbol === "E") {
				if(!(item.x === 3 && item.y === 0)) return false;
			}
		}
		return true;
	}
}