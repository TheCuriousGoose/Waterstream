exports.run = (client, message, args) => {
  
  if(!args[0]){
    message.channel.send('Please provide a valid user you want to hug');
  /*}else if(args[1]){
    message.channel.send('Too many arguments');*/
  }else{
    const user = message.mentions.users.first();
    if(!message.guild.member(message.mentions.users.first())){
      message.channel.send('Please provide a valid user to hug');
    }else{
      message.channel.send(`*hugs* (੭ु｡╹▿╹｡)੭ु⁾⁾  ${user} was hugged by ${message.author.username} !! 💕❤️`)
    }
  }
}