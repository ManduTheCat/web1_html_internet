var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
	// 아래 코드에 어떤 코드를 넣느냐따라 사용자에게 전송하는데이터가 달라진다
	// 프로그래밍적으로 상용자에게 전달하 ``데이터를 생성한다.``
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
