const Block = require("./Block");

class AndesiteWall2 extends Block {
    getRuntimeId() {
        return 3244
    }

    getName() {
        return "andesite_wall"
    }
}

module.exports = AndesiteWall2;