// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
  const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.name === "welcome"
    );
    welcomeChannel.send(`😢 Goodbye ${member}! 😢`);
  }
}