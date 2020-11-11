const Discord = require('discord.js');

module.exports = {
    name: 'random',
    description: 'Random command',
    async execute(message, args) {

        if (!message.guild || args === null) return;

        function result (args) {
            const argu = args + '';
            const regex = '[0-9]+-[0-9]+';
            console.log(argu.match(regex));
            return argu.match(regex);
        }

        let arguments = args + ''; 
        arguments = arguments.split('-');

        if (result(args) === null ) return message.reply('Arguments non-valides, veuillez suivre ce modèle: #random [0-9]+-[0-9]+ \n Exemple: #random 8-77');

        const rdmCho = Math.floor(Math.random() * (arguments[1] - arguments[0] + 1) + arguments[0])

        const embed = new Discord.MessageEmbed()
            .setTitle('Choix d\'un nombre random')
            .addField(`Le nombre alétoire choisi entre ${arguments[0]} et ${arguments[1]} est:`,`${rdmCho}`)
            .setImage('https://i.pinimg.com/originals/3a/34/6b/3a346b536b6a6f5de274bbbff7908ec0.gif')
            .setColor('#cccccc')

        let msg = await message.channel.send(embed)
        await msg.react('🎲')
    }
}
