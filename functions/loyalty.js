const fetch = require("node-fetch");

exports.handler = async function (event, context) {
	
  try {
	console.log(event);
    var data = {loyalty:'10'};
	
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
