module.exports = {
    name: 'audio',
    description: 'play audio',
    async execute(message, args) {
        if (!message.guild) return;

        const audioList = [
            'nounours',
            'pillarmen'
        ]

        const tableau = audioList.filter(audioTitle => audioTitle == args).length

        if (!tableau) return;

        message.channel.send('Audio validé')

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(`./media/${args}.mp3`, {
                volume: 0.5,
            });
            dispatcher.on('start', () => {
                message.client.user.setActivity('TA MERE LA PUTE', {
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
        } else {
            message.reply('Il faut que tu sois dans un channel audio !');
        }

    }
}