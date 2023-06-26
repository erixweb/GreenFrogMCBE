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
const PacketConstructor = require("./PacketConstructor");

const GamemodeLegacy = require("../../api/player/GamemodeLegacy");

const CreativeInventory = require("../../inventory/CreativeInventory");
const ContainerInventory = require("../../inventory/ContainerInventory");

class ClientItemStackRequestPacket extends PacketConstructor {
	/**
	 * Returns the packet name
	 * @returns {string}
	 */
	getPacketName() {
		return "item_stack_request";
	}

	/**
	 * Reads the packet from player
	 *
	 * @param {Client} player
	 * @param {JSON} packet
	 */
	async readPacket(player, packet) {
		if (player.inventory.container.isOpen) {
			ContainerInventory.handle(player, packet)
			return;
		}

		CreativeInventory.handle(player, packet);
	}
}

module.exports = ClientItemStackRequestPacket;
