const BaseCommand = require('../../utils/structures/BaseCommand');
const redditimage = require('reddit.images')
const Discord = require('discord.js')
module.exports = class CatCommand extends BaseCommand {
  constructor() {
    super('cat', 'animals', []);
  }

  async run(client, message, args) {
    const msg = await message.channel.send("Please wait for a cat")
        const subreddits = ["cat"]
        const meme = await redditimage.fetch({
            type: "custom",
            total: 1,
            subreddit: [subreddits],
        })
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(meme[0].title)
        .setImage(meme[0].image)
        .setFooter(`From r/cat`)
        await msg.edit("Heres a cat",helpEmbed)
    }
  }
