const Discord = require('discord.js');

module.exports = {
    name: 'thanos',
    description: 'Help',
    async execute(message) {


        const rdm = Math.floor(Math.random() * Math.floor(99));

        const embed = new Discord.MessageEmbed()
            .setTitle('La fatalité de Thanos s\'est abattu sur terre ! 🌍')
            .setDescription(
                `${rdm} messages ont été supprimés !`)
            .setImage('https://media1.giphy.com/media/xUOxeZn47mrdabqDNC/giphy.gif')
            .setColor('#FF2D00')

        let msg = await message.channel.send(embed)
        await msg.react("👽").then(() =>
            message.channel.bulkDelet(rdm)
        )
    }
}
