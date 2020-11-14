const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: 'sigogne',
    description: 'Canvas soeur',
    async execute(message, args) {

        const canvas = Canvas.createCanvas(900, 500)

        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('./media/background.jpg')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        const avatar = await Canvas.loadImage(args ? message.mentions.users.first().displayAvatarURL({ format: 'jpg' }) :message.member.user.displayAvatarURL({
            format: 'jpg'
        }))
        ctx.drawImage(avatar, 375, 150, 200, 200)
        
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');

        message.channel.send(attachment)

    }
}
