const fs = require('fs');

const Discord = require('discord.js');

const { prefix, token} = require('./config.json');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file =>  file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready tsé');
    client.user.setActivity('baiser zoé', {
        type: 'PLAYING'
    })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
        return message.reply('Commande non reconnue ! \n Utilisez ##help pour voir la liste des commandes')
    }

    try {
        client.commands.get(command).execute(message, args)
    } catch (error) {
        console.error(error);
        message.reply('Il y a eu une erreur !')
    }
});

// client.on('messageReactionAdd', (reaction, user) => {
//     console.log('a reaction has been added');
// });

// client.on('raw', packet => {
//     if (!['MESSAGE_REACTION_ADD'].includes(packet.t)) return;

//     const channel = client.channels.get(packet.d.channel_id);

//     if (channel.messages.has(packet.d.message_id)) return;

//     channel.fetchMessage(packet.d.message_id).then(message => {
//         // Emojis can have identifiers of name:id format, so we have to account for that case as well
//         const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
//         // This gives us the reaction we need to emit the event properly, in top of the message object
//         const reaction = message.reactions.get(emoji);
//         // Adds the currently reacting user to the reaction's users collection.
//         if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
//         // Check which type of event it is before emitting
//         if (packet.t === 'MESSAGE_REACTION_ADD') {
//             client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
//         }
//     })
// })

// client.on('messageReactionAdd', message => {
//     console.log('message triggered :' + message.content)
// })

client.login(token)