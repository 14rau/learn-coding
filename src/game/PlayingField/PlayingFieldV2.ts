import { TurnablePlayer } from "../Entities/TurnablePlayer";
import { PlayingField } from "./PlayingField";

export class PlayingFieldV2 extends PlayingField {
	declare protected player: TurnablePlayer;
	public spawnPlayer(posX: number, posY: number) {
		this.player = new TurnablePlayer({ x: posX, y: posY }, this);
	}
}