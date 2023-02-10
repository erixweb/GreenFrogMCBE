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
/* eslint-disable no-case-declarations */
const rl = require("readline");
const Logger = require("./Logger");
const Events = require("../plugin/Events");
const { lang } = require("../server/ServerInfo")
const Shutdown = require("./commands/CommandShutdown");
const Version = require("./commands/CommandVersion");
const Kick = require("./commands/CommandKick");
const Help = require("./commands/CommandHelp");
const Time = require("./commands/CommandTime");
const Say = require("./commands/CommandSay");
const Op = require("./commands/CommandOp");
const PL = require("./commands/CommandPl");

let isclosed = false;

module.exports = {
  closed: isclosed,

  close() {
    isclosed = true;
  },

  async start() {
    const commands = {
      shutdown: new Shutdown(),
      kick: new Kick(),
      version: new Version(),
      help: new Help(),
      time: new Time(),
      say: new Say(),
      op: new Op(),
      pl: new PL(),
    };

    const r = rl.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    r.setPrompt("> ");
    r.prompt(true);

    r.on("line", (data) => {
      if (data.toLowerCase().startsWith(`${lang.commands.Time.toLowerCase()} `)) {
        commands.time.execute(data.split(" "));
        return;
      }

      if (data.toLowerCase().startsWith(`${lang.commands.Say.toLowerCase()} `)) {
        const msg = data.split(" ").slice(1).join(" ");
        commands.say.execute(msg);
        return;
      }

      if (data.toLowerCase().startsWith(`${lang.commands.Kick.toLowerCase()} `)) {
        const dataParts = data.split(" ");
        const target = dataParts[1];
        const reason = dataParts.slice(2).join(" ");
        commands.kick.execute([target, reason]);
        return;
      }

      if (data.toLowerCase().startsWith(`${lang.commands.Op.toLowerCase()} `)) {
        commands.op.execute(data.split(" ")[1]);
        return;
      }

      Events.executeOCC(data, require("../Server").server);
      const command = data.toLowerCase().split(" ")[0];

      switch (command) {
        case "":
          break;
        case lang.commandShutdown.toLowerCase():
        case lang.commandStop.toLowerCase():
          commands.shutdown.execute();
          break;
        case lang.commandOp.toLowerCase():
          commands.op.execute(data.split(" ")[1]);
          break;
        case lang.commandKick.toLowerCase():
          const reason = data.split(" ").slice(2).join(" ");
          commands.kick.execute(data.split(" ")[1], reason);
          break;
        case lang.commandPl.toLowerCase():
        case lang.commandPlugins.toLowerCase():
          commands.pl.execute();
          break;
        case lang.commandVer.toLowerCase():
        case lang.commandVersion.toLowerCase():
          commands.version.execute();
          break;
        case lang.commandTime.toLowerCase():
          commands.time.execute();
          break;
        case lang.commandSay.toLowerCase():
          const msg = data.split(" ").slice(1).join(" ");
          commands.say.execute(msg);
          break;
        case "?":
        case lang.commandHelp.toLowerCase():
          commands.help.execute();
          break;
        default:
          Logger.log(lang.errors.unknownCommand);
          break;
      }

      if (!isclosed) r.prompt(true);
    });
  },
};
