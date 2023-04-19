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
let coordinates = {};
let radius = 64;
let saved_chunks = [];

const PacketConstructor = require("./PacketConstructor");

class ServerNetworkChunkPublisherUpdatePacket extends PacketConstructor {
	/**
	 * Returns the packet name
	 * @returns {string}
	 */
	getPacketName() {
		return "network_chunk_publisher_update";
	}

	/**
	 * Returns if is the packet critical?
	 * @returns {boolean}
	 */
	isCriticalPacket() {
		return false;
	}

	/**
	 * Sets the coordinates of the chunk to load
	 *
	 * @param x - The X coordinate.
	 * @param y - The Y coordinate.
	 * @param z - The Z coordinate.
	 */
	setCoordinates(x, y, z) {
		coordinates.x = x;
		coordinates.y = y;
		coordinates.z = z;
	}

	/**
	 * Sets the radius of chunks for client to load
	 * @param new_radius
	 */
	setRadius(new_radius) {
		radius = new_radius;
	}

	/**
	 * Sets the list saved chunks
	 * @param new_saved_chunks
	 */
	setSavedChunks(new_saved_chunks) {
		saved_chunks = new_saved_chunks;
	}

	/**
	 * Returns the coordinates of chunks to load.
	 * @returns {JSON} The coordinates.
	 */
	getCords() {
		return coordinates;
	}

	/**
	 * Returns the radius of chunks to load.
	 * @returns {number} The radius.
	 */
	getRadius() {
		return radius;
	}

	/**
	 * Returns the list of saved chunks.
	 * @returns {Array} The list of saved chunks.
	 */
	getSavedChunks() {
		return saved_chunks;
	}

	/**
	 * Sends the packet to the client
	 * @param {Client} client
	 */
	writePacket(client) {
		client.queue(this.getPacketName(), {
			coordinates: this.getCords(),
			radius: this.getRadius(),
			saved_chunks: this.getSavedChunks(),
		});
	}
}

module.exports = ServerNetworkChunkPublisherUpdatePacket;
