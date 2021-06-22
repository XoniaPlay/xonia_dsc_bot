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
   if(message.author.id === "551819471149465631"){
        try {
            const code = args.join(" ");
            eval(code);
          } catch (err) {
            message.channel.send(`${err.message}`);
          }
        } 
      else if(message.author.id === "801401072168992768"){
        try {
          const code = args.join(" ");
          eval(code);
        } catch (err) {
          message.channel.send(`${err.message}`);
        }
      }
      else{
        message.channel.send("You must be bot admin+ to use this")
      }
    }
}
