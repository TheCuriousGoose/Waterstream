var search = require('youtube-search');

exports.run = (client, message, args) => {
    if(args[0] = 'play'){
        let msg = message.content.toLowerCase();
        let searchterm = msg.replace('alexa play ','');

        var opts = {
            maxResults: 1,
            key: client.config.youtubekey
          };

        search(`${searchterm}`, opts, function(err, results) {
            if(err) return console.log(err);

            let uploaddate = results[0].publishedAt.split('T')[0]
            let uploadtime = results[0].publishedAt.split('T')[1]

            message.channel.send(`${results[0].title} - ${results[0].link} (Channel: ${results[0].channelTitle}, Uploaded on: ${uploaddate} at ${uploadtime.replace('Z','')})`)
        });
          
    }
}