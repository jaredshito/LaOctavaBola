var Twit = require('twit');
var config = require('./config.js');


var T= new Twit(config);

var stream = T.stream('user');
stream.on('tweet',tweetEvent);

function tweetEvent(eventMsg){

	var replyto=eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;
	// If we want the conversation thread
  	var id = eventMsg.id_str;
	if (replyto === 'LaOctavaBola'){
		frase=Bringfrase();
		var newtweet = '@' + from + ' '+ frase + '.';


		T.post('statuses/update', { status: newtweet, in_reply_to_status_id: id},tweeted);


		function tweeted(err,data,response){
			if (err) {
        	console.log("algo esta mal");
        	console.log(err);
      		} else {
        		console.log("funciona");
			}
		}
	}

}




function Bringfrase(){
	
	frases=["deberias dejar de tomar coca",
		"la coca te va a matar anthony",
		"por que te haces tando daño a ti mismo consumiendo coca"
		//	]
	noFrase=frases.length;
	var random = Math.floor(Math.random()*noFrase);
	frase=frases[random];
	return frase;

}
