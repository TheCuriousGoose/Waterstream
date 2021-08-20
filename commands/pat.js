exports.run = (client, message, args) => {
  
  if(!args[0]){
    message.channel.send('Please provide a valid user you want to hug or use !hug everyone to give everyone a warm hug');
  /*}else if(args[1]){
    message.channel.send('Too many arguments');*/
  }else if(args[0] === 'everyone'){
	   message.channel.send(`*pats* OwO ${message.author.username} patted everyone!! <a:patchu:866162539686658058><a:patchu:866162539686658058>`)
	   return;
  }else{
    const user = message.mentions.users.first();
    if(!message.guild.member(message.mentions.users.first())){
      message.channel.send('Please provide a valid user to hug');
	  return;
    }else{
      message.channel.send(`*pats* UwU  ${user} was patted by ${message.author.username} !! <a:patchu:866162539686658058>`)
	  return;
    }
  }
}

//866162539686658058