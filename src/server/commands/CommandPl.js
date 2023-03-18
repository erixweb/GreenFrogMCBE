const Logger = require("../Logger");
const PluginManager  = require('../../plugin/PluginManager')
const ColorsServer = require("../Colors");
const ColorsPlayer = require("../../player/Colors");

const { lang, config } = require("../../server/ServerInfo");

/**
 * @type {import('../../base/Command').Command}
 */
module.exports = {
	runAsConsole() {
		let plugins;
		if (PluginManager.getPlugins() == null) {
			plugins = 0;
		} else {
			plugins = PluginManager.getPlugins().length;
		}

		let pluginlist = ColorsServer.CONSOLE_GREEN + PluginManager.getPlugins().join(ColorsServer.CONSOLE_RESET + ", " + ColorsServer.CONSOLE_GREEN);

		Logger.log(`${lang.commands.plugins} (${plugins}): ${pluginlist ?? "No Plugins Available"} ${ColorsServer.CONSOLE_RESET}`);
	},

	run(_server, player) {
        if (!config.playerCommandPlugins) {
			Logger.log(lang.errors.playerUnknownCommand);
			return;
		}
		let plugins;
		if (PluginManager.getPlugins() == null) {
			plugins = 0;
		} else {
			plugins = PluginManager.getPlugins().length;
		}

		let pluginlist = ColorsPlayer.green + PluginManager.getPlugins().join(ColorsPlayer.white + ", " + ColorsPlayer.green);

		player.sendMessage(`${lang.commands.plugins} (${plugins}): ${pluginlist ?? "No Plugin Available"} ${ColorsPlayer.reset}`);
    },

	data: {
		name: "plugins",
		description: "Plugins command.",
        aliases: ['pl'],
		minArg: 0,
		maxArg: 0,
	},
};
