const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  console.log('request to loyalty : ' + new Date().toString());
	
  try {
	console.log(event);
    
    var data = {loyalty:'10'};
	var auth = event.headers.authorization;
	var token = auth.substring('Bearer '.length);
	if(token.indexOf('a6') == -1) {
		return { statusCode: 401, headers : {
		  'Content-Type':'application/json'
	  },body: JSON.stringify({ error: 'Failed to authenticate' }) };
	}
	return { statusCode: 200, headers : {
		  'Content-Type':'application/json'
	  },body: JSON.stringify(data) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
	  headers : {
		  'Content-Type':'application/json'
	  },
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
