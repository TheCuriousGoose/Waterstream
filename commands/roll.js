exports.run = (client, message, args) => {
    if(args[0]){
        if(!isNaN(args[0])){
            message.channel.send(`${Math.floor(Math.random()*args[0])+1}`);
        }
    }else{
        message.channel.send(`${Math.floor(Math.random()*6)+1}`);
    }
}