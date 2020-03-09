import * as html from "../html.js";
import { Item } from "../component.js";

export default class Playlist extends Item {
	constructor(name) {
		super();
		this.name = name;
	}

	connectedCallback() {
		html.icon("playlist-music", this)
		html.node("h2", {}, this.name, this);

/*
	playButton(TYPE_PLAYLIST, name, node);
	addButton(TYPE_PLAYLIST, name, node);
	deleteButton(TYPE_PLAYLIST, name, node);
*/
	}
}

customElements.define("cyp-playlist", Playlist);