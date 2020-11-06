const Discord = require('discord.js');

module.exports = {
    name: 'leo',
    description: 'fonction message simple',
    execute(message) {
        const citationsLeo = [
            [
                'Qu’est-ce qui n’est pas un steak ?',
                'Une pastèque'
            ],
            [
                'Quel plat sent le cul de vache ?',
                'La langue de boeuf'
            ],
            [
                'Melon et Melèche prennent une maison. Melon l’achète …',
                'Et Melèche l’habite'
            ],
            [
                'Qu\'est ce qui est petit et qui tire des flèches ?',
                'Un nain dien'
            ],
            [
                'Qu\'est ce qu\'un buisson au bord de la route ?',
                'Une portugaise qui fait du stop'
            ],
            [
                'Qu\'est ce qu\'une bonne blague de léo ?',
                'Un mythe'
            ]
        ]
        
        const messageId = Math.floor(Math.random() * Math.floor(citationsLeo.length))
        // message.reply();

        const embed1 = new Discord.MessageEmbed()
            .setTitle('Blague de Léo 🤡')
            .setDescription(`${citationsLeo[messageId][0]}`)
            .setColor('#FF2D00')
            .setFooter('(Appuyez sur le micro pour obtenir l\'autre partie de la blague)')
            .setImage('https://i.imgur.com/03bzBgF.png')

        message.channel.send(embed1)
        message.react('🎤')

        message.awaitReactions(
            (reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🎤'),
                { max: 1, time: 30000 })
                .then(
                    collected =>
                    {   
                        if (collected.first().emoji.name == '🎤') {
                            message.channel.send(`${citationsLeo[messageId][1]}`).then((message) => message.react('🤡'))
                        }
                    }
                )
    }
}
