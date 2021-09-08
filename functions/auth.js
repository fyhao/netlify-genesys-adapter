const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  console.log('request to auth : ' + new Date().toString());
  try {
    var data = {access_token:'a7' + new Date().getTime()};
	
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

//https://mystifying-hodgkin-8fdfaa.netlify.app/.netlify/functions/auth
//https://mystifying-hodgkin-8fdfaa.netlify.app/.netlify/functions/loyalty