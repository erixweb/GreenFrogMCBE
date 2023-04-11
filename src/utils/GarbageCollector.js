/**
 * ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
 * ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
 * ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
 * ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
 * ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
 * ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
 *
 *
 * Copyright 2023 andriycraft
 * Github: https://github.com/andriycraft/GreenFrogMCBE
 */

const Frog = require('../Frog');
const Logger = require('../server/Logger');

const PlayerInfo = require('../api/PlayerInfo');

module.exports = {
	/**
	 * Removes data of offline players
	 */
	clearOfflinePlayers() {
		Frog.eventEmitter.emit('serverOfflinePlayersGarbageCollection', {
			server: require('../Server'),
			players: PlayerInfo.players,
			cancel() {
				return false;
			},
		});

		for (let i = 0; i < PlayerInfo.players.length; i++) {
			if (PlayerInfo.players[i].offline) {
				Logger.debug('[Garbage collector] Deleted ' + PlayerInfo.players[i].username);
				PlayerInfo.players.splice(i, 1);
				i--;
			}
		}
	},

	/**
	 * Clears RAM from useless entries
	 */
	gc() {
		Logger.debug('[Garbage collector] Starting Garbage-collect everything...');
		this.clearOfflinePlayers();

		Frog.eventEmitter.emit('serverGarbageCollection', {
			server: require('../Server'),
			players: PlayerInfo.players,
			cancel() {
				return false;
			},
		});

		for (let i = 0; i < PlayerInfo.players.length; i++) {
			const player = PlayerInfo.players[i];
			delete player.q;
			delete player.q2;
			delete player.profile;
			delete player.skinData;
			delete player.userData;
		}

		Logger.debug('[Garbage collector] Finished');
	},
};
