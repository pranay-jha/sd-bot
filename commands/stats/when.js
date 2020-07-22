const { Command } = require('discord.js-commando')

module.exports = class dateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'when',
			aliases: ['date'],
			group: 'stats',
			memberName: 'when',
			description: 'Replies with the day we are leaving to SD',
        });
    }

    run(message) {
		return message.say('June 2nd, 2021')
	}
};