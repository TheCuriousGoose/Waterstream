var search = require('youtube-search');

exports.run = (client, message, args) => {
    if(args[0] = 'play'){
        let msg = message.content.toLowerCase();
        let searchterm = msg.replace(`${client.config.prefix}yt `,'');

        var opts = {
            maxResults: 1,
            key: client.config.youtubekey
          };

        search(`${searchterm}`, opts, function(err, results) {
            if(err) return console.log(err);


            message.channel.send(`${results[0].title}: ${results[0].link}`)
        });
          
    }
}