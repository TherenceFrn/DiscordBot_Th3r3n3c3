const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help',
    async execute(message) {
        

        const embed1 = new Discord.MessageEmbed()
            .setTitle('Liste des commandes :')
            .setDescription(`##help \n ##play [nounours, pillarmen] \n ##prune [0-99] \n ##server \n ##avatar [empty-@tag]`)
            .setColor('#FF2D00')
            .setFooter('(Appuyez sur la croix pour supprimer le message)')


        let msg = await message.channel.send(embed1).react("❌")

        msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❌'), {
                    max: 1,
                    time: 30000
                })
            .then(
                message.channel.bulkDelete(2)
            )
    }
}
