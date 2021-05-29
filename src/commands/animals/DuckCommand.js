const BaseCommand = require('../../utils/structures/BaseCommand');
const redditimage = require('reddit.images');
const discord = require('discord.js')

module.exports = class DuckCommand extends BaseCommand {
  constructor() {
    super('duck', 'animals', []);
  }

async run(client, message, args) {

  const msg = await message.channel.send("Please wait for a Duck")
  const subreddits = ["duck"]
  const duck = await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: [subreddits],
  })
  const helpEmbed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Duck")
        .setImage(duck[0].image)
        .setFooter(`From r/duck`)
        await msg.edit("Heres a duck",helpEmbed)
    }
};
