const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: 'news',
    description: 'Canvas soeur',
    async execute(message, args) {
        const canvas = Canvas.createCanvas(1231, 2048)
        const ctx = canvas.getContext('2d')
        const background = await Canvas.loadImage('./media/news.jpg')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        const avatar = await Canvas.loadImage(args != '' ? message.mentions.users.first().displayAvatarURL({
            format: 'jpg'
        }) : message.member.user.displayAvatarURL({
            format: 'jpg'
        }))
        ctx.drawImage(avatar, 415, 576, 400, 400)
        ctx.font = "60px Verdana"
        ctx.fontWeight = "bold"
        ctx.fillStyle = "#fff"
        ctx.textAlign = "center"
        const userName = args != '' ? message.mentions.users.first().username : message.author.username;
        ctx.fillText(`${userName} is online`, 615, 1026)
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
        message.channel.send(attachment)
    }
}
