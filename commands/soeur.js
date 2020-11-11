const Discord = require('discord.js');

module.exports = {
    name: 'soeur',
    description: 'Help',
    async execute(message) {

        let liste = [
            'Zoé',
            'Camille',
            'Léa',
            'Leaticia',
            'Céline'
        ]

        const numSoeur = Math.floor(Math.random() * Math.floor(liste.length));

        const embed = new Discord.MessageEmbed()
            .setTitle('Cette femme est-elle légale ?')
            .setDescription(
                `${liste[numSoeur]} est légale, c'est les droits de l'homme qui le disent`)
            .setFooter(`Protégez là de Lucas bonnet`)
            .setColor('#FF2D00')

        let msg = await message.channel.send(embed)
        await msg.react("✊");
        await msg.react("");
        await msg.react("✊");

        let msg1 = await message.channel.send('Je rajoute que, Leaticia est une vraie salope')
        await msg1.react('🥵').then(() =>
            msg1.react('👨‍❤️‍💋‍👨')
        )
    }
}
