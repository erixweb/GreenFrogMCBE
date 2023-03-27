const Block = require("./Block");

class BrickWall extends Block {
    getRuntimeId() {
        return 4694
    }

    getName() {
        return "brick_wall"
    }
}

module.exports = BrickWall;