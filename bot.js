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
	
	frases=[" oni-chan Despierta!!!",
			" tu dia sera algo rudo , sera como montar el lomo de un tigre atravez del ojo de un huracan",
			" error en el servidor, intentalo mas tarde",
			" haz intentado tomar cloro",
			" hoy no es buen dia para ti",
			" probablemente encuentres el amor, probablemente",
			" Ponte vergas morr@ ponte vergas",
			" do u know da wae",
			" ella no te ama",
			" quien te gusta ya es naranja de otro moviento",
			" y acaso crees que  a mi me importa tu vida",
			" que me preguntas a mi , preguntale a yubarta",
	       		" que haces aqui preguntandole a una bola tu vida , sal y haz algo productivo , gordo"]
	noFrase=frases.length;
	var random = Math.floor(Math.random()*noFrase);
	frase=frases[random];
	return frase;

}
