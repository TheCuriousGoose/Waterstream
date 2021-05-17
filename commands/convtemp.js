exports.run = (client, message, args) => {
  if(!args[0]){
    message.channel.send('Please provide the needed arguments for this command');
  }else if(args[3]){
    message.channel.send('Too many arguments');
  }else{
    if(args[0] === 'c' && args[1] === 'f'){
      var temp = args[2]
      if(!isNumeric(temp)) return message.channel.send('Please provide a number as temperature');

      var convertedtemp = (temp*9/5)+32;
      
      message.channel.send(`**${temp}** degrees Celsius is **${Math.round(convertedtemp)}** degrees in Fahrenheit`)

    }else if(args[0] === 'f' && args[1] === 'c'){
      var temp = args[2]
      if(!isNumeric(temp)) return message.channel.send('Please provide a number as temperature');

      var convertedtemp = (temp-32)*5/9;
      
      message.channel.send(`**${temp}** degrees Fahrenheit is **${Math.round(convertedtemp)}** degrees in Celsius`)

    }else{
      message.channel.send("Usage of convtemp: `?convtemp (c or f) (c or f) (temperature)`")
    }
  }
  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
}