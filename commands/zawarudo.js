const Discord = require('discord.js');

module.exports = {
    name: 'zawarudo',
    description: 'ZA WARUDO',
    async execute(message) {

        const embed = new Discord.MessageEmbed()
            .setTitle('ZA WARUDOOOOO')
            .setImage('https://media1.tenor.com/images/afc87b53146aaeaf78eaad0bb50fd8a2/tenor.gif')
            .setColor('#f5de33')

        let msg = await message.channel.send(embed)
        await msg.react("⏲")

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(`./media/zawarudo.mp3`, {
                volume: 0.7,
            });
            dispatcher.on('start', () => {
                message.client.user.setActivity('Dio arrêter le temps', {
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
        } 
    }
}
