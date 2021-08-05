const fetch = require("node-fetch");

exports.handler = async function (event, context) {
	
  try {
    var data = {d:new Date().toString()};
	  
	return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
