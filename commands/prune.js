module.exports = {
    name: 'prune',
    description: 'supprimer les messages',
    execute(message, args) {
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return message.reply('Arguments non valide, ce doit être un nombre !');
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply('Tu dois choisir un nombre entre 1 et 99 (Discord n\'autorise pas la suppression de plus de 100 messages)');
        }
        message.channel.bulkDelete(amount).then(message.channel.send(`${amount} messages ont été supprimés par ${message.author}`));
    }
}
