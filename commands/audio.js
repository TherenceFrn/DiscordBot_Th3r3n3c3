const Discord = require('discord.js');

module.exports = {
    name: 'audio',
    description: 'play audio',
    async execute(message, args) {
        if (!message.guild) return;

        const audioList = [
            'arabe',
            'arabes',
            'cirque',
            'doigby',
            'donut',
            'indignite',
            'kameto',
            'lourd',
            'never',
            'nounours',
            'pet',
            'pillarmen',
            'radiosexe',
            'siphano',
            'wow',
            'help'
        ]

        const tableau = audioList.filter(audioTitle => audioTitle == args).length

        if (!tableau) return;

        if(args == 'help') {
            let embedContent = '';
            for (let index = 0; index < audioList.length; index++) {
                embedContent += `${audioList[index]} \n`
            }

            const embed = new Discord.MessageEmbed()
                .setTitle('Liste des commandes :')
                .setDescription(embedContent)
                .setColor('#FF2D00')
                .setFooter('(Appuyez sur la croix pour supprimer le message)')

            let msg = await message.channel.send(embed)
            await msg.react("❌")

            msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❌'), {
                    max: 1,
                    time: 30000
                })
                .then(
                    collected => {
                        if (collected.first().emoji.name == '❌') {
                            // console.log('suppression !')
                            message.channel.bulkDelete(2)
                        }
                    }
                )

                return;
        }

        message.channel.send('Audio validé')

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(`./media/${args}.mp3`, {
                volume: 0.5,
            });
            dispatcher.on('start', () => {
                message.client.user.setActivity('TA MERE LA PUTE', {
                    type: 'LISTENING'
                })
            })

            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
                message.client.user.setActivity('baiser zoé', {
                    type: 'PLAYING'
                })

            })
        } else {
            message.reply('Il faut que tu sois dans un channel audio !');
        }

    }
}