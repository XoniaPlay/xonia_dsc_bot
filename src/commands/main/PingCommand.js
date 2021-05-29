const discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'main', []);
  }

  run(client, message, args) {
    const pingembed = new discord.MessageEmbed()
    .setTitle('🏓 Pong!')
    .addFields(
      {name: 'Bot ping', value: `${Date.now() - message.createdTimestamp}ms`},
      {name: 'API latency', value: `${Math.round(client.ws.ping)}ms`}
    )
    .setFooter('ping lol')
    message.channel.send(pingembed)
  }
}