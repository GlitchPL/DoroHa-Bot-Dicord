const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDE5OTc0MDM5OTUyNjg3MTE1.DX364g.1ablBA6RFfxo0Rjt1VQoHmr8c2E);
