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
 * @link Github - https://github.com/GreenFrogMCBE/GreenFrogMCBE
 * @link Discord - https://discord.gg/UFqrnAbqjP
 */
const Packet = require("./Packet")

const { EventEmitter, Event } = require("@kotinash/better-events")

class ClientPlayerAuthInputPacket extends Packet {
	name = "player_auth_input"

	/**
	 * @param {import("Frog").Player} player
	 * @param {import("Frog").Packet} packet
	 */
	async read_packet(player, packet) {
		const { x, y, z } = packet.data.params.position
		const { pitch, yaw } = packet.data.params
		const fixedY = y - 2

		if (player.location.x === x && player.location.y === fixedY && player.location.z === z) return

		EventEmitter.emit(
			new Event(
				"playerMove",
				{
					player,
					x,
					y: fixedY,
					z,
					pitch,
					yaw,
					on_ground: player.location.on_ground,
				},
				(() => {
					player.world.handle_fall_damage(player, { x, y, z })

					player.location.x = x
					player.location.y = fixedY
					player.location.z = z
					player.location.yaw = yaw
					player.location.pitch = pitch
					player.location.on_ground = false
				}),
				(() => {
					player.teleport(player.location.x, y, player.location.z)
				})
			)
		)
	}
}

module.exports = ClientPlayerAuthInputPacket
