const fetch = require("node-fetch");

exports.handler = async function (event, context) {
	
  try {
    var html = `
	<html>
		<head>
			<title>Screenpop</title>
		</head>
		<body>
		 Demo screen pop
		</body>
	</html>
	`;
	return {
      statusCode: 200,
	  headers : {
		  'Content-Type':'text/html'
	  },
      body: html,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
	  headers : {
		  'Content-Type':'text/html'
	  },
      body: html,
    };
  }
};
