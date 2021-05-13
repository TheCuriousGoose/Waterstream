exports.run = (client, message, args) => {
    if(message.member.id !== '396009306182647819') return;

    if(args[0] && args[1]){
        const user = message.mentions.members.first();
        try{
            user.roles.add(args[0]);
            message.channel.send('Role given');
        }catch{
            message.channel.send('Something went wrong')
        }

    }else{
        message.channel.send('Please use `' + client.config.prefix + 'giverole <role id> <user>`')
    }
}