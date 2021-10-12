const Discord = require('discord.js');
const client = new Discord.Client( { disableMentions: "all" } );
require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login("ODkyNjQyNjY0MDY1OTQ1NjAw.YVP4Qw.l-Mb8A9ZwRqopP2LxI8Y-vUYzlM");
