const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help',
    async execute(message) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Liste des commandes :')
            .setDescription(
                `#help\n`+
                `#audio [nom d'audio] (##audio help pour plus de détails)\n`+
                `#play [lien youtube]\n`+
                `#prune [0-99]\n`+
                `#server\n` +
                `#femme\n` +
                `#thanos\n` +
                `#zawarudo\n` +
                `#avatar [empty OR @tag]` +
                `#random [0-9]+-[0-9]+\n` +
                `#robot\n` +
                `#soeur [empty OR @tag]\n` +
                `#news [empty OR @tag]\n` +
                `#piper [empty OR @tag]\n` +
                `#wolverine [empty OR @tag]\n` +
                `#sigogne [empty OR @tag]\n`
                )
            .setColor('#98FB98')
            .setFooter('(Appuyez sur la croix pour supprimer le message)')
        let msg = await message.channel.send(embed)
        await msg.react("👌")
    }
}
