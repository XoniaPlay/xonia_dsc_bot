const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
const pagination = require('discord.js-pagination');
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'helpcmds', []);
  }

  run(client, message, args) {

    const help1 = new discord.MessageEmbed()
    .setTitle('Help')
    .addFields(
      {name: 'Page 2', value: 'Moderation Commands'},
      {name: 'Page 3', value: 'Fun'},
      {name: 'Page 4', value: 'Animals'},
      {name: 'Page 5', value: 'Common'}
    )
    
    const help3 = new discord.MessageEmbed()
    .setTitle('Moderation')
    .addFields(
      {name: 'ban', value: 'bans a user'},
      {name: 'kick', value: 'kicks a user'}
    )

    const help4 = new discord.MessageEmbed()
    .setTitle('Fun')
    .setDescription('FUN LOL')
    .addFields(
    {name: 'meme', value: 'memz'},
    {name: '999', value: 'do ya know da scp'},
    {name: '8ball', value: 'you know what it does'}
    )

    const help5 = new discord.MessageEmbed()
    .setTitle('Animals')
    .addFields(
      {name: 'duck', value: 'quack'},
      {name: 'dog', value: 'posts a image of a duck. ' },
      {name: 'cat', value: 'posts a image of a cat.'}
    )
    
    const help2 = new discord.MessageEmbed()
    .setTitle('Main')
    .addFields(
      {name: 'ping', value: 'checks the latency'}
    )

    const pages = [
      help1,
      help2,
      help3,
      help4,
      help5
    ]
    
    const emoji = ["⏪", "⏩"]


    pagination(message, pages, emoji)
}}