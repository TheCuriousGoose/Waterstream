exports.run = (client, message, args) => {
    let error = 'Wrong command usage! Please use `!clear (Number between 2 and 100)`'
    
    if(!args[0]){
        message.channel.send(error);
    }else if(args[1]){
        message.channel.send(error);
    }else{
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            let x = parseInt(args[0]);
			if(!isNaN(x)){
                if(x <= 100 && x >= 2){  
                    message.channel.bulkDelete(x).then(msg => {
                        message.channel.send(`Deleted ${args[0]} messages.`).then(msg => msg.delete({ timeout: 3000 })).catch(e => console.log(e));
                    }).catch(e => {
                        console.log(e);
                        message.channel.send('Something went wrong while executing the command, Please try again').then(msg => msg.delete({ timeout: 5000 })).catch(e => console.log(e));
                    });
                }else{
                    message.channel.send('Enter a value between `2` and `100`');
                }
            }else{
                message.channel.send(error);
            }
        }else{
            message.channel.send("You're are missing the permission `MANAGE_MESSAGES`");
        }
    }
}