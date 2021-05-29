const BaseCommand = require('../../utils/structures/BaseCommand');
const redditimage = require('reddit.images')
const Discord = require('discord.js')
module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'fun', []);
  }

  async run(client, message, args) {
    const msg = await message.channel.send("Please wait for a MEME")
    const subreddits = ["memes"]
    const meme = await redditimage.fetch({
        type: "custom",
        total: 1,
        subreddit: [subreddits],
    })
    const memeembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(meme[0].title)
    .setImage(meme[0].image)
    .setFooter(`From r/meme`)
    await msg.edit("Heres a meme",memeembed)
}
  }