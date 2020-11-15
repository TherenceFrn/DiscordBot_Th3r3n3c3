const Discord = require('discord.js');

module.exports = {
    name: 'thanos',
    description: 'Help',
    async execute(message) {
        const rdm = Math.floor(Math.random() * Math.floor(99));
        const embed = new Discord.MessageEmbed()
            .setTitle('You should have aimed for the head')
            .setDescription(
                `${rdm} messages ont été supprimés !`)
            .setImage('https://media1.tenor.com/images/d89ba4e965cb9144c82348a1c234d425/tenor.gif')
            .setColor('#FF2D00')
        const embed1 = new Discord.MessageEmbed()
            .setTitle(`C'est finis !`)
            .setDescription(`${message.author.username} à décidé de tuer la moitié de la population en demandant l'aide de Thanos`)
            .setImage('https://media1.tenor.com/images/f039ad91755b2644424967f8f823a91c/tenor.gif?itemid=15240312')
            .setColor('#FF2D00')
        let msg = await message.channel.send(embed)
        await msg.react("👽")
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(`./media/thanos.wav`, {
                volume: 1,
            });
            dispatcher.on('start', () => {
                message.client.user.setActivity('tuer la moitié de la population', {
                    type: 'LISTENING'
                })
            })
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
                message.client.user.setActivity('baiser zoé', {
                    type: 'PLAYING'
                })
                let msg1 = message.channel.send(embed1)
            })
        } else {
            message.reply('Il faut que tu sois dans un channel audio !');
        }
    }
}
