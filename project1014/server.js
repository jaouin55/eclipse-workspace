//멥서버구축하기
//모듈 : 기능을 모아놓은 자바스크립트 파일 (확장자 : js)
var http = require("http"); //http내부 모듈 가져오기
var url = require("url"); //url 분석 모듈
var fs = require("fs"); // file system 모듈 (파일읽기,쓰기)

//서버 객체 생성
var server = http.createServer(function(request , response){
    // 1xx (정보): 요청을 받았으며 프로세스를 계속한다
    // 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다
    // 3xx (리다이렉션): 요청 완료를 위해 추가 작업 조치가 필요하다
    // 4xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다
// 5xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패했다

//클라이언트가 원하는 요청을 처리하려면 , URL분석을 하여 URI추출해서 조건을 따져보자
var urlJson = url.parse(Request.url); //분석결과를 json으로 반환
console.log("URL 분석 결과는",urlJson); 
   
if(urlJson.pathname=="/"){
       fs.readFile("./index.html","utf-8",function(error , data){
           if(error){
                console.log("index.html읽기 실패",error); 
           }else{
                response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                response.end(data);
           }
        });
}else if(urlJson.pathname=="/member/registForm"){
    fs.readFile("./registForm.html","utf-8",function(error , data){
        if(error){
             console.log("registForm.html읽기 실패",error); 
        }else{
             response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
             response.end(data);
        }
     });
}else if(urlJson.pathname=="/member/loginForm"){
    fs.readFile("./loginForm.html","utf-8",function(error , data){
        if(error){
             console.log("loginForm.html읽기 실패",error); 
        }else{
             response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
             response.end(data);
        }
     });
   }else if(urlJson.pathname=="/member/regist"){
        //mysql 에 insert
        
   }
});

//서버가동
server.listen(7878 , function(){
    console.log("My Server is running at 7878 port...");
});

