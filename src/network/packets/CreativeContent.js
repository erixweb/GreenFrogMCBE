class CreativeContent extends require("./Packet") {
  name() {
    return "creative_content";
  }

  validate(client) {
    if (!client) throw new Error("Packet processing error. Client is null");
  }

  writePacket(client) {
    this.validate(client);
    client.write(this.name(), {
      items: [
        {
          entry_id: 1,
          item: {
            network_id: 5,
            count: 1,
            metadata: 0,
            block_runtime_id: 9805,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 2,
          item: {
            network_id: 5,
            count: 1,
            metadata: 0,
            block_runtime_id: 9806,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 3,
          item: {
            network_id: 5,
            count: 1,
            metadata: 0,
            block_runtime_id: 9807,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 4,
          item: {
            network_id: 5,
            count: 1,
            metadata: 0,
            block_runtime_id: 9808,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 5,
          item: {
            network_id: 5,
            count: 1,
            metadata: 0,
            block_runtime_id: 9809,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 6,
          item: {
            network_id: 5,
            count: 1,
            metadata: 0,
            block_runtime_id: 9810,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 7,
          item: {
            network_id: -486,
            count: 1,
            metadata: 0,
            block_runtime_id: 1570,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 8,
          item: {
            network_id: -242,
            count: 1,
            metadata: 0,
            block_runtime_id: 7399,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 9,
          item: {
            network_id: -243,
            count: 1,
            metadata: 0,
            block_runtime_id: 1543,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 10,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1805,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 11,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1806,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 12,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1807,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 13,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1808,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 14,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1809,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 15,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1810,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 16,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1817,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 17,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1812,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 18,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1813,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 19,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1811,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 20,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1814,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 21,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1818,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 22,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1815,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 23,
          item: {
            network_id: 139,
            count: 1,
            metadata: 0,
            block_runtime_id: 1816,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 24,
          item: {
            network_id: -277,
            count: 1,
            metadata: 0,
            block_runtime_id: 5707,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 25,
          item: {
            network_id: -297,
            count: 1,
            metadata: 0,
            block_runtime_id: 10496,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 26,
          item: {
            network_id: -278,
            count: 1,
            metadata: 0,
            block_runtime_id: 1594,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 27,
          item: {
            network_id: -382,
            count: 1,
            metadata: 0,
            block_runtime_id: 12260,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 28,
          item: {
            network_id: -390,
            count: 1,
            metadata: 0,
            block_runtime_id: 7636,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 29,
          item: {
            network_id: -386,
            count: 1,
            metadata: 0,
            block_runtime_id: 11995,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 30,
          item: {
            network_id: -394,
            count: 1,
            metadata: 0,
            block_runtime_id: 659,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 31,
          item: {
            network_id: -481,
            count: 1,
            metadata: 0,
            block_runtime_id: 1353,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 32,
          item: {
            network_id: 85,
            count: 1,
            metadata: 0,
            block_runtime_id: 11542,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 33,
          item: {
            network_id: 85,
            count: 1,
            metadata: 0,
            block_runtime_id: 11543,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 34,
          item: {
            network_id: 85,
            count: 1,
            metadata: 0,
            block_runtime_id: 11544,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 35,
          item: {
            network_id: 85,
            count: 1,
            metadata: 0,
            block_runtime_id: 11545,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 36,
          item: {
            network_id: 85,
            count: 1,
            metadata: 0,
            block_runtime_id: 11546,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 37,
          item: {
            network_id: 85,
            count: 1,
            metadata: 0,
            block_runtime_id: 11547,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 38,
          item: {
            network_id: -491,
            count: 1,
            metadata: 0,
            block_runtime_id: 10405,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 39,
          item: {
            network_id: 113,
            count: 1,
            metadata: 0,
            block_runtime_id: 6071,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 40,
          item: {
            network_id: -256,
            count: 1,
            metadata: 0,
            block_runtime_id: 12174,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 41,
          item: {
            network_id: -257,
            count: 1,
            metadata: 0,
            block_runtime_id: 8819,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 42,
          item: {
            network_id: 107,
            count: 1,
            metadata: 0,
            block_runtime_id: 76,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 43,
          item: {
            network_id: 183,
            count: 1,
            metadata: 0,
            block_runtime_id: 10356,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 44,
          item: {
            network_id: 184,
            count: 1,
            metadata: 0,
            block_runtime_id: 5170,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 45,
          item: {
            network_id: 185,
            count: 1,
            metadata: 0,
            block_runtime_id: 7946,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 46,
          item: {
            network_id: 187,
            count: 1,
            metadata: 0,
            block_runtime_id: 11764,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 47,
          item: {
            network_id: 186,
            count: 1,
            metadata: 0,
            block_runtime_id: 5950,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 48,
          item: {
            network_id: -492,
            count: 1,
            metadata: 0,
            block_runtime_id: 6406,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 49,
          item: {
            network_id: -258,
            count: 1,
            metadata: 0,
            block_runtime_id: 6826,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 50,
          item: {
            network_id: -259,
            count: 1,
            metadata: 0,
            block_runtime_id: 7980,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 51,
          item: {
            network_id: -180,
            count: 1,
            metadata: 0,
            block_runtime_id: 864,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 52,
          item: {
            network_id: 67,
            count: 1,
            metadata: 0,
            block_runtime_id: 5101,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 53,
          item: {
            network_id: -179,
            count: 1,
            metadata: 0,
            block_runtime_id: 5869,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 54,
          item: {
            network_id: 53,
            count: 1,
            metadata: 0,
            block_runtime_id: 273,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 55,
          item: {
            network_id: 134,
            count: 1,
            metadata: 0,
            block_runtime_id: 128,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 56,
          item: {
            network_id: 135,
            count: 1,
            metadata: 0,
            block_runtime_id: 10781,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 57,
          item: {
            network_id: 136,
            count: 1,
            metadata: 0,
            block_runtime_id: 10745,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 58,
          item: {
            network_id: 163,
            count: 1,
            metadata: 0,
            block_runtime_id: 9950,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 59,
          item: {
            network_id: 164,
            count: 1,
            metadata: 0,
            block_runtime_id: 7628,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 60,
          item: {
            network_id: -488,
            count: 1,
            metadata: 0,
            block_runtime_id: 6376,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 61,
          item: {
            network_id: 109,
            count: 1,
            metadata: 0,
            block_runtime_id: 1554,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 62,
          item: {
            network_id: -175,
            count: 1,
            metadata: 0,
            block_runtime_id: 9233,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 63,
          item: {
            network_id: 128,
            count: 1,
            metadata: 0,
            block_runtime_id: 4980,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 64,
          item: {
            network_id: -177,
            count: 1,
            metadata: 0,
            block_runtime_id: 5020,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 65,
          item: {
            network_id: 180,
            count: 1,
            metadata: 0,
            block_runtime_id: 7931,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 66,
          item: {
            network_id: -176,
            count: 1,
            metadata: 0,
            block_runtime_id: 8127,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 67,
          item: {
            network_id: -169,
            count: 1,
            metadata: 0,
            block_runtime_id: 4546,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 68,
          item: {
            network_id: -172,
            count: 1,
            metadata: 0,
            block_runtime_id: 5927,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 69,
          item: {
            network_id: -170,
            count: 1,
            metadata: 0,
            block_runtime_id: 6172,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 70,
          item: {
            network_id: -173,
            count: 1,
            metadata: 0,
            block_runtime_id: 10486,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 71,
          item: {
            network_id: -171,
            count: 1,
            metadata: 0,
            block_runtime_id: 7889,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 72,
          item: {
            network_id: -174,
            count: 1,
            metadata: 0,
            block_runtime_id: 10806,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 73,
          item: {
            network_id: 108,
            count: 1,
            metadata: 0,
            block_runtime_id: 10302,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 74,
          item: {
            network_id: 114,
            count: 1,
            metadata: 0,
            block_runtime_id: 106,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 75,
          item: {
            network_id: -184,
            count: 1,
            metadata: 0,
            block_runtime_id: 10374,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 76,
          item: {
            network_id: -178,
            count: 1,
            metadata: 0,
            block_runtime_id: 10140,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 77,
          item: {
            network_id: 156,
            count: 1,
            metadata: 0,
            block_runtime_id: 6932,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 78,
          item: {
            network_id: -185,
            count: 1,
            metadata: 0,
            block_runtime_id: 11878,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 79,
          item: {
            network_id: 203,
            count: 1,
            metadata: 0,
            block_runtime_id: 11933,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 80,
          item: {
            network_id: -2,
            count: 1,
            metadata: 0,
            block_runtime_id: 11441,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 81,
          item: {
            network_id: -3,
            count: 1,
            metadata: 0,
            block_runtime_id: 11608,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 82,
          item: {
            network_id: -4,
            count: 1,
            metadata: 0,
            block_runtime_id: 206,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 83,
          item: {
            network_id: -254,
            count: 1,
            metadata: 0,
            block_runtime_id: 10038,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 84,
          item: {
            network_id: -255,
            count: 1,
            metadata: 0,
            block_runtime_id: 5111,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 85,
          item: {
            network_id: -276,
            count: 1,
            metadata: 0,
            block_runtime_id: 10797,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 86,
          item: {
            network_id: -292,
            count: 1,
            metadata: 0,
            block_runtime_id: 6078,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 87,
          item: {
            network_id: -275,
            count: 1,
            metadata: 0,
            block_runtime_id: 6258,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 88,
          item: {
            network_id: -354,
            count: 1,
            metadata: 0,
            block_runtime_id: 6385,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 89,
          item: {
            network_id: -355,
            count: 1,
            metadata: 0,
            block_runtime_id: 6368,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 90,
          item: {
            network_id: -356,
            count: 1,
            metadata: 0,
            block_runtime_id: 6086,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 91,
          item: {
            network_id: -357,
            count: 1,
            metadata: 0,
            block_runtime_id: 581,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 92,
          item: {
            network_id: -358,
            count: 1,
            metadata: 0,
            block_runtime_id: 623,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 93,
          item: {
            network_id: -359,
            count: 1,
            metadata: 0,
            block_runtime_id: 5679,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 94,
          item: {
            network_id: -360,
            count: 1,
            metadata: 0,
            block_runtime_id: 9917,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 95,
          item: {
            network_id: -448,
            count: 1,
            metadata: 0,
            block_runtime_id: 8806,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 96,
          item: {
            network_id: -381,
            count: 1,
            metadata: 0,
            block_runtime_id: 147,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 97,
          item: {
            network_id: -389,
            count: 1,
            metadata: 0,
            block_runtime_id: 6818,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 98,
          item: {
            network_id: -385,
            count: 1,
            metadata: 0,
            block_runtime_id: 522,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 99,
          item: {
            network_id: -393,
            count: 1,
            metadata: 0,
            block_runtime_id: 11600,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 100,
          item: {
            network_id: -480,
            count: 1,
            metadata: 0,
            block_runtime_id: 8103,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 101,
          item: {
            network_id: 359,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 102,
          item: {
            network_id: 553,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 103,
          item: {
            network_id: 554,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 104,
          item: {
            network_id: 555,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 105,
          item: {
            network_id: 556,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 106,
          item: {
            network_id: 557,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 107,
          item: {
            network_id: 634,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 108,
          item: {
            network_id: 372,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 109,
          item: {
            network_id: 616,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 110,
          item: {
            network_id: 617,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 111,
          item: {
            network_id: 96,
            count: 1,
            metadata: 0,
            block_runtime_id: 229,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 112,
          item: {
            network_id: -149,
            count: 1,
            metadata: 0,
            block_runtime_id: 10324,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 113,
          item: {
            network_id: -146,
            count: 1,
            metadata: 0,
            block_runtime_id: 10422,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 114,
          item: {
            network_id: -148,
            count: 1,
            metadata: 0,
            block_runtime_id: 7962,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 115,
          item: {
            network_id: -145,
            count: 1,
            metadata: 0,
            block_runtime_id: 8170,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 116,
          item: {
            network_id: -147,
            count: 1,
            metadata: 0,
            block_runtime_id: 11680,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 117,
          item: {
            network_id: -496,
            count: 1,
            metadata: 0,
            block_runtime_id: 6266,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 118,
          item: {
            network_id: 167,
            count: 1,
            metadata: 0,
            block_runtime_id: 549,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 119,
          item: {
            network_id: -246,
            count: 1,
            metadata: 0,
            block_runtime_id: 6114,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 120,
          item: {
            network_id: -247,
            count: 1,
            metadata: 0,
            block_runtime_id: 6898,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 121,
          item: {
            network_id: 101,
            count: 1,
            metadata: 0,
            block_runtime_id: 6966,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 122,
          item: {
            network_id: 20,
            count: 1,
            metadata: 0,
            block_runtime_id: 9914,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 123,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1756,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 124,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1764,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 125,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1763,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 126,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1771,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 127,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1768,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 128,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1770,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 129,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1757,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 130,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1760,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 131,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1761,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 132,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1769,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 133,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1765,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 134,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1759,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 135,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1767,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 136,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1766,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 137,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1758,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 138,
          item: {
            network_id: 241,
            count: 1,
            metadata: 0,
            block_runtime_id: 1762,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 139,
          item: {
            network_id: -334,
            count: 1,
            metadata: 0,
            block_runtime_id: 9325,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 140,
          item: {
            network_id: 102,
            count: 1,
            metadata: 0,
            block_runtime_id: 7798,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 141,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7401,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 142,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7409,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 143,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7408,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 144,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7416,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 145,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7413,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 146,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7415,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 147,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7402,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 148,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7405,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 149,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7406,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 150,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7414,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 151,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7410,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 152,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7404,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 153,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7412,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 154,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7411,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 155,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7403,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 156,
          item: {
            network_id: 160,
            count: 1,
            metadata: 0,
            block_runtime_id: 7407,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 157,
          item: {
            network_id: 65,
            count: 1,
            metadata: 0,
            block_runtime_id: 12441,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 158,
          item: {
            network_id: -165,
            count: 1,
            metadata: 0,
            block_runtime_id: 4964,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 159,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6049,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 160,
          item: {
            network_id: -166,
            count: 1,
            metadata: 0,
            block_runtime_id: 8404,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 161,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6052,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 162,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8375,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 163,
          item: {
            network_id: 158,
            count: 1,
            metadata: 0,
            block_runtime_id: 7851,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 164,
          item: {
            network_id: 158,
            count: 1,
            metadata: 0,
            block_runtime_id: 7852,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 165,
          item: {
            network_id: 158,
            count: 1,
            metadata: 0,
            block_runtime_id: 7853,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 166,
          item: {
            network_id: 158,
            count: 1,
            metadata: 0,
            block_runtime_id: 7854,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 167,
          item: {
            network_id: 158,
            count: 1,
            metadata: 0,
            block_runtime_id: 7855,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 168,
          item: {
            network_id: 158,
            count: 1,
            metadata: 0,
            block_runtime_id: 7856,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 169,
          item: {
            network_id: -489,
            count: 1,
            metadata: 0,
            block_runtime_id: 1772,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 170,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6054,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 171,
          item: {
            network_id: -166,
            count: 1,
            metadata: 0,
            block_runtime_id: 8402,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 172,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6050,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 173,
          item: {
            network_id: -166,
            count: 1,
            metadata: 0,
            block_runtime_id: 8405,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 174,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8376,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 175,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8370,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 176,
          item: {
            network_id: -166,
            count: 1,
            metadata: 0,
            block_runtime_id: 8406,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 177,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8387,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 178,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8392,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 179,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8393,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 180,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8390,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 181,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8391,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 182,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8389,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 183,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8388,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 184,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6053,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 185,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6056,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 186,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8377,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 187,
          item: {
            network_id: -162,
            count: 1,
            metadata: 0,
            block_runtime_id: 8386,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 188,
          item: {
            network_id: 44,
            count: 1,
            metadata: 0,
            block_runtime_id: 6055,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 189,
          item: {
            network_id: -166,
            count: 1,
            metadata: 0,
            block_runtime_id: 8403,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 190,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8371,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 191,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8372,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 192,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8373,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 193,
          item: {
            network_id: 182,
            count: 1,
            metadata: 0,
            block_runtime_id: 8374,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 194,
          item: {
            network_id: -264,
            count: 1,
            metadata: 0,
            block_runtime_id: 9250,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 195,
          item: {
            network_id: -265,
            count: 1,
            metadata: 0,
            block_runtime_id: 10254,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 196,
          item: {
            network_id: -282,
            count: 1,
            metadata: 0,
            block_runtime_id: 1533,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 197,
          item: {
            network_id: -293,
            count: 1,
            metadata: 0,
            block_runtime_id: 9752,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 198,
          item: {
            network_id: -284,
            count: 1,
            metadata: 0,
            block_runtime_id: 5971,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 199,
          item: {
            network_id: -361,
            count: 1,
            metadata: 0,
            block_runtime_id: 7800,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 200,
          item: {
            network_id: -362,
            count: 1,
            metadata: 0,
            block_runtime_id: 10372,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 201,
          item: {
            network_id: -363,
            count: 1,
            metadata: 0,
            block_runtime_id: 9787,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 202,
          item: {
            network_id: -364,
            count: 1,
            metadata: 0,
            block_runtime_id: 7863,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 203,
          item: {
            network_id: -365,
            count: 1,
            metadata: 0,
            block_runtime_id: 11993,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 204,
          item: {
            network_id: -366,
            count: 1,
            metadata: 0,
            block_runtime_id: 249,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 205,
          item: {
            network_id: -367,
            count: 1,
            metadata: 0,
            block_runtime_id: 10317,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 206,
          item: {
            network_id: -449,
            count: 1,
            metadata: 0,
            block_runtime_id: 1323,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 207,
          item: {
            network_id: -380,
            count: 1,
            metadata: 0,
            block_runtime_id: 11488,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 208,
          item: {
            network_id: -384,
            count: 1,
            metadata: 0,
            block_runtime_id: 288,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 209,
          item: {
            network_id: -388,
            count: 1,
            metadata: 0,
            block_runtime_id: 6072,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 210,
          item: {
            network_id: -392,
            count: 1,
            metadata: 0,
            block_runtime_id: 5109,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 211,
          item: {
            network_id: -478,
            count: 1,
            metadata: 0,
            block_runtime_id: 5687,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 212,
          item: {
            network_id: 45,
            count: 1,
            metadata: 0,
            block_runtime_id: 6930,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 213,
          item: {
            network_id: -302,
            count: 1,
            metadata: 0,
            block_runtime_id: 11427,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 214,
          item: {
            network_id: -303,
            count: 1,
            metadata: 0,
            block_runtime_id: 6333,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 215,
          item: {
            network_id: -304,
            count: 1,
            metadata: 0,
            block_runtime_id: 10109,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 216,
          item: {
            network_id: 98,
            count: 1,
            metadata: 0,
            block_runtime_id: 10319,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 217,
          item: {
            network_id: 98,
            count: 1,
            metadata: 0,
            block_runtime_id: 10320,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 218,
          item: {
            network_id: 98,
            count: 1,
            metadata: 0,
            block_runtime_id: 10321,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 219,
          item: {
            network_id: 98,
            count: 1,
            metadata: 0,
            block_runtime_id: 10322,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 220,
          item: {
            network_id: 206,
            count: 1,
            metadata: 0,
            block_runtime_id: 281,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 221,
          item: {
            network_id: 168,
            count: 1,
            metadata: 0,
            block_runtime_id: 9837,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 222,
          item: {
            network_id: -274,
            count: 1,
            metadata: 0,
            block_runtime_id: 6845,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 223,
          item: {
            network_id: -280,
            count: 1,
            metadata: 0,
            block_runtime_id: 11376,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 224,
          item: {
            network_id: -281,
            count: 1,
            metadata: 0,
            block_runtime_id: 6367,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 225,
          item: {
            network_id: -279,
            count: 1,
            metadata: 0,
            block_runtime_id: 7627,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 226,
          item: {
            network_id: -387,
            count: 1,
            metadata: 0,
            block_runtime_id: 6362,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 227,
          item: {
            network_id: -409,
            count: 1,
            metadata: 0,
            block_runtime_id: 5937,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 228,
          item: {
            network_id: -391,
            count: 1,
            metadata: 0,
            block_runtime_id: 8045,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 229,
          item: {
            network_id: -410,
            count: 1,
            metadata: 0,
            block_runtime_id: 7945,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 230,
          item: {
            network_id: -395,
            count: 1,
            metadata: 0,
            block_runtime_id: 7799,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 231,
          item: {
            network_id: 4,
            count: 1,
            metadata: 0,
            block_runtime_id: 5008,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 232,
          item: {
            network_id: 48,
            count: 1,
            metadata: 0,
            block_runtime_id: 252,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 233,
          item: {
            network_id: -379,
            count: 1,
            metadata: 0,
            block_runtime_id: 10442,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 234,
          item: {
            network_id: -183,
            count: 1,
            metadata: 0,
            block_runtime_id: 6363,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 235,
          item: {
            network_id: 24,
            count: 1,
            metadata: 0,
            block_runtime_id: 5046,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 236,
          item: {
            network_id: 24,
            count: 1,
            metadata: 0,
            block_runtime_id: 5047,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 237,
          item: {
            network_id: 24,
            count: 1,
            metadata: 0,
            block_runtime_id: 5048,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 238,
          item: {
            network_id: 24,
            count: 1,
            metadata: 0,
            block_runtime_id: 5049,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 239,
          item: {
            network_id: 179,
            count: 1,
            metadata: 0,
            block_runtime_id: 10352,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 240,
          item: {
            network_id: 179,
            count: 1,
            metadata: 0,
            block_runtime_id: 10353,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 241,
          item: {
            network_id: 179,
            count: 1,
            metadata: 0,
            block_runtime_id: 10354,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 242,
          item: {
            network_id: 179,
            count: 1,
            metadata: 0,
            block_runtime_id: 10355,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 243,
          item: {
            network_id: 173,
            count: 1,
            metadata: 0,
            block_runtime_id: 7979,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 244,
          item: {
            network_id: -139,
            count: 1,
            metadata: 0,
            block_runtime_id: 12157,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 245,
          item: {
            network_id: 41,
            count: 1,
            metadata: 0,
            block_runtime_id: 323,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 246,
          item: {
            network_id: 42,
            count: 1,
            metadata: 0,
            block_runtime_id: 12440,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 247,
          item: {
            network_id: -340,
            count: 1,
            metadata: 0,
            block_runtime_id: 6816,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 248,
          item: {
            network_id: -341,
            count: 1,
            metadata: 0,
            block_runtime_id: 823,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 249,
          item: {
            network_id: -342,
            count: 1,
            metadata: 0,
            block_runtime_id: 12424,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 250,
          item: {
            network_id: -343,
            count: 1,
            metadata: 0,
            block_runtime_id: 4946,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 251,
          item: {
            network_id: -344,
            count: 1,
            metadata: 0,
            block_runtime_id: 11912,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 252,
          item: {
            network_id: -345,
            count: 1,
            metadata: 0,
            block_runtime_id: 1309,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 253,
          item: {
            network_id: -346,
            count: 1,
            metadata: 0,
            block_runtime_id: 1322,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 254,
          item: {
            network_id: -446,
            count: 1,
            metadata: 0,
            block_runtime_id: 11720,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 255,
          item: {
            network_id: -347,
            count: 1,
            metadata: 0,
            block_runtime_id: 6854,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 256,
          item: {
            network_id: -348,
            count: 1,
            metadata: 0,
            block_runtime_id: 9916,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 257,
          item: {
            network_id: -349,
            count: 1,
            metadata: 0,
            block_runtime_id: 11359,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 258,
          item: {
            network_id: -350,
            count: 1,
            metadata: 0,
            block_runtime_id: 8059,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 259,
          item: {
            network_id: -351,
            count: 1,
            metadata: 0,
            block_runtime_id: 11471,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 260,
          item: {
            network_id: -352,
            count: 1,
            metadata: 0,
            block_runtime_id: 5202,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 261,
          item: {
            network_id: -353,
            count: 1,
            metadata: 0,
            block_runtime_id: 7400,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 262,
          item: {
            network_id: -447,
            count: 1,
            metadata: 0,
            block_runtime_id: 214,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 263,
          item: {
            network_id: 133,
            count: 1,
            metadata: 0,
            block_runtime_id: 1782,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 264,
          item: {
            network_id: 57,
            count: 1,
            metadata: 0,
            block_runtime_id: 272,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 265,
          item: {
            network_id: 22,
            count: 1,
            metadata: 0,
            block_runtime_id: 6065,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 266,
          item: {
            network_id: -451,
            count: 1,
            metadata: 0,
            block_runtime_id: 12439,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 267,
          item: {
            network_id: -452,
            count: 1,
            metadata: 0,
            block_runtime_id: 7850,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 268,
          item: {
            network_id: -453,
            count: 1,
            metadata: 0,
            block_runtime_id: 591,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 269,
          item: {
            network_id: 155,
            count: 1,
            metadata: 0,
            block_runtime_id: 5089,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 270,
          item: {
            network_id: 155,
            count: 1,
            metadata: 0,
            block_runtime_id: 5091,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 271,
          item: {
            network_id: 155,
            count: 1,
            metadata: 0,
            block_runtime_id: 5090,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 272,
          item: {
            network_id: 155,
            count: 1,
            metadata: 0,
            block_runtime_id: 5092,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 273,
          item: {
            network_id: 168,
            count: 1,
            metadata: 0,
            block_runtime_id: 9835,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 274,
          item: {
            network_id: 168,
            count: 1,
            metadata: 0,
            block_runtime_id: 9836,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 275,
          item: {
            network_id: 165,
            count: 1,
            metadata: 0,
            block_runtime_id: 6012,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 276,
          item: {
            network_id: -220,
            count: 1,
            metadata: 0,
            block_runtime_id: 1515,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 277,
          item: {
            network_id: -221,
            count: 1,
            metadata: 0,
            block_runtime_id: 6257,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 278,
          item: {
            network_id: 170,
            count: 1,
            metadata: 0,
            block_runtime_id: 1310,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 279,
          item: {
            network_id: 216,
            count: 1,
            metadata: 0,
            block_runtime_id: 6013,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 280,
          item: {
            network_id: 112,
            count: 1,
            metadata: 0,
            block_runtime_id: 11450,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 281,
          item: {
            network_id: 215,
            count: 1,
            metadata: 0,
            block_runtime_id: 146,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 282,
          item: {
            network_id: -270,
            count: 1,
            metadata: 0,
            block_runtime_id: 5168,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 283,
          item: {
            network_id: -222,
            count: 1,
            metadata: 0,
            block_runtime_id: 12437,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 284,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4083,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 285,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4091,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 286,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4090,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 287,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4098,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 288,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4095,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 289,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4097,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 290,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4084,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 291,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4087,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 292,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4088,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 293,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4096,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 294,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4092,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 295,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4086,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 296,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4094,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 297,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4093,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 298,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4085,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 299,
          item: {
            network_id: 35,
            count: 1,
            metadata: 0,
            block_runtime_id: 4089,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 300,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1572,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 301,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1580,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 302,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1579,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 303,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1587,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 304,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1584,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 305,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1586,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 306,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1573,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 307,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1576,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 308,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1577,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 309,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1585,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 310,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1581,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 311,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1575,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 312,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1583,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 313,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1582,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 314,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1574,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 315,
          item: {
            network_id: 171,
            count: 1,
            metadata: 0,
            block_runtime_id: 1578,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 316,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10022,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 317,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10030,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 318,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10029,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 319,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10037,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 320,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10034,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 321,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10036,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 322,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10023,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 323,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10026,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 324,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10027,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 325,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10035,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 326,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10031,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 327,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10025,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 328,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10033,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 329,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10032,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 330,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10024,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 331,
          item: {
            network_id: 237,
            count: 1,
            metadata: 0,
            block_runtime_id: 10028,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 332,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1275,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 333,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1283,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 334,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1282,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 335,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1290,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 336,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1287,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 337,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1289,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 338,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1276,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 339,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1279,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 340,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1280,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 341,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1288,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 342,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1284,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 343,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1278,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 344,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1286,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 345,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1285,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 346,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1277,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 347,
          item: {
            network_id: 236,
            count: 1,
            metadata: 0,
            block_runtime_id: 1281,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 348,
          item: {
            network_id: 82,
            count: 1,
            metadata: 0,
            block_runtime_id: 10902,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 349,
          item: {
            network_id: 172,
            count: 1,
            metadata: 0,
            block_runtime_id: 872,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 350,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9926,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 351,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9934,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 352,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9933,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 353,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9941,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 354,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9938,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 355,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9940,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 356,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9927,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 357,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9930,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 358,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9931,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 359,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9939,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 360,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9935,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 361,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9929,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 362,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9937,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 363,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9936,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 364,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9928,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 365,
          item: {
            network_id: 159,
            count: 1,
            metadata: 0,
            block_runtime_id: 9932,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 366,
          item: {
            network_id: 220,
            count: 1,
            metadata: 0,
            block_runtime_id: 8154,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 367,
          item: {
            network_id: 228,
            count: 1,
            metadata: 0,
            block_runtime_id: 4540,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 368,
          item: {
            network_id: 227,
            count: 1,
            metadata: 0,
            block_runtime_id: 12431,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 369,
          item: {
            network_id: 235,
            count: 1,
            metadata: 0,
            block_runtime_id: 8800,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 370,
          item: {
            network_id: 232,
            count: 1,
            metadata: 0,
            block_runtime_id: 4940,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 371,
          item: {
            network_id: 234,
            count: 1,
            metadata: 0,
            block_runtime_id: 5944,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 372,
          item: {
            network_id: 221,
            count: 1,
            metadata: 0,
            block_runtime_id: 1774,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 373,
          item: {
            network_id: 224,
            count: 1,
            metadata: 0,
            block_runtime_id: 1536,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 374,
          item: {
            network_id: 225,
            count: 1,
            metadata: 0,
            block_runtime_id: 223,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 375,
          item: {
            network_id: 233,
            count: 1,
            metadata: 0,
            block_runtime_id: 10382,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 376,
          item: {
            network_id: 229,
            count: 1,
            metadata: 0,
            block_runtime_id: 7939,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 377,
          item: {
            network_id: 223,
            count: 1,
            metadata: 0,
            block_runtime_id: 8052,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 378,
          item: {
            network_id: 231,
            count: 1,
            metadata: 0,
            block_runtime_id: 8046,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 379,
          item: {
            network_id: 219,
            count: 1,
            metadata: 0,
            block_runtime_id: 10789,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 380,
          item: {
            network_id: 222,
            count: 1,
            metadata: 0,
            block_runtime_id: 1588,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 381,
          item: {
            network_id: 226,
            count: 1,
            metadata: 0,
            block_runtime_id: 10311,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 382,
          item: {
            network_id: 201,
            count: 1,
            metadata: 0,
            block_runtime_id: 11892,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 383,
          item: {
            network_id: 201,
            count: 1,
            metadata: 0,
            block_runtime_id: 11894,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 384,
          item: {
            network_id: -477,
            count: 1,
            metadata: 0,
            block_runtime_id: 283,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 385,
          item: {
            network_id: -475,
            count: 1,
            metadata: 0,
            block_runtime_id: 10661,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 386,
          item: {
            network_id: 214,
            count: 1,
            metadata: 0,
            block_runtime_id: 6074,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 387,
          item: {
            network_id: -227,
            count: 1,
            metadata: 0,
            block_runtime_id: 9255,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 388,
          item: {
            network_id: -230,
            count: 1,
            metadata: 0,
            block_runtime_id: 7610,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 389,
          item: {
            network_id: -232,
            count: 1,
            metadata: 0,
            block_runtime_id: 5968,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 390,
          item: {
            network_id: -233,
            count: 1,
            metadata: 0,
            block_runtime_id: 10107,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 391,
          item: {
            network_id: -234,
            count: 1,
            metadata: 0,
            block_runtime_id: 6130,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 392,
          item: {
            network_id: -235,
            count: 1,
            metadata: 0,
            block_runtime_id: 24,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 393,
          item: {
            network_id: -377,
            count: 1,
            metadata: 0,
            block_runtime_id: 1780,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 394,
          item: {
            network_id: -236,
            count: 1,
            metadata: 0,
            block_runtime_id: 8412,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 395,
          item: {
            network_id: 3,
            count: 1,
            metadata: 0,
            block_runtime_id: 8333,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 396,
          item: {
            network_id: 3,
            count: 1,
            metadata: 0,
            block_runtime_id: 8334,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 397,
          item: {
            network_id: 60,
            count: 1,
            metadata: 0,
            block_runtime_id: 5689,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 398,
          item: {
            network_id: 2,
            count: 1,
            metadata: 0,
            block_runtime_id: 10753,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 399,
          item: {
            network_id: 198,
            count: 1,
            metadata: 0,
            block_runtime_id: 12259,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 400,
          item: {
            network_id: 243,
            count: 1,
            metadata: 0,
            block_runtime_id: 6815,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 401,
          item: {
            network_id: 110,
            count: 1,
            metadata: 0,
            block_runtime_id: 5076,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 402,
          item: {
            network_id: -473,
            count: 1,
            metadata: 0,
            block_runtime_id: 10456,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 403,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1268,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 404,
          item: {
            network_id: 15,
            count: 1,
            metadata: 0,
            block_runtime_id: 6855,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 405,
          item: {
            network_id: 14,
            count: 1,
            metadata: 0,
            block_runtime_id: 1535,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 406,
          item: {
            network_id: 56,
            count: 1,
            metadata: 0,
            block_runtime_id: 6142,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 407,
          item: {
            network_id: 21,
            count: 1,
            metadata: 0,
            block_runtime_id: 11877,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 408,
          item: {
            network_id: 73,
            count: 1,
            metadata: 0,
            block_runtime_id: 6068,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 409,
          item: {
            network_id: 16,
            count: 1,
            metadata: 0,
            block_runtime_id: 6066,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 410,
          item: {
            network_id: -311,
            count: 1,
            metadata: 0,
            block_runtime_id: 4947,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 411,
          item: {
            network_id: 129,
            count: 1,
            metadata: 0,
            block_runtime_id: 11525,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 412,
          item: {
            network_id: 153,
            count: 1,
            metadata: 0,
            block_runtime_id: 6282,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 413,
          item: {
            network_id: -288,
            count: 1,
            metadata: 0,
            block_runtime_id: 27,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 414,
          item: {
            network_id: -271,
            count: 1,
            metadata: 0,
            block_runtime_id: 9857,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 415,
          item: {
            network_id: -401,
            count: 1,
            metadata: 0,
            block_runtime_id: 11451,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 416,
          item: {
            network_id: -402,
            count: 1,
            metadata: 0,
            block_runtime_id: 9856,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 417,
          item: {
            network_id: -405,
            count: 1,
            metadata: 0,
            block_runtime_id: 12216,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 418,
          item: {
            network_id: -400,
            count: 1,
            metadata: 0,
            block_runtime_id: 11440,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 419,
          item: {
            network_id: -403,
            count: 1,
            metadata: 0,
            block_runtime_id: 10388,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 420,
          item: {
            network_id: -407,
            count: 1,
            metadata: 0,
            block_runtime_id: 10108,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 421,
          item: {
            network_id: -406,
            count: 1,
            metadata: 0,
            block_runtime_id: 11358,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 422,
          item: {
            network_id: -408,
            count: 1,
            metadata: 0,
            block_runtime_id: 105,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 423,
          item: {
            network_id: 13,
            count: 1,
            metadata: 0,
            block_runtime_id: 12466,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 424,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1269,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 425,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1271,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 426,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1273,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 427,
          item: {
            network_id: -273,
            count: 1,
            metadata: 0,
            block_runtime_id: 11763,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 428,
          item: {
            network_id: -378,
            count: 1,
            metadata: 0,
            block_runtime_id: 253,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 429,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1270,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 430,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1272,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 431,
          item: {
            network_id: 1,
            count: 1,
            metadata: 0,
            block_runtime_id: 1274,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 432,
          item: {
            network_id: -291,
            count: 1,
            metadata: 0,
            block_runtime_id: 5075,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 433,
          item: {
            network_id: -383,
            count: 1,
            metadata: 0,
            block_runtime_id: 11932,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 434,
          item: {
            network_id: 12,
            count: 1,
            metadata: 0,
            block_runtime_id: 5974,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 435,
          item: {
            network_id: 12,
            count: 1,
            metadata: 0,
            block_runtime_id: 5975,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 436,
          item: {
            network_id: 81,
            count: 1,
            metadata: 0,
            block_runtime_id: 10764,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 437,
          item: {
            network_id: 17,
            count: 1,
            metadata: 0,
            block_runtime_id: 10444,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 438,
          item: {
            network_id: -10,
            count: 1,
            metadata: 0,
            block_runtime_id: 11721,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 439,
          item: {
            network_id: 17,
            count: 1,
            metadata: 0,
            block_runtime_id: 10445,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 440,
          item: {
            network_id: -5,
            count: 1,
            metadata: 0,
            block_runtime_id: 10046,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 441,
          item: {
            network_id: 17,
            count: 1,
            metadata: 0,
            block_runtime_id: 10446,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 442,
          item: {
            network_id: -6,
            count: 1,
            metadata: 0,
            block_runtime_id: 9322,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 443,
          item: {
            network_id: 17,
            count: 1,
            metadata: 0,
            block_runtime_id: 10447,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 444,
          item: {
            network_id: -7,
            count: 1,
            metadata: 0,
            block_runtime_id: 1257,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 445,
          item: {
            network_id: 162,
            count: 1,
            metadata: 0,
            block_runtime_id: 5607,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 446,
          item: {
            network_id: -8,
            count: 1,
            metadata: 0,
            block_runtime_id: 8814,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 447,
          item: {
            network_id: 162,
            count: 1,
            metadata: 0,
            block_runtime_id: 5608,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 448,
          item: {
            network_id: -9,
            count: 1,
            metadata: 0,
            block_runtime_id: 216,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 449,
          item: {
            network_id: -484,
            count: 1,
            metadata: 0,
            block_runtime_id: 578,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 450,
          item: {
            network_id: -485,
            count: 1,
            metadata: 0,
            block_runtime_id: 12463,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 451,
          item: {
            network_id: -225,
            count: 1,
            metadata: 0,
            block_runtime_id: 9247,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 452,
          item: {
            network_id: -240,
            count: 1,
            metadata: 0,
            block_runtime_id: 10726,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 453,
          item: {
            network_id: -226,
            count: 1,
            metadata: 0,
            block_runtime_id: 10256,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 454,
          item: {
            network_id: -241,
            count: 1,
            metadata: 0,
            block_runtime_id: 11578,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 455,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4099,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 456,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4105,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 457,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4100,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 458,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4106,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 459,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4101,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 460,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4107,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 461,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4102,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 462,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4108,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 463,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4103,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 464,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4109,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 465,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4104,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 466,
          item: {
            network_id: -212,
            count: 1,
            metadata: 0,
            block_runtime_id: 4110,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 467,
          item: {
            network_id: -497,
            count: 1,
            metadata: 0,
            block_runtime_id: 5938,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 468,
          item: {
            network_id: -498,
            count: 1,
            metadata: 0,
            block_runtime_id: 6008,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 469,
          item: {
            network_id: -299,
            count: 1,
            metadata: 0,
            block_runtime_id: 6075,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 470,
          item: {
            network_id: -300,
            count: 1,
            metadata: 0,
            block_runtime_id: 10269,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 471,
          item: {
            network_id: -298,
            count: 1,
            metadata: 0,
            block_runtime_id: 9252,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 472,
          item: {
            network_id: -301,
            count: 1,
            metadata: 0,
            block_runtime_id: 8160,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 473,
          item: {
            network_id: 18,
            count: 1,
            metadata: 0,
            block_runtime_id: 9840,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 474,
          item: {
            network_id: 18,
            count: 1,
            metadata: 0,
            block_runtime_id: 9841,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 475,
          item: {
            network_id: 18,
            count: 1,
            metadata: 0,
            block_runtime_id: 9842,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 476,
          item: {
            network_id: 18,
            count: 1,
            metadata: 0,
            block_runtime_id: 9843,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 477,
          item: {
            network_id: 161,
            count: 1,
            metadata: 0,
            block_runtime_id: 6134,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 478,
          item: {
            network_id: 161,
            count: 1,
            metadata: 0,
            block_runtime_id: 6135,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 479,
          item: {
            network_id: -472,
            count: 1,
            metadata: 0,
            block_runtime_id: 10438,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 480,
          item: {
            network_id: -324,
            count: 1,
            metadata: 0,
            block_runtime_id: 11888,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 481,
          item: {
            network_id: -325,
            count: 1,
            metadata: 0,
            block_runtime_id: 10097,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 482,
          item: {
            network_id: 6,
            count: 1,
            metadata: 0,
            block_runtime_id: 1327,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 483,
          item: {
            network_id: 6,
            count: 1,
            metadata: 0,
            block_runtime_id: 1328,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 484,
          item: {
            network_id: 6,
            count: 1,
            metadata: 0,
            block_runtime_id: 1329,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 485,
          item: {
            network_id: 6,
            count: 1,
            metadata: 0,
            block_runtime_id: 1330,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 486,
          item: {
            network_id: 6,
            count: 1,
            metadata: 0,
            block_runtime_id: 1331,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 487,
          item: {
            network_id: 6,
            count: 1,
            metadata: 0,
            block_runtime_id: 1332,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 488,
          item: {
            network_id: -474,
            count: 1,
            metadata: 0,
            block_runtime_id: 10754,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 489,
          item: {
            network_id: -218,
            count: 1,
            metadata: 0,
            block_runtime_id: 8336,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 490,
          item: {
            network_id: 291,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 491,
          item: {
            network_id: 292,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 492,
          item: {
            network_id: 293,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 493,
          item: {
            network_id: 295,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 494,
          item: {
            network_id: 334,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 495,
          item: {
            network_id: 285,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 496,
          item: {
            network_id: 280,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 497,
          item: {
            network_id: 282,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 498,
          item: {
            network_id: 279,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 499,
          item: {
            network_id: 283,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 500,
          item: {
            network_id: 257,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 501,
          item: {
            network_id: 258,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 502,
          item: {
            network_id: 259,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 503,
          item: {
            network_id: 103,
            count: 1,
            metadata: 0,
            block_runtime_id: 622,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 504,
          item: {
            network_id: 272,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 505,
          item: {
            network_id: 434,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 506,
          item: {
            network_id: 287,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 507,
          item: {
            network_id: 658,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 508,
          item: {
            network_id: 86,
            count: 1,
            metadata: 0,
            block_runtime_id: 6358,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 509,
          item: {
            network_id: -155,
            count: 1,
            metadata: 0,
            block_runtime_id: 11556,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 510,
          item: {
            network_id: 91,
            count: 1,
            metadata: 0,
            block_runtime_id: 10457,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 511,
          item: {
            network_id: 591,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 512,
          item: {
            network_id: 31,
            count: 1,
            metadata: 0,
            block_runtime_id: 1552,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 513,
          item: {
            network_id: 175,
            count: 1,
            metadata: 0,
            block_runtime_id: 8036,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 514,
          item: {
            network_id: 31,
            count: 1,
            metadata: 0,
            block_runtime_id: 1551,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 515,
          item: {
            network_id: 175,
            count: 1,
            metadata: 0,
            block_runtime_id: 8035,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 516,
          item: {
            network_id: 621,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 517,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10262,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 518,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10260,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 519,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10261,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 520,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10259,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 521,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10263,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 522,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10267,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 523,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10265,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 524,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10266,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 525,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10264,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 526,
          item: {
            network_id: -131,
            count: 1,
            metadata: 0,
            block_runtime_id: 10268,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 527,
          item: {
            network_id: -133,
            count: 1,
            metadata: 0,
            block_runtime_id: 6397,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 528,
          item: {
            network_id: -133,
            count: 1,
            metadata: 0,
            block_runtime_id: 6395,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 529,
          item: {
            network_id: -133,
            count: 1,
            metadata: 0,
            block_runtime_id: 6396,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 530,
          item: {
            network_id: -133,
            count: 1,
            metadata: 0,
            block_runtime_id: 6394,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 531,
          item: {
            network_id: -133,
            count: 1,
            metadata: 0,
            block_runtime_id: 6398,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 532,
          item: {
            network_id: -134,
            count: 1,
            metadata: 0,
            block_runtime_id: 69,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 533,
          item: {
            network_id: -134,
            count: 1,
            metadata: 0,
            block_runtime_id: 67,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 534,
          item: {
            network_id: -134,
            count: 1,
            metadata: 0,
            block_runtime_id: 68,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 535,
          item: {
            network_id: -134,
            count: 1,
            metadata: 0,
            block_runtime_id: 66,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 536,
          item: {
            network_id: -134,
            count: 1,
            metadata: 0,
            block_runtime_id: 70,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 537,
          item: {
            network_id: -223,
            count: 1,
            metadata: 0,
            block_runtime_id: 11751,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 538,
          item: {
            network_id: -224,
            count: 1,
            metadata: 0,
            block_runtime_id: 6143,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 539,
          item: {
            network_id: 37,
            count: 1,
            metadata: 0,
            block_runtime_id: 530,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 540,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5009,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 541,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5010,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 542,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5011,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 543,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5012,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 544,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5013,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 545,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5014,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 546,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5015,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 547,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5016,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 548,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5017,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 549,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5018,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 550,
          item: {
            network_id: 38,
            count: 1,
            metadata: 0,
            block_runtime_id: 5019,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 551,
          item: {
            network_id: 175,
            count: 1,
            metadata: 0,
            block_runtime_id: 8033,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 552,
          item: {
            network_id: 175,
            count: 1,
            metadata: 0,
            block_runtime_id: 8034,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 553,
          item: {
            network_id: 175,
            count: 1,
            metadata: 0,
            block_runtime_id: 8037,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 554,
          item: {
            network_id: 175,
            count: 1,
            metadata: 0,
            block_runtime_id: 8038,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 555,
          item: {
            network_id: -216,
            count: 1,
            metadata: 0,
            block_runtime_id: 9915,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 556,
          item: {
            network_id: 410,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 557,
          item: {
            network_id: 402,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 558,
          item: {
            network_id: 403,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 559,
          item: {
            network_id: 395,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 560,
          item: {
            network_id: 398,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 561,
          item: {
            network_id: 396,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 562,
          item: {
            network_id: 409,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 563,
          item: {
            network_id: 406,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 564,
          item: {
            network_id: 405,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 565,
          item: {
            network_id: 397,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 566,
          item: {
            network_id: 401,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 567,
          item: {
            network_id: 407,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 568,
          item: {
            network_id: 399,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 569,
          item: {
            network_id: 400,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 570,
          item: {
            network_id: 408,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 571,
          item: {
            network_id: 404,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 572,
          item: {
            network_id: 413,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 573,
          item: {
            network_id: 503,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 574,
          item: {
            network_id: 412,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 575,
          item: {
            network_id: 414,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 576,
          item: {
            network_id: 411,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 577,
          item: {
            network_id: 106,
            count: 1,
            metadata: 0,
            block_runtime_id: 1517,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 578,
          item: {
            network_id: -231,
            count: 1,
            metadata: 0,
            block_runtime_id: 8060,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 579,
          item: {
            network_id: -287,
            count: 1,
            metadata: 0,
            block_runtime_id: 8273,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 580,
          item: {
            network_id: 111,
            count: 1,
            metadata: 0,
            block_runtime_id: 1781,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 581,
          item: {
            network_id: -130,
            count: 1,
            metadata: 0,
            block_runtime_id: 246,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 582,
          item: {
            network_id: 382,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 583,
          item: {
            network_id: 32,
            count: 1,
            metadata: 0,
            block_runtime_id: 6842,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 584,
          item: {
            network_id: -163,
            count: 1,
            metadata: 0,
            block_runtime_id: 5077,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 585,
          item: {
            network_id: 80,
            count: 1,
            metadata: 0,
            block_runtime_id: 5973,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 586,
          item: {
            network_id: 79,
            count: 1,
            metadata: 0,
            block_runtime_id: 10461,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 587,
          item: {
            network_id: 174,
            count: 1,
            metadata: 0,
            block_runtime_id: 282,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 588,
          item: {
            network_id: -11,
            count: 1,
            metadata: 0,
            block_runtime_id: 10805,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 589,
          item: {
            network_id: 78,
            count: 1,
            metadata: 0,
            block_runtime_id: 155,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 590,
          item: {
            network_id: -308,
            count: 1,
            metadata: 0,
            block_runtime_id: 11594,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 591,
          item: {
            network_id: -317,
            count: 1,
            metadata: 0,
            block_runtime_id: 1516,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 592,
          item: {
            network_id: -335,
            count: 1,
            metadata: 0,
            block_runtime_id: 286,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 593,
          item: {
            network_id: -320,
            count: 1,
            metadata: 0,
            block_runtime_id: 10310,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 594,
          item: {
            network_id: -318,
            count: 1,
            metadata: 0,
            block_runtime_id: 7978,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 595,
          item: {
            network_id: -319,
            count: 1,
            metadata: 0,
            block_runtime_id: 205,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 596,
          item: {
            network_id: -482,
            count: 1,
            metadata: 0,
            block_runtime_id: 9925,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 597,
          item: {
            network_id: -483,
            count: 1,
            metadata: 0,
            block_runtime_id: 573,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 598,
          item: {
            network_id: -323,
            count: 1,
            metadata: 0,
            block_runtime_id: 9330,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 599,
          item: {
            network_id: -336,
            count: 1,
            metadata: 0,
            block_runtime_id: 6101,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 600,
          item: {
            network_id: -321,
            count: 1,
            metadata: 0,
            block_runtime_id: 11490,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 601,
          item: {
            network_id: -337,
            count: 1,
            metadata: 0,
            block_runtime_id: 10660,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 602,
          item: {
            network_id: -338,
            count: 1,
            metadata: 0,
            block_runtime_id: 8058,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 603,
          item: {
            network_id: -411,
            count: 1,
            metadata: 0,
            block_runtime_id: 8266,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 604,
          item: {
            network_id: -327,
            count: 1,
            metadata: 0,
            block_runtime_id: 322,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 605,
          item: {
            network_id: -328,
            count: 1,
            metadata: 0,
            block_runtime_id: 10780,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 606,
          item: {
            network_id: -329,
            count: 1,
            metadata: 0,
            block_runtime_id: 11988,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 607,
          item: {
            network_id: -330,
            count: 1,
            metadata: 0,
            block_runtime_id: 6893,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 608,
          item: {
            network_id: -331,
            count: 1,
            metadata: 0,
            block_runtime_id: 6157,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 609,
          item: {
            network_id: -332,
            count: 1,
            metadata: 0,
            block_runtime_id: 532,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 610,
          item: {
            network_id: -333,
            count: 1,
            metadata: 0,
            block_runtime_id: 577,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 611,
          item: {
            network_id: -326,
            count: 1,
            metadata: 0,
            block_runtime_id: 215,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 612,
          item: {
            network_id: 275,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 613,
          item: {
            network_id: 262,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 614,
          item: {
            network_id: 273,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 615,
          item: {
            network_id: 550,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 616,
          item: {
            network_id: 288,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 617,
          item: {
            network_id: 264,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 618,
          item: {
            network_id: 265,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 619,
          item: {
            network_id: 266,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 620,
          item: {
            network_id: 267,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 621,
          item: {
            network_id: 39,
            count: 1,
            metadata: 0,
            block_runtime_id: 4939,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 622,
          item: {
            network_id: 40,
            count: 1,
            metadata: 0,
            block_runtime_id: 6366,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 623,
          item: {
            network_id: -228,
            count: 1,
            metadata: 0,
            block_runtime_id: 11931,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 624,
          item: {
            network_id: -229,
            count: 1,
            metadata: 0,
            block_runtime_id: 287,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 625,
          item: {
            network_id: 99,
            count: 1,
            metadata: 0,
            block_runtime_id: 11540,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 626,
          item: {
            network_id: 100,
            count: 1,
            metadata: 0,
            block_runtime_id: 5004,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 627,
          item: {
            network_id: 99,
            count: 1,
            metadata: 0,
            block_runtime_id: 11541,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 628,
          item: {
            network_id: 99,
            count: 1,
            metadata: 0,
            block_runtime_id: 11526,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 629,
          item: {
            network_id: 390,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 630,
          item: {
            network_id: 385,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 631,
          item: {
            network_id: 416,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 632,
          item: {
            network_id: 277,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 633,
          item: {
            network_id: 415,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 634,
          item: {
            network_id: 30,
            count: 1,
            metadata: 0,
            block_runtime_id: 10485,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 635,
          item: {
            network_id: 278,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 636,
          item: {
            network_id: 52,
            count: 1,
            metadata: 0,
            block_runtime_id: 631,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 637,
          item: {
            network_id: 97,
            count: 1,
            metadata: 0,
            block_runtime_id: 5921,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 638,
          item: {
            network_id: 97,
            count: 1,
            metadata: 0,
            block_runtime_id: 5922,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 639,
          item: {
            network_id: 97,
            count: 1,
            metadata: 0,
            block_runtime_id: 5923,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 640,
          item: {
            network_id: 97,
            count: 1,
            metadata: 0,
            block_runtime_id: 5924,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 641,
          item: {
            network_id: 97,
            count: 1,
            metadata: 0,
            block_runtime_id: 5925,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 642,
          item: {
            network_id: 97,
            count: 1,
            metadata: 0,
            block_runtime_id: 5926,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 643,
          item: {
            network_id: -454,
            count: 1,
            metadata: 0,
            block_runtime_id: 6806,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 644,
          item: {
            network_id: 122,
            count: 1,
            metadata: 0,
            block_runtime_id: 11449,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 645,
          item: {
            network_id: -159,
            count: 1,
            metadata: 0,
            block_runtime_id: 12175,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 646,
          item: {
            network_id: -468,
            count: 1,
            metadata: 0,
            block_runtime_id: 6180,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 647,
          item: {
            network_id: -469,
            count: 1,
            metadata: 0,
            block_runtime_id: 10193,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 648,
          item: {
            network_id: -470,
            count: 1,
            metadata: 0,
            block_runtime_id: 10251,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 649,
          item: {
            network_id: -471,
            count: 1,
            metadata: 0,
            block_runtime_id: 4519,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 650,
          item: {
            network_id: 435,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 651,
          item: {
            network_id: 494,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 652,
          item: {
            network_id: 436,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 653,
          item: {
            network_id: 437,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 654,
          item: {
            network_id: 438,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 655,
          item: {
            network_id: 439,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 656,
          item: {
            network_id: 472,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 657,
          item: {
            network_id: 451,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 658,
          item: {
            network_id: 488,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 659,
          item: {
            network_id: 440,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 660,
          item: {
            network_id: 453,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 661,
          item: {
            network_id: 478,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 662,
          item: {
            network_id: 459,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 663,
          item: {
            network_id: 473,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 664,
          item: {
            network_id: 458,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 665,
          item: {
            network_id: 465,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 666,
          item: {
            network_id: 466,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 667,
          item: {
            network_id: 467,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 668,
          item: {
            network_id: 468,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 669,
          item: {
            network_id: 479,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 670,
          item: {
            network_id: 480,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 671,
          item: {
            network_id: 481,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 672,
          item: {
            network_id: 482,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 673,
          item: {
            network_id: 484,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 674,
          item: {
            network_id: 485,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 675,
          item: {
            network_id: 489,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 676,
          item: {
            network_id: 490,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 677,
          item: {
            network_id: 441,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 678,
          item: {
            network_id: 442,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 679,
          item: {
            network_id: 443,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 680,
          item: {
            network_id: 444,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 681,
          item: {
            network_id: 464,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 682,
          item: {
            network_id: 462,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 683,
          item: {
            network_id: 445,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 684,
          item: {
            network_id: 446,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 685,
          item: {
            network_id: 447,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 686,
          item: {
            network_id: 448,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 687,
          item: {
            network_id: 463,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 688,
          item: {
            network_id: 483,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 689,
          item: {
            network_id: 450,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 690,
          item: {
            network_id: 502,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 691,
          item: {
            network_id: 457,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 692,
          item: {
            network_id: 452,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 693,
          item: {
            network_id: 461,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 694,
          item: {
            network_id: 471,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 695,
          item: {
            network_id: 460,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 696,
          item: {
            network_id: 455,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 697,
          item: {
            network_id: 495,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 698,
          item: {
            network_id: 496,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 699,
          item: {
            network_id: 497,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 700,
          item: {
            network_id: 498,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 701,
          item: {
            network_id: 499,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 702,
          item: {
            network_id: 501,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 703,
          item: {
            network_id: 500,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 704,
          item: {
            network_id: 632,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 705,
          item: {
            network_id: 631,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 706,
          item: {
            network_id: 628,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 707,
          item: {
            network_id: 629,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 708,
          item: {
            network_id: 652,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 709,
          item: {
            network_id: 454,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 710,
          item: {
            network_id: 456,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 711,
          item: {
            network_id: 469,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 712,
          item: {
            network_id: 474,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 713,
          item: {
            network_id: 475,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 714,
          item: {
            network_id: 476,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 715,
          item: {
            network_id: 449,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 716,
          item: {
            network_id: 492,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 717,
          item: {
            network_id: 477,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 718,
          item: {
            network_id: 486,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 719,
          item: {
            network_id: 491,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 720,
          item: {
            network_id: 493,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 721,
          item: {
            network_id: 49,
            count: 1,
            metadata: 0,
            block_runtime_id: 658,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 722,
          item: {
            network_id: -289,
            count: 1,
            metadata: 0,
            block_runtime_id: 10494,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 723,
          item: {
            network_id: 7,
            count: 1,
            metadata: 0,
            block_runtime_id: 10795,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 724,
          item: {
            network_id: 88,
            count: 1,
            metadata: 0,
            block_runtime_id: 8413,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 725,
          item: {
            network_id: 87,
            count: 1,
            metadata: 0,
            block_runtime_id: 10815,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 726,
          item: {
            network_id: 213,
            count: 1,
            metadata: 0,
            block_runtime_id: 12187,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 727,
          item: {
            network_id: 294,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 728,
          item: {
            network_id: 121,
            count: 1,
            metadata: 0,
            block_runtime_id: 5613,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 729,
          item: {
            network_id: 200,
            count: 1,
            metadata: 0,
            block_runtime_id: 6311,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 730,
          item: {
            network_id: 240,
            count: 1,
            metadata: 0,
            block_runtime_id: 8086,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 731,
          item: {
            network_id: 558,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 732,
          item: {
            network_id: 559,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 733,
          item: {
            network_id: 19,
            count: 1,
            metadata: 0,
            block_runtime_id: 859,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 734,
          item: {
            network_id: 19,
            count: 1,
            metadata: 0,
            block_runtime_id: 860,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 735,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7802,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 736,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7803,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 737,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7804,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 738,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7805,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 739,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7806,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 740,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7807,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 741,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7808,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 742,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7809,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 743,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7810,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 744,
          item: {
            network_id: -132,
            count: 1,
            metadata: 0,
            block_runtime_id: 7811,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 745,
          item: {
            network_id: -458,
            count: 1,
            metadata: 0,
            block_runtime_id: 10814,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 746,
          item: {
            network_id: -459,
            count: 1,
            metadata: 0,
            block_runtime_id: 11294,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 747,
          item: {
            network_id: -460,
            count: 1,
            metadata: 0,
            block_runtime_id: 5006,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 748,
          item: {
            network_id: -461,
            count: 1,
            metadata: 0,
            block_runtime_id: 219,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 749,
          item: {
            network_id: -307,
            count: 1,
            metadata: 0,
            block_runtime_id: 6170,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 750,
          item: {
            network_id: -466,
            count: 1,
            metadata: 0,
            block_runtime_id: 8798,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 751,
          item: {
            network_id: 335,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 752,
          item: {
            network_id: 339,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 753,
          item: {
            network_id: 343,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 754,
          item: {
            network_id: 351,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 755,
          item: {
            network_id: 347,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 756,
          item: {
            network_id: 609,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 757,
          item: {
            network_id: 336,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 758,
          item: {
            network_id: 340,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 759,
          item: {
            network_id: 344,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 760,
          item: {
            network_id: 352,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 761,
          item: {
            network_id: 348,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 762,
          item: {
            network_id: 610,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 763,
          item: {
            network_id: 337,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 764,
          item: {
            network_id: 341,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 765,
          item: {
            network_id: 345,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 766,
          item: {
            network_id: 353,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 767,
          item: {
            network_id: 349,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 768,
          item: {
            network_id: 611,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 769,
          item: {
            network_id: 338,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 770,
          item: {
            network_id: 342,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 771,
          item: {
            network_id: 346,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 772,
          item: {
            network_id: 354,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 773,
          item: {
            network_id: 350,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 774,
          item: {
            network_id: 612,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 775,
          item: {
            network_id: 308,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 776,
          item: {
            network_id: 312,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 777,
          item: {
            network_id: 307,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 778,
          item: {
            network_id: 322,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 779,
          item: {
            network_id: 316,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 780,
          item: {
            network_id: 604,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 781,
          item: {
            network_id: 311,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 782,
          item: {
            network_id: 315,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 783,
          item: {
            network_id: 298,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 784,
          item: {
            network_id: 325,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 785,
          item: {
            network_id: 319,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 786,
          item: {
            network_id: 607,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 787,
          item: {
            network_id: 310,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 788,
          item: {
            network_id: 314,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 789,
          item: {
            network_id: 297,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 790,
          item: {
            network_id: 324,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 791,
          item: {
            network_id: 318,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 792,
          item: {
            network_id: 606,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 793,
          item: {
            network_id: 309,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 794,
          item: {
            network_id: 313,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 795,
          item: {
            network_id: 296,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 796,
          item: {
            network_id: 323,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 797,
          item: {
            network_id: 317,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 798,
          item: {
            network_id: 605,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 799,
          item: {
            network_id: 329,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 800,
          item: {
            network_id: 330,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 801,
          item: {
            network_id: 331,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 802,
          item: {
            network_id: 333,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 803,
          item: {
            network_id: 332,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 804,
          item: {
            network_id: 608,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 805,
          item: {
            network_id: 300,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 806,
          item: {
            network_id: 575,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 807,
          item: {
            network_id: 301,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 808,
          item: {
            network_id: 301,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 809,
          item: {
            network_id: 301,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 810,
          item: {
            network_id: 301,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 811,
          item: {
            network_id: 301,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 812,
          item: {
            network_id: 301,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 813,
          item: {
            network_id: 301,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 814,
          item: {
            network_id: 301,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 815,
          item: {
            network_id: 301,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 816,
          item: {
            network_id: 301,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 817,
          item: {
            network_id: 301,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 818,
          item: {
            network_id: 301,
            count: 1,
            metadata: 16,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 819,
          item: {
            network_id: 301,
            count: 1,
            metadata: 17,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 820,
          item: {
            network_id: 301,
            count: 1,
            metadata: 18,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 821,
          item: {
            network_id: 301,
            count: 1,
            metadata: 19,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 822,
          item: {
            network_id: 301,
            count: 1,
            metadata: 20,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 823,
          item: {
            network_id: 301,
            count: 1,
            metadata: 21,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 824,
          item: {
            network_id: 301,
            count: 1,
            metadata: 22,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 825,
          item: {
            network_id: 301,
            count: 1,
            metadata: 23,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 826,
          item: {
            network_id: 301,
            count: 1,
            metadata: 24,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 827,
          item: {
            network_id: 301,
            count: 1,
            metadata: 25,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 828,
          item: {
            network_id: 301,
            count: 1,
            metadata: 26,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 829,
          item: {
            network_id: 301,
            count: 1,
            metadata: 27,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 830,
          item: {
            network_id: 301,
            count: 1,
            metadata: 28,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 831,
          item: {
            network_id: 301,
            count: 1,
            metadata: 29,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 832,
          item: {
            network_id: 301,
            count: 1,
            metadata: 30,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 833,
          item: {
            network_id: 301,
            count: 1,
            metadata: 31,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 834,
          item: {
            network_id: 301,
            count: 1,
            metadata: 32,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 835,
          item: {
            network_id: 301,
            count: 1,
            metadata: 33,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 836,
          item: {
            network_id: 301,
            count: 1,
            metadata: 34,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 837,
          item: {
            network_id: 301,
            count: 1,
            metadata: 35,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 838,
          item: {
            network_id: 301,
            count: 1,
            metadata: 36,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 839,
          item: {
            network_id: 301,
            count: 1,
            metadata: 37,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 840,
          item: {
            network_id: 301,
            count: 1,
            metadata: 38,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 841,
          item: {
            network_id: 301,
            count: 1,
            metadata: 39,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 842,
          item: {
            network_id: 301,
            count: 1,
            metadata: 40,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 843,
          item: {
            network_id: 301,
            count: 1,
            metadata: 41,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 844,
          item: {
            network_id: 301,
            count: 1,
            metadata: 42,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 845,
          item: {
            network_id: 301,
            count: 1,
            metadata: 43,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 846,
          item: {
            network_id: 355,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
              blocking_tick: [0, 0],
            },
          },
        },
        {
          entry_id: 847,
          item: {
            network_id: 276,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 848,
          item: {
            network_id: 263,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 849,
          item: {
            network_id: 274,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 850,
          item: {
            network_id: 551,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 851,
          item: {
            network_id: 289,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 852,
          item: {
            network_id: 268,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 853,
          item: {
            network_id: 269,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 854,
          item: {
            network_id: 261,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 855,
          item: {
            network_id: 260,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 856,
          item: {
            network_id: 286,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 857,
          item: {
            network_id: 290,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 858,
          item: {
            network_id: 281,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 859,
          item: {
            network_id: 271,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 860,
          item: {
            network_id: 284,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 861,
          item: {
            network_id: 417,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 862,
          item: {
            network_id: 270,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 863,
          item: {
            network_id: 392,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 864,
          item: {
            network_id: 517,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 865,
          item: {
            network_id: 618,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 866,
          item: {
            network_id: 374,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 867,
          item: {
            network_id: 421,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 868,
          item: {
            network_id: 299,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 869,
          item: {
            network_id: 547,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 870,
          item: {
            network_id: 393,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 871,
          item: {
            network_id: 391,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 872,
          item: {
            network_id: 650,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 873,
          item: {
            network_id: 627,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 874,
          item: {
            network_id: 627,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 875,
          item: {
            network_id: 627,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 876,
          item: {
            network_id: 627,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 877,
          item: {
            network_id: 627,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 878,
          item: {
            network_id: 627,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 879,
          item: {
            network_id: 627,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 880,
          item: {
            network_id: 627,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 881,
          item: {
            network_id: 515,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 882,
          item: {
            network_id: 515,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 883,
          item: {
            network_id: 371,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 884,
          item: {
            network_id: 530,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 885,
          item: {
            network_id: 531,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 886,
          item: {
            network_id: 532,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 887,
          item: {
            network_id: 533,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 888,
          item: {
            network_id: 546,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 889,
          item: {
            network_id: 573,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 890,
          item: {
            network_id: 564,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 891,
          item: {
            network_id: 568,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 892,
          item: {
            network_id: 427,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 893,
          item: {
            network_id: 508,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 894,
          item: {
            network_id: 426,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 895,
          item: {
            network_id: 426,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 896,
          item: {
            network_id: 426,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 897,
          item: {
            network_id: 426,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 898,
          item: {
            network_id: 426,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 899,
          item: {
            network_id: 426,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 900,
          item: {
            network_id: 426,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 901,
          item: {
            network_id: 426,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 902,
          item: {
            network_id: 426,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 903,
          item: {
            network_id: 426,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 904,
          item: {
            network_id: 426,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 905,
          item: {
            network_id: 426,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 906,
          item: {
            network_id: 426,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 907,
          item: {
            network_id: 426,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 908,
          item: {
            network_id: 426,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 909,
          item: {
            network_id: 426,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 910,
          item: {
            network_id: 426,
            count: 1,
            metadata: 16,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 911,
          item: {
            network_id: 426,
            count: 1,
            metadata: 17,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 912,
          item: {
            network_id: 426,
            count: 1,
            metadata: 18,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 913,
          item: {
            network_id: 426,
            count: 1,
            metadata: 19,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 914,
          item: {
            network_id: 426,
            count: 1,
            metadata: 20,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 915,
          item: {
            network_id: 426,
            count: 1,
            metadata: 21,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 916,
          item: {
            network_id: 426,
            count: 1,
            metadata: 22,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 917,
          item: {
            network_id: 426,
            count: 1,
            metadata: 23,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 918,
          item: {
            network_id: 426,
            count: 1,
            metadata: 24,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 919,
          item: {
            network_id: 426,
            count: 1,
            metadata: 25,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 920,
          item: {
            network_id: 426,
            count: 1,
            metadata: 26,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 921,
          item: {
            network_id: 426,
            count: 1,
            metadata: 27,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 922,
          item: {
            network_id: 426,
            count: 1,
            metadata: 28,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 923,
          item: {
            network_id: 426,
            count: 1,
            metadata: 29,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 924,
          item: {
            network_id: 426,
            count: 1,
            metadata: 30,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 925,
          item: {
            network_id: 426,
            count: 1,
            metadata: 31,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 926,
          item: {
            network_id: 426,
            count: 1,
            metadata: 32,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 927,
          item: {
            network_id: 426,
            count: 1,
            metadata: 33,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 928,
          item: {
            network_id: 426,
            count: 1,
            metadata: 34,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 929,
          item: {
            network_id: 426,
            count: 1,
            metadata: 35,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 930,
          item: {
            network_id: 426,
            count: 1,
            metadata: 36,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 931,
          item: {
            network_id: 426,
            count: 1,
            metadata: 37,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 932,
          item: {
            network_id: 426,
            count: 1,
            metadata: 38,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 933,
          item: {
            network_id: 426,
            count: 1,
            metadata: 39,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 934,
          item: {
            network_id: 426,
            count: 1,
            metadata: 40,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 935,
          item: {
            network_id: 426,
            count: 1,
            metadata: 41,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 936,
          item: {
            network_id: 426,
            count: 1,
            metadata: 42,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 937,
          item: {
            network_id: 561,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 938,
          item: {
            network_id: 561,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 939,
          item: {
            network_id: 561,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 940,
          item: {
            network_id: 561,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 941,
          item: {
            network_id: 561,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 942,
          item: {
            network_id: 561,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 943,
          item: {
            network_id: 561,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 944,
          item: {
            network_id: 561,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 945,
          item: {
            network_id: 561,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 946,
          item: {
            network_id: 561,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 947,
          item: {
            network_id: 561,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 948,
          item: {
            network_id: 561,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 949,
          item: {
            network_id: 561,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 950,
          item: {
            network_id: 561,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 951,
          item: {
            network_id: 561,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 952,
          item: {
            network_id: 561,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 953,
          item: {
            network_id: 561,
            count: 1,
            metadata: 16,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 954,
          item: {
            network_id: 561,
            count: 1,
            metadata: 17,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 955,
          item: {
            network_id: 561,
            count: 1,
            metadata: 18,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 956,
          item: {
            network_id: 561,
            count: 1,
            metadata: 19,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 957,
          item: {
            network_id: 561,
            count: 1,
            metadata: 20,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 958,
          item: {
            network_id: 561,
            count: 1,
            metadata: 21,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 959,
          item: {
            network_id: 561,
            count: 1,
            metadata: 22,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 960,
          item: {
            network_id: 561,
            count: 1,
            metadata: 23,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 961,
          item: {
            network_id: 561,
            count: 1,
            metadata: 24,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 962,
          item: {
            network_id: 561,
            count: 1,
            metadata: 25,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 963,
          item: {
            network_id: 561,
            count: 1,
            metadata: 26,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 964,
          item: {
            network_id: 561,
            count: 1,
            metadata: 27,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 965,
          item: {
            network_id: 561,
            count: 1,
            metadata: 28,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 966,
          item: {
            network_id: 561,
            count: 1,
            metadata: 29,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 967,
          item: {
            network_id: 561,
            count: 1,
            metadata: 30,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 968,
          item: {
            network_id: 561,
            count: 1,
            metadata: 31,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 969,
          item: {
            network_id: 561,
            count: 1,
            metadata: 32,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 970,
          item: {
            network_id: 561,
            count: 1,
            metadata: 33,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 971,
          item: {
            network_id: 561,
            count: 1,
            metadata: 34,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 972,
          item: {
            network_id: 561,
            count: 1,
            metadata: 35,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 973,
          item: {
            network_id: 561,
            count: 1,
            metadata: 36,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 974,
          item: {
            network_id: 561,
            count: 1,
            metadata: 37,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 975,
          item: {
            network_id: 561,
            count: 1,
            metadata: 38,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 976,
          item: {
            network_id: 561,
            count: 1,
            metadata: 39,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 977,
          item: {
            network_id: 561,
            count: 1,
            metadata: 40,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 978,
          item: {
            network_id: 561,
            count: 1,
            metadata: 41,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 979,
          item: {
            network_id: 561,
            count: 1,
            metadata: 42,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 980,
          item: {
            network_id: 562,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 981,
          item: {
            network_id: 562,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 982,
          item: {
            network_id: 562,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 983,
          item: {
            network_id: 562,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 984,
          item: {
            network_id: 562,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 985,
          item: {
            network_id: 562,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 986,
          item: {
            network_id: 562,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 987,
          item: {
            network_id: 562,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 988,
          item: {
            network_id: 562,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 989,
          item: {
            network_id: 562,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 990,
          item: {
            network_id: 562,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 991,
          item: {
            network_id: 562,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 992,
          item: {
            network_id: 562,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 993,
          item: {
            network_id: 562,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 994,
          item: {
            network_id: 562,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 995,
          item: {
            network_id: 562,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 996,
          item: {
            network_id: 562,
            count: 1,
            metadata: 16,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 997,
          item: {
            network_id: 562,
            count: 1,
            metadata: 17,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 998,
          item: {
            network_id: 562,
            count: 1,
            metadata: 18,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 999,
          item: {
            network_id: 562,
            count: 1,
            metadata: 19,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1000,
          item: {
            network_id: 562,
            count: 1,
            metadata: 20,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1001,
          item: {
            network_id: 562,
            count: 1,
            metadata: 21,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1002,
          item: {
            network_id: 562,
            count: 1,
            metadata: 22,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1003,
          item: {
            network_id: 562,
            count: 1,
            metadata: 23,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1004,
          item: {
            network_id: 562,
            count: 1,
            metadata: 24,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1005,
          item: {
            network_id: 562,
            count: 1,
            metadata: 25,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1006,
          item: {
            network_id: 562,
            count: 1,
            metadata: 26,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1007,
          item: {
            network_id: 562,
            count: 1,
            metadata: 27,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1008,
          item: {
            network_id: 562,
            count: 1,
            metadata: 28,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1009,
          item: {
            network_id: 562,
            count: 1,
            metadata: 29,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1010,
          item: {
            network_id: 562,
            count: 1,
            metadata: 30,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1011,
          item: {
            network_id: 562,
            count: 1,
            metadata: 31,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1012,
          item: {
            network_id: 562,
            count: 1,
            metadata: 32,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1013,
          item: {
            network_id: 562,
            count: 1,
            metadata: 33,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1014,
          item: {
            network_id: 562,
            count: 1,
            metadata: 34,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1015,
          item: {
            network_id: 562,
            count: 1,
            metadata: 35,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1016,
          item: {
            network_id: 562,
            count: 1,
            metadata: 36,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1017,
          item: {
            network_id: 562,
            count: 1,
            metadata: 37,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1018,
          item: {
            network_id: 562,
            count: 1,
            metadata: 38,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1019,
          item: {
            network_id: 562,
            count: 1,
            metadata: 39,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1020,
          item: {
            network_id: 562,
            count: 1,
            metadata: 40,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1021,
          item: {
            network_id: 562,
            count: 1,
            metadata: 41,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1022,
          item: {
            network_id: 562,
            count: 1,
            metadata: 42,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1023,
          item: {
            network_id: 625,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1024,
          item: {
            network_id: 320,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1025,
          item: {
            network_id: 418,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1026,
          item: {
            network_id: 418,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1027,
          item: {
            network_id: 418,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1028,
          item: {
            network_id: 418,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1029,
          item: {
            network_id: 418,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1030,
          item: {
            network_id: 418,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1031,
          item: {
            network_id: 418,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1032,
          item: {
            network_id: 418,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1033,
          item: {
            network_id: 418,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1034,
          item: {
            network_id: 418,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1035,
          item: {
            network_id: 418,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1036,
          item: {
            network_id: 418,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1037,
          item: {
            network_id: 418,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1038,
          item: {
            network_id: 418,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1039,
          item: {
            network_id: 418,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1040,
          item: {
            network_id: 418,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1041,
          item: {
            network_id: 50,
            count: 1,
            metadata: 0,
            block_runtime_id: 1347,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1042,
          item: {
            network_id: -268,
            count: 1,
            metadata: 0,
            block_runtime_id: 6809,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1043,
          item: {
            network_id: -156,
            count: 1,
            metadata: 0,
            block_runtime_id: 8821,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1044,
          item: {
            network_id: -208,
            count: 1,
            metadata: 0,
            block_runtime_id: 10852,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1045,
          item: {
            network_id: -269,
            count: 1,
            metadata: 0,
            block_runtime_id: 8331,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1046,
          item: {
            network_id: -412,
            count: 1,
            metadata: 0,
            block_runtime_id: 11581,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1047,
          item: {
            network_id: -413,
            count: 1,
            metadata: 0,
            block_runtime_id: 7881,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1048,
          item: {
            network_id: -414,
            count: 1,
            metadata: 0,
            block_runtime_id: 592,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1049,
          item: {
            network_id: -415,
            count: 1,
            metadata: 0,
            block_runtime_id: 648,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1050,
          item: {
            network_id: -416,
            count: 1,
            metadata: 0,
            block_runtime_id: 6350,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1051,
          item: {
            network_id: -417,
            count: 1,
            metadata: 0,
            block_runtime_id: 9942,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1052,
          item: {
            network_id: -418,
            count: 1,
            metadata: 0,
            block_runtime_id: 10126,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1053,
          item: {
            network_id: -419,
            count: 1,
            metadata: 0,
            block_runtime_id: 11548,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1054,
          item: {
            network_id: -420,
            count: 1,
            metadata: 0,
            block_runtime_id: 1562,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1055,
          item: {
            network_id: -421,
            count: 1,
            metadata: 0,
            block_runtime_id: 9982,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1056,
          item: {
            network_id: -422,
            count: 1,
            metadata: 0,
            block_runtime_id: 11904,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1057,
          item: {
            network_id: -423,
            count: 1,
            metadata: 0,
            block_runtime_id: 10816,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1058,
          item: {
            network_id: -424,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1059,
          item: {
            network_id: -425,
            count: 1,
            metadata: 0,
            block_runtime_id: 9225,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1060,
          item: {
            network_id: -426,
            count: 1,
            metadata: 0,
            block_runtime_id: 1301,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1061,
          item: {
            network_id: -427,
            count: 1,
            metadata: 0,
            block_runtime_id: 6846,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1062,
          item: {
            network_id: -428,
            count: 1,
            metadata: 0,
            block_runtime_id: 171,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1063,
          item: {
            network_id: 58,
            count: 1,
            metadata: 0,
            block_runtime_id: 8820,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1064,
          item: {
            network_id: -200,
            count: 1,
            metadata: 0,
            block_runtime_id: 12467,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1065,
          item: {
            network_id: -201,
            count: 1,
            metadata: 0,
            block_runtime_id: 8799,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1066,
          item: {
            network_id: -202,
            count: 1,
            metadata: 0,
            block_runtime_id: 5119,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1067,
          item: {
            network_id: -219,
            count: 1,
            metadata: 0,
            block_runtime_id: 9858,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1068,
          item: {
            network_id: 589,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1069,
          item: {
            network_id: 622,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1070,
          item: {
            network_id: 61,
            count: 1,
            metadata: 0,
            block_runtime_id: 11980,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1071,
          item: {
            network_id: -196,
            count: 1,
            metadata: 0,
            block_runtime_id: 11745,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1072,
          item: {
            network_id: -198,
            count: 1,
            metadata: 0,
            block_runtime_id: 1262,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1073,
          item: {
            network_id: -272,
            count: 1,
            metadata: 0,
            block_runtime_id: 1296,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1074,
          item: {
            network_id: 431,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1075,
          item: {
            network_id: 145,
            count: 1,
            metadata: 0,
            block_runtime_id: 10406,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1076,
          item: {
            network_id: 145,
            count: 1,
            metadata: 0,
            block_runtime_id: 10410,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1077,
          item: {
            network_id: 145,
            count: 1,
            metadata: 0,
            block_runtime_id: 10414,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1078,
          item: {
            network_id: -195,
            count: 1,
            metadata: 0,
            block_runtime_id: 12217,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1079,
          item: {
            network_id: 116,
            count: 1,
            metadata: 0,
            block_runtime_id: 10495,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1080,
          item: {
            network_id: 47,
            count: 1,
            metadata: 0,
            block_runtime_id: 10443,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1081,
          item: {
            network_id: -194,
            count: 1,
            metadata: 0,
            block_runtime_id: 10718,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1082,
          item: {
            network_id: 432,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1083,
          item: {
            network_id: -213,
            count: 1,
            metadata: 0,
            block_runtime_id: 7996,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1084,
          item: {
            network_id: 54,
            count: 1,
            metadata: 0,
            block_runtime_id: 10893,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1085,
          item: {
            network_id: 146,
            count: 1,
            metadata: 0,
            block_runtime_id: 8164,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1086,
          item: {
            network_id: 130,
            count: 1,
            metadata: 0,
            block_runtime_id: 6150,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1087,
          item: {
            network_id: -203,
            count: 1,
            metadata: 0,
            block_runtime_id: 6299,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1088,
          item: {
            network_id: 205,
            count: 1,
            metadata: 0,
            block_runtime_id: 5074,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1089,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7897,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1090,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7905,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1091,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7904,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1092,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7912,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1093,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7909,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1094,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7911,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1095,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7898,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1096,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7901,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1097,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7902,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1098,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7910,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1099,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7906,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1100,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7900,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1101,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7908,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1102,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7907,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1103,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7899,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1104,
          item: {
            network_id: 218,
            count: 1,
            metadata: 0,
            block_runtime_id: 7903,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1105,
          item: {
            network_id: 552,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1106,
          item: {
            network_id: 25,
            count: 1,
            metadata: 0,
            block_runtime_id: 576,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1107,
          item: {
            network_id: 84,
            count: 1,
            metadata: 0,
            block_runtime_id: 7423,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1108,
          item: {
            network_id: 534,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1109,
          item: {
            network_id: 535,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1110,
          item: {
            network_id: 536,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1111,
          item: {
            network_id: 537,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1112,
          item: {
            network_id: 538,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1113,
          item: {
            network_id: 539,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1114,
          item: {
            network_id: 540,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1115,
          item: {
            network_id: 541,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1116,
          item: {
            network_id: 542,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1117,
          item: {
            network_id: 543,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1118,
          item: {
            network_id: 544,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1119,
          item: {
            network_id: 545,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1120,
          item: {
            network_id: 626,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1121,
          item: {
            network_id: 639,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1122,
          item: {
            network_id: 620,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1123,
          item: {
            network_id: 640,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1124,
          item: {
            network_id: 394,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1125,
          item: {
            network_id: 89,
            count: 1,
            metadata: 0,
            block_runtime_id: 5662,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1126,
          item: {
            network_id: 123,
            count: 1,
            metadata: 0,
            block_runtime_id: 251,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1127,
          item: {
            network_id: 169,
            count: 1,
            metadata: 0,
            block_runtime_id: 11724,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1128,
          item: {
            network_id: 358,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1129,
          item: {
            network_id: 576,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1130,
          item: {
            network_id: 577,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1131,
          item: {
            network_id: 578,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1132,
          item: {
            network_id: 579,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1133,
          item: {
            network_id: 580,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1134,
          item: {
            network_id: 635,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1135,
          item: {
            network_id: 614,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1136,
          item: {
            network_id: 615,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1137,
          item: {
            network_id: 357,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1138,
          item: {
            network_id: 513,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1139,
          item: {
            network_id: 623,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1140,
          item: {
            network_id: 592,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1141,
          item: {
            network_id: 514,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1142,
          item: {
            network_id: 321,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1143,
          item: {
            network_id: 360,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1144,
          item: {
            network_id: 361,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1145,
          item: {
            network_id: 362,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1146,
          item: {
            network_id: 363,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1147,
          item: {
            network_id: 364,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1148,
          item: {
            network_id: 365,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1149,
          item: {
            network_id: 366,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1150,
          item: {
            network_id: 367,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1151,
          item: {
            network_id: 368,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1152,
          item: {
            network_id: 369,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1153,
          item: {
            network_id: 630,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1154,
          item: {
            network_id: 516,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1155,
          item: {
            network_id: 516,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1156,
          item: {
            network_id: 516,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1157,
          item: {
            network_id: 516,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1158,
          item: {
            network_id: 516,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1159,
          item: {
            network_id: 516,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1160,
          item: {
            network_id: 138,
            count: 1,
            metadata: 0,
            block_runtime_id: 145,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1161,
          item: {
            network_id: -206,
            count: 1,
            metadata: 0,
            block_runtime_id: 10686,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1162,
          item: {
            network_id: -157,
            count: 1,
            metadata: 0,
            block_runtime_id: 6011,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1163,
          item: {
            network_id: -197,
            count: 1,
            metadata: 0,
            block_runtime_id: 11752,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1164,
          item: {
            network_id: 120,
            count: 1,
            metadata: 0,
            block_runtime_id: 9811,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1165,
          item: {
            network_id: 302,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1166,
          item: {
            network_id: 303,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1167,
          item: {
            network_id: 304,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1168,
          item: {
            network_id: 569,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1169,
          item: {
            network_id: 505,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1170,
          item: {
            network_id: 506,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1171,
          item: {
            network_id: 507,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1172,
          item: {
            network_id: 504,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1173,
          item: {
            network_id: 305,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1174,
          item: {
            network_id: 613,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1175,
          item: {
            network_id: 603,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1176,
          item: {
            network_id: 425,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1177,
          item: {
            network_id: 306,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1178,
          item: {
            network_id: 512,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1179,
          item: {
            network_id: 524,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1180,
          item: {
            network_id: 384,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1181,
          item: {
            network_id: 383,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1182,
          item: {
            network_id: 523,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1183,
          item: {
            network_id: 565,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1184,
          item: {
            network_id: 624,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1185,
          item: {
            network_id: 549,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1186,
          item: {
            network_id: 570,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1187,
          item: {
            network_id: 571,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1188,
          item: {
            network_id: 572,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1189,
          item: {
            network_id: 574,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1190,
          item: {
            network_id: 326,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1191,
          item: {
            network_id: 327,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1192,
          item: {
            network_id: 356,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1193,
          item: {
            network_id: 328,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1194,
          item: {
            network_id: 381,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1195,
          item: {
            network_id: 529,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1196,
          item: {
            network_id: 528,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1197,
          item: {
            network_id: 509,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1198,
          item: {
            network_id: 423,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1199,
          item: {
            network_id: 429,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1200,
          item: {
            network_id: 430,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1201,
          item: {
            network_id: 428,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1202,
          item: {
            network_id: 651,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1203,
          item: {
            network_id: 560,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1204,
          item: {
            network_id: 566,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1205,
          item: {
            network_id: 424,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1206,
          item: {
            network_id: 388,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1207,
          item: {
            network_id: 422,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1208,
          item: {
            network_id: 433,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1209,
          item: {
            network_id: 518,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1210,
          item: {
            network_id: 208,
            count: 1,
            metadata: 0,
            block_runtime_id: 9241,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1211,
          item: {
            network_id: -312,
            count: 1,
            metadata: 0,
            block_runtime_id: 1799,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1212,
          item: {
            network_id: 657,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1213,
          item: {
            network_id: 386,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1214,
          item: {
            network_id: 387,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1215,
          item: {
            network_id: 510,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1216,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 0,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1217,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 0,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1218,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 0,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1219,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 0,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1220,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 1,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1221,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 1,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1222,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 1,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1223,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 1,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1224,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 2,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1225,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 2,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1226,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 2,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1227,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 2,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1228,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 3,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1229,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 3,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1230,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 3,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1231,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 3,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1232,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 4,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1233,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 4,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1234,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 4,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1235,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 4,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1236,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 5,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1237,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 5,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1238,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 5,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1239,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 6,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1240,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 6,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1241,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 6,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1242,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 7,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1243,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 7,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1244,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 7,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1245,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 8,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1246,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 9,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1247,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 9,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1248,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 9,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1249,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 9,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1250,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 9,
                            },
                            lvl: {
                              type: "short",
                              value: 5,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1251,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 10,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1252,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 10,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1253,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 10,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1254,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 10,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1255,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 10,
                            },
                            lvl: {
                              type: "short",
                              value: 5,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1256,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 11,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1257,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 11,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1258,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 11,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1259,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 11,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1260,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 11,
                            },
                            lvl: {
                              type: "short",
                              value: 5,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1261,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 12,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1262,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 12,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1263,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 13,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1264,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 13,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1265,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 14,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1266,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 14,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1267,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 14,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1268,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 15,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1269,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 15,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1270,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 15,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1271,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 15,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1272,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 15,
                            },
                            lvl: {
                              type: "short",
                              value: 5,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1273,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 16,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1274,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 17,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1275,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 17,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1276,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 17,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1277,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 18,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1278,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 18,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1279,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 18,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1280,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 19,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1281,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 19,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1282,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 19,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1283,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 19,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1284,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 19,
                            },
                            lvl: {
                              type: "short",
                              value: 5,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1285,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 20,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1286,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 20,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1287,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 21,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1288,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 22,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1289,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 23,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1290,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 23,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1291,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 23,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1292,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 24,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1293,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 24,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1294,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 24,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1295,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 25,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1296,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 25,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1297,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 26,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1298,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 27,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1299,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 28,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1300,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 29,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1301,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 29,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1302,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 29,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1303,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 29,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1304,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 29,
                            },
                            lvl: {
                              type: "short",
                              value: 5,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1305,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 30,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1306,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 30,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1307,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 30,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1308,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 31,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1309,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 31,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1310,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 31,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1311,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 32,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1312,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 33,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1313,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 34,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1314,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 34,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1315,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 34,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1316,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 34,
                            },
                            lvl: {
                              type: "short",
                              value: 4,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1317,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 35,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1318,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 35,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1319,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 35,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1320,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 36,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1321,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 36,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1322,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 36,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1323,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 37,
                            },
                            lvl: {
                              type: "short",
                              value: 1,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1324,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 37,
                            },
                            lvl: {
                              type: "short",
                              value: 2,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1325,
          item: {
            network_id: 521,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    ench: {
                      type: "list",
                      value: {
                        type: "compound",
                        value: [
                          {
                            id: {
                              type: "short",
                              value: 37,
                            },
                            lvl: {
                              type: "short",
                              value: 3,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1326,
          item: {
            network_id: 375,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1327,
          item: {
            network_id: 378,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1328,
          item: {
            network_id: 376,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1329,
          item: {
            network_id: 377,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1330,
          item: {
            network_id: 379,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1331,
          item: {
            network_id: 380,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1332,
          item: {
            network_id: 636,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1333,
          item: {
            network_id: 641,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1334,
          item: {
            network_id: 644,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1335,
          item: {
            network_id: 642,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1336,
          item: {
            network_id: 643,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1337,
          item: {
            network_id: 645,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1338,
          item: {
            network_id: 646,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1339,
          item: {
            network_id: 647,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1340,
          item: {
            network_id: 66,
            count: 1,
            metadata: 0,
            block_runtime_id: 5697,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1341,
          item: {
            network_id: 27,
            count: 1,
            metadata: 0,
            block_runtime_id: 7913,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1342,
          item: {
            network_id: 28,
            count: 1,
            metadata: 0,
            block_runtime_id: 5909,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1343,
          item: {
            network_id: 126,
            count: 1,
            metadata: 0,
            block_runtime_id: 537,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1344,
          item: {
            network_id: 370,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1345,
          item: {
            network_id: 389,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1346,
          item: {
            network_id: 526,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1347,
          item: {
            network_id: 525,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1348,
          item: {
            network_id: 373,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1349,
          item: {
            network_id: 152,
            count: 1,
            metadata: 0,
            block_runtime_id: 5169,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1350,
          item: {
            network_id: 76,
            count: 1,
            metadata: 0,
            block_runtime_id: 4534,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1351,
          item: {
            network_id: 69,
            count: 1,
            metadata: 0,
            block_runtime_id: 10284,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1352,
          item: {
            network_id: 143,
            count: 1,
            metadata: 0,
            block_runtime_id: 10149,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1353,
          item: {
            network_id: -144,
            count: 1,
            metadata: 0,
            block_runtime_id: 6102,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1354,
          item: {
            network_id: -141,
            count: 1,
            metadata: 0,
            block_runtime_id: 11944,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1355,
          item: {
            network_id: -143,
            count: 1,
            metadata: 0,
            block_runtime_id: 116,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1356,
          item: {
            network_id: -140,
            count: 1,
            metadata: 0,
            block_runtime_id: 11409,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1357,
          item: {
            network_id: -142,
            count: 1,
            metadata: 0,
            block_runtime_id: 93,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1358,
          item: {
            network_id: -487,
            count: 1,
            metadata: 0,
            block_runtime_id: 10840,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1359,
          item: {
            network_id: 77,
            count: 1,
            metadata: 0,
            block_runtime_id: 826,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1360,
          item: {
            network_id: -260,
            count: 1,
            metadata: 0,
            block_runtime_id: 6213,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1361,
          item: {
            network_id: -261,
            count: 1,
            metadata: 0,
            block_runtime_id: 11428,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1362,
          item: {
            network_id: -296,
            count: 1,
            metadata: 0,
            block_runtime_id: 11968,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1363,
          item: {
            network_id: 131,
            count: 1,
            metadata: 0,
            block_runtime_id: 9264,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1364,
          item: {
            network_id: 72,
            count: 1,
            metadata: 0,
            block_runtime_id: 12241,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1365,
          item: {
            network_id: -154,
            count: 1,
            metadata: 0,
            block_runtime_id: 5152,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1366,
          item: {
            network_id: -151,
            count: 1,
            metadata: 0,
            block_runtime_id: 4948,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1367,
          item: {
            network_id: -153,
            count: 1,
            metadata: 0,
            block_runtime_id: 5028,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1368,
          item: {
            network_id: -150,
            count: 1,
            metadata: 0,
            block_runtime_id: 7812,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1369,
          item: {
            network_id: -152,
            count: 1,
            metadata: 0,
            block_runtime_id: 9306,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1370,
          item: {
            network_id: -490,
            count: 1,
            metadata: 0,
            block_runtime_id: 5646,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1371,
          item: {
            network_id: -262,
            count: 1,
            metadata: 0,
            block_runtime_id: 12447,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1372,
          item: {
            network_id: -263,
            count: 1,
            metadata: 0,
            block_runtime_id: 256,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1373,
          item: {
            network_id: 70,
            count: 1,
            metadata: 0,
            block_runtime_id: 5663,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1374,
          item: {
            network_id: 147,
            count: 1,
            metadata: 0,
            block_runtime_id: 5058,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1375,
          item: {
            network_id: 148,
            count: 1,
            metadata: 0,
            block_runtime_id: 1783,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1376,
          item: {
            network_id: -295,
            count: 1,
            metadata: 0,
            block_runtime_id: 9990,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1377,
          item: {
            network_id: 251,
            count: 1,
            metadata: 0,
            block_runtime_id: 4522,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1378,
          item: {
            network_id: 151,
            count: 1,
            metadata: 0,
            block_runtime_id: 5976,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1379,
          item: {
            network_id: 419,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1380,
          item: {
            network_id: 522,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1381,
          item: {
            network_id: 527,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1382,
          item: {
            network_id: 125,
            count: 1,
            metadata: 0,
            block_runtime_id: 11563,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1383,
          item: {
            network_id: 23,
            count: 1,
            metadata: 0,
            block_runtime_id: 12191,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1384,
          item: {
            network_id: 33,
            count: 1,
            metadata: 0,
            block_runtime_id: 1545,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1385,
          item: {
            network_id: 29,
            count: 1,
            metadata: 0,
            block_runtime_id: 6145,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1386,
          item: {
            network_id: 46,
            count: 1,
            metadata: 0,
            block_runtime_id: 10479,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1387,
          item: {
            network_id: 548,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1388,
          item: {
            network_id: -204,
            count: 1,
            metadata: 0,
            block_runtime_id: 5603,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1389,
          item: {
            network_id: 567,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1390,
          item: {
            network_id: 567,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1391,
          item: {
            network_id: 567,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1392,
          item: {
            network_id: 567,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1393,
          item: {
            network_id: 567,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1394,
          item: {
            network_id: 567,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1395,
          item: {
            network_id: 567,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1396,
          item: {
            network_id: 567,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1397,
          item: {
            network_id: 567,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1398,
          item: {
            network_id: 567,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1399,
          item: {
            network_id: 567,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1400,
          item: {
            network_id: 567,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1401,
          item: {
            network_id: 567,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1402,
          item: {
            network_id: 567,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1403,
          item: {
            network_id: 567,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1404,
          item: {
            network_id: 567,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1405,
          item: {
            network_id: 567,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Type: {
                      type: "int",
                      value: 1,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1406,
          item: {
            network_id: 582,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1407,
          item: {
            network_id: 583,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1408,
          item: {
            network_id: 581,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1409,
          item: {
            network_id: 584,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1410,
          item: {
            network_id: 585,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1411,
          item: {
            network_id: 586,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1412,
          item: {
            network_id: 587,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1413,
          item: {
            network_id: 588,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1414,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "end",
                            value: [],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1415,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [0],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1416,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [8],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1417,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [7],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1418,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [15],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1419,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [12],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1420,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [14],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1421,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [1],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1422,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [4],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1423,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [5],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1424,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [13],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1425,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [9],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1426,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [3],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1427,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [11],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1428,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [10],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1429,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [2],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1430,
          item: {
            network_id: 519,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    Fireworks: {
                      type: "compound",
                      value: {
                        Explosions: {
                          type: "list",
                          value: {
                            type: "compound",
                            value: [
                              {
                                FireworkColor: {
                                  type: "byteArray",
                                  value: [6],
                                },
                                FireworkFade: {
                                  type: "byteArray",
                                  value: [],
                                },
                                FireworkFlicker: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkTrail: {
                                  type: "byte",
                                  value: 0,
                                },
                                FireworkType: {
                                  type: "byte",
                                  value: 0,
                                },
                              },
                            ],
                          },
                        },
                        Flight: {
                          type: "byte",
                          value: 1,
                        },
                      },
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1431,
          item: {
            network_id: 520,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [0],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -14869215,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1432,
          item: {
            network_id: 520,
            count: 1,
            metadata: 8,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [8],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -12103854,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1433,
          item: {
            network_id: 520,
            count: 1,
            metadata: 7,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [7],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -6447721,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1434,
          item: {
            network_id: 520,
            count: 1,
            metadata: 15,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [15],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -986896,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1435,
          item: {
            network_id: 520,
            count: 1,
            metadata: 12,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [12],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -12930086,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1436,
          item: {
            network_id: 520,
            count: 1,
            metadata: 14,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [14],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -425955,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1437,
          item: {
            network_id: 520,
            count: 1,
            metadata: 1,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [1],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -5231066,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1438,
          item: {
            network_id: 520,
            count: 1,
            metadata: 4,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [4],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -12827478,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1439,
          item: {
            network_id: 520,
            count: 1,
            metadata: 5,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [5],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -7785800,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1440,
          item: {
            network_id: 520,
            count: 1,
            metadata: 13,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [13],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -3715395,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1441,
          item: {
            network_id: 520,
            count: 1,
            metadata: 9,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [9],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -816214,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1442,
          item: {
            network_id: 520,
            count: 1,
            metadata: 3,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [3],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -8170446,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1443,
          item: {
            network_id: 520,
            count: 1,
            metadata: 11,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [11],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -75715,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1444,
          item: {
            network_id: 520,
            count: 1,
            metadata: 10,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [10],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -8337633,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1445,
          item: {
            network_id: 520,
            count: 1,
            metadata: 2,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [2],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -10585066,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1446,
          item: {
            network_id: 520,
            count: 1,
            metadata: 6,
            block_runtime_id: 0,
            extra: {
              has_nbt: true,
              nbt: {
                version: 1,
                nbt: {
                  type: "compound",
                  name: "",
                  value: {
                    FireworksItem: {
                      type: "compound",
                      value: {
                        FireworkColor: {
                          type: "byteArray",
                          value: [6],
                        },
                        FireworkFade: {
                          type: "byteArray",
                          value: [],
                        },
                        FireworkFlicker: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkTrail: {
                          type: "byte",
                          value: 0,
                        },
                        FireworkType: {
                          type: "byte",
                          value: 0,
                        },
                      },
                    },
                    customColor: {
                      type: "int",
                      value: -15295332,
                    },
                  },
                },
              },
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1447,
          item: {
            network_id: 619,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1448,
          item: {
            network_id: -239,
            count: 1,
            metadata: 0,
            block_runtime_id: 10148,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
        {
          entry_id: 1449,
          item: {
            network_id: 602,
            count: 1,
            metadata: 0,
            block_runtime_id: 0,
            extra: {
              has_nbt: 0,
              can_place_on: [],
              can_destroy: [],
            },
          },
        },
      ],
    });
  }
}

module.exports = CreativeContent;