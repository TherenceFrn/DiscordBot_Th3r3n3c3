const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: 'wolverine',
    description: 'Canvas soeur',
    async execute(message, args) {
        const canvas = Canvas.createCanvas(480, 698)
        const ctx = canvas.getContext('2d')
        const avatar = await Canvas.loadImage(args != '' ? message.mentions.users.first().displayAvatarURL({
            format: 'jpg'
        }) : message.member.user.displayAvatarURL({
            format: 'jpg'
        }))
        ctx.drawImage(avatar, 90, 368, 300, 300)
        const background = await Canvas.loadImage('./media/wolverine.png')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
        message.channel.send(attachment)
    }
}
