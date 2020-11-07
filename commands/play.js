module.exports = {
    name: 'play',
    description: 'play youtube',
    async execute(message, args) {
       if (!message.guild) return;

        message.channel.send('Audio validé')

        if (message.member.voice.channel)
        {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0]), {
                volume: 0.5
            });

            dispatcher.on('start', () => {
                message.client.user.setActivity('TA MERE LA PUTE', {type: 'LISTENING'})
            })

            dispatcher.on('error', () => {
                message.reply('Lien youtube non valide');
                message.member.voice.channel.leave();
                message.client.user.setActivity('baiser zoé', {
                    type: 'PLAYING'
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
           else
        {
            message.reply('Il faut que tu sois dans un channel audio !');
        }
    }
}
