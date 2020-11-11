const Discord = require('discord.js');

module.exports = {
    name: 'leo',
    description: 'Blagues de léo',
    async execute(message) {
        const axios = require('axios')
        axios.get('https://www.blagues-api.fr/api/random', {
                    headers: {
                                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTc3NTI0MTkzNTEwOTQ4ODY0IiwibGltaXQiOjEwMCwia2V5IjoiRnJuNlJ0UmlFalZUOUpzQTFaVVdUUHBJeHNtSHZXUTdsQjhKZFNxSHJQTHFJaHZZT2UiLCJjcmVhdGVkX2F0IjoiMjAyMC0xMS0wNlQyMjowNzoxOCswMTowMCIsImlhdCI6MTYwNDY5NjgzOH0.Nezk3nrz0OpD5kVbo_6eciW4mX8IQFU6P9gE2kkgM9w`
                            }
                        })
            .then(async (data) => {
                const blagues = data.data;
                const embed1 = new Discord.MessageEmbed()
                    .setTitle('Blague très drole niveau Léo 🤡')
                    .setDescription(`${blagues.joke}`)
                    .setColor('#FF2D00')
                    .setFooter('(Appuyez sur le micro pour obtenir l\'autre partie de la blague)')
                    .setImage('https://i.imgur.com/03bzBgF.png')
                const embed2 = new Discord.MessageEmbed()
                    .setTitle('Réponse de la blague 🥳')
                    .setDescription(`${blagues.answer} \n 🤡`)
                    .setColor('#FF2D00')
                let msg = await message.channel.send(embed1)
                await msg.react("🎤");
                msg.awaitReactions(
                        (reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🎤'), {
                            max: 1,
                            time: 30000
                        })
                    .then(
                        collected => {
                            if (collected.first().emoji.name == '🎤') {
                                message.channel.send(embed2)
                            }
                        }
                    )
            })
    }
}
