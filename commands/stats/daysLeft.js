const { Command } = require('discord.js-commando')

module.exports = class daysLeftCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'days',
			aliases: ['daysleft'],
			group: 'stats',
			memberName: 'days',
			description: 'Replies with the number of days until June 2nd, 2021',
        });
    }

    run(message) {
        var currentDay = new Date(Date.now())
        var dayOfSD = new Date('5/31/21')
        var difference = Math.round((dayOfSD.getTime() - currentDay.getTime()) / (1000 * 3600 * 24)) - 1

		return message.say('There are only ' + difference + ' days left!!!')
	}
};