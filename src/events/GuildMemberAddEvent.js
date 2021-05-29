// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.name === "welcome"
    );
    welcomeChannel.send(`👏 Welcome ${member}! 👏`);
  }
}
