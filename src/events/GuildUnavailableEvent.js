// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildUnavailableEvent extends BaseEvent {
  constructor() {
    super('guildUnavailable');
  }
  
  async run(client, guild) {
    const unavailableChannel = member.guild.channels.cache.find(
      channel => channel.name === "logs"
    );
    unavailableChannel.send(`${guild} Was unavailable for some time.`)
  }
}