var http = require('http');
var fs = require('fs');
var url = require(`url`);

var app = http.createServer(function(request,response){
    var _url = request.url;
	var queryData = url.parse(_url, true).query;
	console.log(queryData.id)
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
	// 아래 코드에 어떤 코드를 넣느냐따라 사용자에게 전송하는데이터가 달라진다
	// 프로그래밍적으로 상용자에게 전달하 ``데이터를 생성한다.``
    response.end(queryData.id);
	// 파일들을 읽어주느 부분

});
app.listen(3000);
