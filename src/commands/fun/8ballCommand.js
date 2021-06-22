const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class _8ballCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  run(client, message, args) {
    function doMagic8BallVoodoo() {
      var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];
  
      return rand[Math.floor(Math.random()*rand.length)];
  }
  if(!args[0]) return message.channel.send("Error: Please send a question with more than 1 word")
  else{
  message.channel.send(doMagic8BallVoodoo())
  }
  }
}