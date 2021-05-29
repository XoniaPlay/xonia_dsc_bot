const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('eval', 'botadmin', []);
  }

  run(client, message, args) {
     /** 
     * @param {Discord.Message} message
     * @param {Array<String>} args
    */
        try {
            const code = args.join(" ");
            eval(code);
          } catch (err) {
            message.channel.send(`${err.message}`);
          }
    }
}
