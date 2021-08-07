exports.run = (client, message, args) => {
    if(message.member.id !== '396009306182647819') return;

    if(args[0] && args[1]){
        const user = message.mentions.members.first();
        try{
            user.roles.add(args[0]);
            message.channel.send('Role given').then(msg => msg.delete({ timeout: 300 }).then(()=> message.delete()));
        }catch{
            message.channel.send('Something went wrong').then(msg => msg.delete({ timeout: 300}).then(()=> message.delete()));
        }

    }else{
        message.channel.send('Please use `' + client.config.prefix + 'giverole <role id> <user>`').then(msg => msg.delete({ timeout: 300 }).then(()=> message.delete()));
    }
}