var express = require('express');
var http = require('http');
var serveStatic = require('serve-static');      //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할
var path = require('path');
 
var app = express();      //express 서버 객체
 
app.set('port', 8080);
 
 
//미들웨어들 등록 시작, 아래 미들웨어들은 내부적으로 next() 가 실행됨
 
//join은 __dirname : 현재 .js 파일의 path 와 public 을 합친다
//이렇게 경로를 세팅하면 public 폴더 안에 있는것을 곧바로 쓸수 있게된다
app.use(serveStatic(path.join(__dirname, 'public')));
 
 
//post 방식일 경우 begin
//post의 방식은 url에 추가하는 방식이 아니고 body라는 곳에 추가하여 전송하는 방식
app.use(express.urlencoded({ extended:false }));            // post 방식 세팅
app.use(express.json());                                     // json 사용하는 경우의 세팅
//post 방식일 경우 end
 
 
//사용자 정의형태로 미들웨어를 제작
app.use(
    function (req, res, next) {
        console.log('middle wared was called : first');
        //res.redirect('http://google.co.kr');
 
        //req는 여러 정보를 얻어올 수 있는데 그 중
        //요청받은 request 정보 중에서 User-Agent 정보를 따로 분리하여 가져올 수 있다
        var userAgent = req.header('User-Agent');
 
        //요청파라미터는 get 방식인 req.query 에 들어오게 된다
        //post 방식은 body로 들어오게 된다
        //name은 정해져있는 명칭
 
        var paramName = req.body.id || req.query.id;
        var paramNamePW = req.body.passwords || req.query.passwords;
 
        //응답 보내기
        res.send('<h3>response from server!!!! : ' + userAgent + '[' + paramName + ' : ' + paramNamePW  + '] </h3>');
    }
);
 
 
//웹서버를 app 기반으로 생성
var appServer = http.createServer(app);
appServer.listen(app.get('port'),
    function () {
        console.log('express 웹서버 실행' + app.get('port'));
    }
);