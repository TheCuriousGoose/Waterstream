const owoify = require('owoify-js').default

exports.run = (client, message, args) => {
    let saymsg = message.content;
    var newcontent = saymsg.replace("!owoify","");
    
    if(message.mentions.users.size){
      message.channel.send('Do not ping people in the owoify command!')
    }else{
    if(message.content.includes("@everyone")){
      message.channel.send("You're not allowed to owoify that message"); 
    }else if(message.content.includes("@here")){
      message.channel.send("You're not allowed to owoify that message"); 
    }else{
        let rng = Math.random();
        if(rng < 0.3333){
            message.channel.send(owoify(newcontent));
        }else if(rng > 0.3333 && rng < 0.6666){
            message.channel.send(owoify(newcontent,'uwu'));    
        }else{
            message.channel.send(owoify(newcontent,'uvu')); 
        }
  }
}
}

