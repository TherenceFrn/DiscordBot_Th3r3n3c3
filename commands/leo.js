const Discord = require('discord.js');

module.exports = {
    name: 'leo',
    description: 'Blagues de léo',
    async execute(message) {
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

        const embed1 = new Discord.MessageEmbed()
            .setTitle('Blague de Léo 🤡')
            .setDescription(`${citationsLeo[messageId][0]}`)
            .setColor('#FF2D00')
            .setFooter('(Appuyez sur le micro pour obtenir l\'autre partie de la blague)')
            .setImage('https://i.imgur.com/03bzBgF.png')
        
        const embed2 = new Discord.MessageEmbed()
            .setTitle('Réponse de la blague 🥳')
            .setDescription(`${citationsLeo[messageId][1]} \n 🤡`)
            .setColor('#FF2D00')
            .setFooter('(Vous avez le droit d\'insulter Léo)')

        let msg = await message.channel.send(embed1);
        await msg.react("🎤")
        msg.awaitReactions(
            (reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🎤'),
                { max: 1, time: 30000 })
                .then(
                    collected =>
                    {   
                        if (collected.first().emoji.name == '🎤') {
                            message.channel.send(embed2)
                        }
                    }
                )
    }
}
