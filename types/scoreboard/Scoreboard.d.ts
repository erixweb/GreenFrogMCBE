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
export = Scoreboard;
/**
 * Represents a scoreboard that can be displayed to a player.
 */
declare class Scoreboard {
	/** @type {string} - The display name of the scoreboard. */
	displayName: string;
	/** @type {DisplaySlots} - The display slot of the scoreboard. */
	displaySlot: {
		readonly LIST: "list";
		readonly SIDEBAR: "sidebar";
		readonly BELOWNAME: "belowname";
	};
	/** @type {CreteriaNames} - The criteria name of the scoreboard. */
	criteriaName: {
		readonly DUMMY: "dummy";
	};
	/**
	 * @type {string}
	 * The name of the scoreboard objective.
	 * A random string is generated by default.
	 */
	objectiveName: string;
	/** @type {number} - The sort order of the scoreboard. */
	sortOrder: number;
	/** @type {Client} - The player to whom the scoreboard will be displayed. */
	player: Client;
	/**
	 * Sends the scoreboard to the player.
	 */
	sendScoreboard(): void;
	/**
	 * Sets a score on the scoreboard.
	 *
	 * @param {number} score - The score to set.
	 * @param {string} text - The text to display alongside the score.
	 * @param {ScoreActions} [action=ScoreActions.UPDATE] - The action to perform when setting the score.
	 * @param {EntryTypes} [entry_type=EntryTypes.TEXT] - The type of the score entry.
	 * @param {number} [entity_unique_id] - The unique ID of the entity associated with the score.
	 */
	setScore(
		score: number,
		text: string,
		entry_type?: {
			readonly PLAYER: "player";
			readonly ENTITY: "entity";
			readonly TEXT: "fake_player";
		},
		entity_unique_id?: number
	): void;
	/**
	 * Deletes a score on the scoreboard.
	 *
	 * @param {number} score - The score to set.
	 */
	deleteScore(score: number): void;
	/**
	 * Deletes the scoreboard.
	 */
	deleteScoreboard(): void;
}