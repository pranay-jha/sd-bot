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
		
		var seconds = Math.floor((dayOfUCSD - (currentDay))/1000)
		var minutes = Math.floor(seconds/60)
		var hours = Math.floor(minutes/60)
		var days = Math.floor(hours/24)

		hours = hours - (days * 24)
		minutes = minutes - (days * 24 * 60) - (hours * 60)
		seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)

		return message.say('THERE ARE ONLY ' + days + ' DAYS, ' + hours + ' HOURS, ' + minutes + ' MINUTES, AND ' + seconds + ' SECONDS UNTIL UCSD DECISION DAY!!!')
	}
};