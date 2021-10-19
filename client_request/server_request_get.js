var http = require('http');

var server = http.createServer(function(request,response){
    // 1. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 2. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var url = new URL(request.url, `http://${request.headers.host}/`);
    console.log(url);
    // 3. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var query = new URLSearchParams(url.search);
    console.log(query);
    // 4. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'}); // 인코딩
    response.end('var1의 값은 ' + query);
});

server.listen(8080, function(){
    console.log('Server is running...');
});

// 결과: 

// --- log start ---
// URL {
//   href: 'http://localhost:8080/?var1=newData&var2=153&var3=testdata2017',
//   origin: 'http://localhost:8080',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'localhost:8080',
//   hostname: 'localhost',
//   port: '8080',
//   pathname: '/',
//   search: '?var1=newData&var2=153&var3=testdata2017',
//   searchParams: URLSearchParams { 'var1' => 'newData', 'var2' => '153', 'var3' => 'testdata2017' },
//   hash: ''
// }
// URLSearchParams { 'var1' => 'newData', 'var2' => '153', 'var3' => 'testdata2017' }
// --- log end ---