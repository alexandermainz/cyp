import * as nav from "./nav.js";
import * as mpd from "./lib/mpd.js";
import * as player from "./player.js";

import * as queue from "./queue.js";

const components = { queue };

export function activate(what) {
	for (let id in components) {
		let node = document.querySelector(`#${id}`);
		if (what == id) {
			node.style.display = "";
			components[id].activate();
		} else {
			node.style.display = "none";
		}
	}
	nav.active(what);
}

async function init() {
	nav.init(document.querySelector("nav"));
	for (let id in components) {
		let node = document.querySelector(`#${id}`);
		components[id].init(node);
	}

	await mpd.init();
	player.init(document.querySelector("#player"));

	activate("queue");
	window.mpd = mpd;
}


init();