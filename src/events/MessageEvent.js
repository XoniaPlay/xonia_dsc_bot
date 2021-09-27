// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message){
    if(message.author.id === '551819471149465631'){
      
    }
    else if(message.author.id === '801401072168992768'){
      
    }
    else{
      let blacklistedwords = ['twat','Wanker','Choad','Bollocks','fuck', 'dick', 'asshole', 'bitch', 'retard', 'bastard', 'cunt', 'ass', 'cum', 'sex', 'sexy', 'xnxx.com' , 'youporn.com', 'grabify.link', 'discord.gift/', 'iplogger.org', 'pornhub.com', 'hentaihaven.xxx', 'hentaihaven.red']

    let badworddetected = false;
    for (var i in blacklistedwords) {
      if(message.content.toLowerCase().includes(blacklistedwords[i].toLowerCase())) badworddetected = true;
    }
    if(badworddetected){
      message.delete()
      message.channel.send(`Bad word detected!`)
    }
    }
  }
}
