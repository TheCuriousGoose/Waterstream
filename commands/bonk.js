const cooldown = new Set();

exports.run = (client, message, args) => {
  


  if(cooldown.has(message.member.id)) return message.channel.send('You are on the bonk command cooldown');

  if(!args[0]){
    message.channel.send('Please provide a valid user you want to bonk');
  }else{
    const user = message.mentions.users.first();
    if(!message.guild.member(message.mentions.users.first())){
      message.channel.send('Please provide a valid user to bonk');
    }else{
      
      cooldown.add(message.member.id);
      try{
        user.send('<:baseballbat:842088794776797224>');
        user.send('You have been bonked');
        message.channel.send(`${user} has been bonked`)
      }catch{
        return console.log('Failed to dm ' + user);
      }


      setTimeout(() => {
        cooldown.delete(message.member.id)
      }, 300*1000)
    }
  }
}