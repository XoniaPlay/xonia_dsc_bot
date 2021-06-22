# Xonia discord bot

Welcome to the repo of the xonia discord bot!
This bot was made with slappey.


## How to host yourself

1. Setting it up
In [slappey.json](https://github.com/XoniaPlay/xonia_dsc_bot/blob/d0f8c574eaf927b188caab54f119b38c762043e4/slappey.json#L5) on line 5 replace TOKEN_HERE with your discord bot token.

2. Setting up welcome/goodbye channels
In [GuildMemberAddEvent](https://github.com/XoniaPlay/xonia_dsc_bot/blob/d0f8c574eaf927b188caab54f119b38c762043e4/src/events/GuildMemberAddEvent.js#L10) and [GuildMemberRemoveEvent](https://github.com/XoniaPlay/xonia_dsc_bot/blob/d0f8c574eaf927b188caab54f119b38c762043e4/src/events/GuildMemberRemoveEvent.js#L10) on line 10 replace `welcome` with your welcome channel name

3. Hosting it

run these commands:

```
npm i
```
and

```
node src/index
```

The bot should be running.

You need to have node.js installed

To use eval, you need to be a bot admin. You can give yourself that permission by going to [eval.js on line 14](https://github.com/XoniaPlay/xonia_dsc_bot/blob/0456ea7a5e4d03622489f033767a875b129ec83f/src/commands/botadmin/EvalCommand.js#L14)
. There can give [2 people bot admin](https://github.com/XoniaPlay/xonia_dsc_bot/blob/0456ea7a5e4d03622489f033767a875b129ec83f/src/commands/botadmin/EvalCommand.js#L22) (yourself and someone else). If you only want 1 person as bot admin, you can just delete one of the else if(message.author.id === "")
