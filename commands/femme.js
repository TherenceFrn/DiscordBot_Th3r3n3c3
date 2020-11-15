const Discord = require('discord.js');

module.exports = {
    name: 'femme',
    description: 'Help',
    async execute(message) {
        const liste = [
            'Zoé',
            'Camille',
            'Léa',
            'Leaticia',
            'Ambre',
            'Céline'
        ]
        const numSoeur = Math.floor(Math.random() * Math.floor(liste.length));
        const embed = new Discord.MessageEmbed()
            .setTitle('Cette femme est-elle légale ?')
            .setDescription(
                `${liste[numSoeur]} est légale, c'est les droits de l'homme qui le disent`)
            .setFooter(`Protégez là de Lucas bonnet`)
            .setColor('#ff7dee')
        let msg = await message.channel.send(embed)
        await msg.react("🥵").then(() => {
            msg.react("🍆").then(() => {
                msg.react("👉").then(() => {
                    msg.react("👌").then(() => {
                        msg.react("🍑").then(() => {
                            msg.react("💧")
                        })
                    })
                })
            })
        });
        let msg1 = await message.channel.send('Je rajoute que, Leaticia est une vraie salope')
        await msg1.react('🥵').then(() =>
            msg1.react('👨‍❤️‍💋‍👨')
        )
    }
}
