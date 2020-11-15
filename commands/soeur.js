const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: 'soeur',
    description: 'Canvas soeur',
    async execute(message, args) {

        const canvas = Canvas.createCanvas(540, 672)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('./media/bellejournee.jpg')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        const avatar = await Canvas.loadImage(args != '' ? message.mentions.users.first().displayAvatarURL({
            format: 'jpg'
        }) : message.member.user.displayAvatarURL({
            format: 'jpg'
        }))
        ctx.drawImage(avatar, 315, 25, 200, 200)

        ctx.font = "55px Comic Sans MS"
        ctx.fontWeight = "bold"
        ctx.fillStyle = "#fff"
        const userName = args != '' ? message.mentions.users.first().username : message.author.username;
        ctx.fillText(`${userName} a dit : `, 25, 450)

        const liste = [
            'Zoé',
            'Camille',
            'Léa'
        ]
        const numSoeur = Math.floor(Math.random() * Math.floor(liste.length));

        ctx.font = "45px Comic Sans MS"
        ctx.fontWeight = "bold"
        ctx.fillStyle = "#fff"
        ctx.fillText('"Elle est sacrément', 25, 500)
        ctx.font = "45px Comic Sans MS"
        ctx.fontWeight = "bold"
        ctx.fillStyle = "#fff"
        ctx.fillText(`bonne ${liste[numSoeur]}`, 25, 550)
        ctx.font = "45px Comic Sans MS"
        ctx.fontWeight = "bold"
        ctx.fillStyle = "#fff"
        ctx.fillText(`quand même"`, 25, 600)

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
        message.channel.send(attachment)
    }
}
