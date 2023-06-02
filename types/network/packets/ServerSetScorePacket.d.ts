/**
 * ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
 * ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
 * ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
 * ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
 * ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
 * ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
 *
 * The content of this file is licensed using the CC-BY-4.0 license
 * which requires you to agree to its terms if you wish to use or make any changes to it.
 *
 * @license CC-BY-4.0
 * @link Github - https://github.com/andriycraft/GreenFrogMCBE
 * @link Discord - https://discord.gg/UFqrnAbqjP
 */
export = ServerSetScorePacket;
declare class ServerSetScorePacket extends PacketConstructor {
	/**
	 * Sets the action of the scoreboard update
	 * @param {ScoreActions} new_action The action to set
	 */
	setAction(new_action: { readonly UPDATE: "change"; readonly REMOVE: "remove"; readonly UNKNOWN: "unknown"; readonly CHANGE: any }): void;
	/**
	 * Sets the entries of the scoreboard update
	 * @param {Array} new_entries The entries to set
	 */
	setEntries(new_entries: any[]): void;
	/**
	 * Returns the scoreboard action
	 * @returns {ScoreActions} The scoreboard action
	 */
	getAction(): {
		readonly UPDATE: "change";
		readonly REMOVE: "remove";
		readonly UNKNOWN: "unknown";
		readonly CHANGE: any;
	};
	/**
	 * Returns the scoreboard entries
	 * @returns {Array} The scoreboard entries
	 */
	getEntries(): any[];
	/**
	 * Sends the packet to the client
	 * @param {Client} client The client to send the packet to
	 */
	writePacket(client: Client): void;
}
import PacketConstructor = require("./PacketConstructor");