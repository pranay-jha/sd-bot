const { Command } = require('discord.js-commando')

module.exports = class dateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'decision',
			aliases: ['decisions'],
			group: 'stats',
			memberName: 'decision',
			description: 'Replies with the date of UCSD admissions release',
        });
    }

    run(message) {
        var currentDay = new Date(Date.now())
        var dayOfUCSD = new Date('3/12/21')
        var difference = Math.round((dayOfUCSD.getTime() - currentDay.getTime()) / (1000 * 3600 * 24)) - 1
		return message.say('THERE ARE ONLY' + difference + 'DAYS LEFT UNTIL UCSD IS OUT!!!')
	}
};