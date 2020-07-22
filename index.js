const Discord = require('discord.js')
const {CommandoClient} = require('discord.js-commando')
const path = require('path')
const client = new CommandoClient({
    commandPrefix: '?',
    owner: '283787767253565441',
})

client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['stats', 'dates and stuff']
        //add more here later
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});

client.user.setActivity("Waiting...")

client.on('error', console.error);
    
client.login(process.env.token)
