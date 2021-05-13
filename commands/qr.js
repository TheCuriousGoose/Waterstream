exports.run = (client, message, args) => {
    
    if(!args[0]) return message.channel.send('Please enter a link');
    message.channel.send(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${args[0]}`);
}