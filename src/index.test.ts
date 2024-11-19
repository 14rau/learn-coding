import assert from "node:assert";
import test from "node:test";

const lessons = require("./lessons");

for(let lesson in lessons) {
	test(lesson, () => {
		const instance = new lessons[lesson]();
		const response = instance.testGame();
		assert.equal(response, true);
	});
}
