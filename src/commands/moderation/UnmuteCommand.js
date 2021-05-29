const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

 async run(client, message, args) {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!Member) return message.channel.send('Member not found')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    await Member.roles.remove(role)

    message.channel.send(`${Member.displayName} got unmuted`)
}
}
