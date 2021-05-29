const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('userinfo', 'moderation', []);
  }

  run(client, message, args) {
    const usertagged = message.mentions.users.first() || message.client.users.cache.get(args.toString())
        if(usertagged){
            var roles = ""
            message.guild.member(usertagged).roles.cache.each(role => roles += ` <@&${role.id}>`)
            const userembed = new Discord.MessageEmbed()
            .setTitle(usertagged.tag)
            .setThumbnail(usertagged.avatarURL())
            .addFields(
                { name: 'Account created:', value: `${usertagged.createdAt}`, inline: false },
                { name: 'Account joined:', value: `${message.guild.member(usertagged).joinedAt}`, inline: false },
                { name: `Role(s) [${message.guild.member(usertagged).roles.cache.size}]:`, value: `${roles}`, inline: false },
            )
            .setFooter(`User id: ${usertagged.id} | API Ping: ${Math.round(message.client.ws.ping)}ms`)
            return message.channel.send(userembed)
        }
        var roles = ""
        message.guild.member(message.author).roles.cache.each(role => roles += ` <@&${role.id}>`)
        const userembed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setThumbnail(message.author.avatarURL())
        .addFields(
            { name: 'Account created:', value: `${message.author.createdAt}`, inline: false },
            { name: 'Account joined:', value: `${message.guild.member(message.author).joinedAt}`, inline: false },
            { name: `Role(s) [${message.guild.member(message.author).roles.cache.size}]:`, value: `${roles}`, inline: false },
        )
        .setFooter(`User id: ${message.author.id} | API Ping: ${Math.round(message.client.ws.ping)}ms`)
        return message.channel.send(userembed)
  }
}