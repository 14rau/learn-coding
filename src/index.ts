import * as lessons from "./lessons";

const lesson = process.argv[process.argv.length - 1]

if(lessons[lesson] === undefined) {
	console.error("Lesson not found");
	process.exit(1);
}

const instance = new lessons[lesson]();
instance.runGame();