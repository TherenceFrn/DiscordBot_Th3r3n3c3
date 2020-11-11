const Discord = require('discord.js');

module.exports = {
    name: 'spotify',
    description: 'spotify infos',
    execute(message, args, client) {

        let user = message.mentions.users.first() || message.author;

        console.log(user)

        if (user.presence.game !== null && user.presence.game.type === 'LISTENING' && user.presence.game.name === 'Spotify' && user.presence.game.assets !== null) {
            let trackImg = `https://i.scdn.co/image/${user.presence.game.assets.largeImage.slice(8)}`;
            let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            let trackName = user.presence.game.details;
            let trackAuthor = user.presence.game.state;
            let trackAlbum = user.presence.game.assets.largeText;

            const embed = new Discord.MessageEmbed()
                .setAuthor('Spotify track info', 'https://cdn.discord.com/emojis/408668371039682560.png')
                .setColor(0x1ED760)
                .setThumbnail(trackImg)
                .addField('Musique', trackName, true)
                .addField('Album', trackAlbum, true)
                .addField('Artiste', trackAuthor, true)
                .addField('Est entrain d\'écouter: ', `[\`${trackURL}\`](trackUrl)`, false);

            message.channel.send(embed)
        }
        else {
            message.channel.send(`${user} n'est pas entrain d'écouter une musique sur Spotify !`)
        }
      
    }
}
