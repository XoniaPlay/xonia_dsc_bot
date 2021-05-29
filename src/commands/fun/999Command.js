const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class _999Command extends BaseCommand {
  constructor() {
    super('999', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('https://www.youtube.com/watch?v=pJDWWLVYho8');
  }
}