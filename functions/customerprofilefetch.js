const fetch = require("node-fetch");

exports.handler = async function (event, context) {
	
  try {
    var data = {status:0,d:new Date().toString()};
	var nric = event.queryStringParameters.nric;
	data.nric = nric;
	if(nric == '1234') {
		data.customername = 'Alice';
		data.customertype = 'Gold';
	}
	else if(nric == '2345') {
		data.customername = 'Bob';
		data.customertype = 'Silver';
	}
	else {
		data.status = 100;
	}
	return { statusCode: 200, body: JSON.stringify(data) };
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
