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
const PacketHandlingError = require("../exceptions/PacketHandlingError");
const InventorySlot = require("../InventorySlot");
const Logger = require("../../../server/Logger");
const Handler = require("./Handler");

class ItemStackRequest extends Handler {
  validate(client) {
    if (client.gamemode !== 1)
      throw new PacketHandlingError(
        "An attempt to get items from creative mode, while the player is not in creative mode"
      );
  }

  handle(client, packet) {
    try {
      let count = 0;
      let network_id = 0;
      let block_runtime_id = 0;
      try {
        count = packet.data.params.requests[0].actions[2].count;
      } catch (e) {
        /* If there is no count this means that the player removed the item from his inventory */
      }
      try {
        network_id =
          packet.data.params.requests[0].actions[1].result_items[0].network_id;
      } catch (e) {
        /* If there is no network id this means that the player removed the item from his inventory */
      }
      try {
        block_runtime_id =
          packet.data.params.requests[0].actions[1].result_items[0]
            .block_runtime_id;
      } catch (e) {
        /* If there is no block runtime id this means that the player removed the item from his inventory */
      }
      let jsondata = {
        count,
        network_id,
        block_runtime_id,
      };
      client.items.push(jsondata);
      for (let i = 0; i < client.items.length; i++) {
        const is = new InventorySlot();
        is.setWindowId("inventory");
        is.setSlot(i);
        is.setItemData({
          network_id: client.items[i].network_id,
          count: client.items[i].count,
          metadata: 0,
          has_stack_id: 1,
          stack_id: 1,
          block_runtime_id: client.items[i].block_runtime_id,
          extra: {
            has_nbt: 0,
            can_place_on: [],
            can_destroy: [],
          },
        });
        is.send(client);
      }
    } catch (e) {
      Logger.log(
        `Failed to handle item request from ${client.username}: ${e.stack}`,
        "error"
      );
    }
  }
}

module.exports = ItemStackRequest;
