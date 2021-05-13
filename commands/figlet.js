var figlet = require('figlet');

exports.run = (client, message, args) => {
    figlet(message.content.replace(client.config.prefix + 'figlet ',''), function(err, data) {
        if (err) {
            message.channel.send('Something went wrong...');
            return;
        }
        message.channel.send('```' + data + '```');
    });

}