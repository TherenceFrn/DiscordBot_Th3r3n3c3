const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help',
    async execute(message) {
        

        const embed = new Discord.MessageEmbed()
            .setTitle('Liste des commandes :')
            .setDescription(
                `##help\n`+
                `##audio [nom d'audio] (##audio help pour plus de détails)\n`+
                `##play [lien youtube]\n`+
                `##prune [0-99]\n`+
                `##server\n`+
                `##avatar [empty || @tag]`)
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
    }
}
