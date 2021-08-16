// this is modified code from ./hug.js

exports.run = (client, message, args) => {
  
  if(!args[0]){
    message.channel.send('Please provide a valid user you want to boop or use !boop everyone to give everyone a boopy boop');
  /*}else if(args[1]){
    message.channel.send('Too many arguments');*/
  }else if(args[0] === 'everyone'){
	   message.channel.send(`*boops* ${message.author.username} booped everyone!! 💕❤️`)
	   return;
  }else{
    const user = message.mentions.users.first();
    if(!message.guild.member(message.mentions.users.first())){
      message.channel.send('Please provide a valid user to boop');
	  return;
    }else{
      message.channel.send(`*boops* ${user} was booped by ${message.author.username} !! 💕❤️`)
	  return;
    }
  }
}
