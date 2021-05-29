const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require('ms');
module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(_client, message, args) {
          if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need MANAGE_MESSAGES to use this command. E')
          const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
          if(!Member) return message.channel.send('Member is not found.')
          const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
          if(!role) {
              try {
                  message.channel.send('Failed to find the muterole, creating a muterole now..')
  
                  let muterole = await message.guild.roles.create({
                      data : {
                          name : 'muted',
                          permissions: []
                      }
                  });
                  message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                      await channel.createOverwrite(muterole, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS: false
                      })
                  });
                  message.channel.send('done. muted role get created')
              } catch (error) {
                  console.log(error)
              }
          };
          let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
          if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} is already muted. bruh`)
          await Member.roles.add(role2)
          message.channel.send(`${Member.displayName} Got muted`)
      }
    }
    
