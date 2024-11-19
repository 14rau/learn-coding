/**
 * 
+--+--+--+
|  |  |  |
+--+--+--+
|  |  |  |
+--+--+--+
 * @param x 
 * @param y 
 */

import { RenderItem } from "./types";

export function renderGrid(x: number, y: number, items: RenderItem[] = []) {
	// start with a numberation row
	let out = "";
	out += renderEdge(x);
	for(let i = 0; i < x; i++) {
		out += `| ${i === -1 ? " " : i} `;
	}
	out += "|\n";

	for (let i = 0; i < y; i++) {
		out += renderEdge(x);
		out += renderRow(x, i, items);
	}
	out += renderEdge(x);
	return out;
}

function renderEdge(size: number) {
	let out = "";
	out
	for (let i = 0; i < size; i++) {
		out += "+---";
	}
	out += "+\n";
	return out;
}

function renderRow(x: number, y: number, items: RenderItem[]) {
	let out = "";
	for (let i = 0; i < x; i++) {
		out += renderCell(i, y, items);
	}
	out += "|\n";
	return out;
}

function renderCell(x: number, y: number, items: RenderItem[]) {
	// shift items by 1
	const item = items.find(item => item.x === x && item.y === y);
	const cell = item ? `| ${item.symbol} ` : "|   ";
	return cell;
}



