module.exports = {
    name: 'robot',
    description: 'fonction message simple',
    execute(message) {
        message.channel.bulkDelete(1)
        message.channel.send('',{
            files: [
                "./media/robot.jpg"
            ]
        })
    }
}
