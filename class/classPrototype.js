function Clazz(msg){
    this.name = 'I am Class';
    this.message = msg;

    message2 = "find me!";
}
//Clazz 객체의 prototype 을 가져와서 message값을 리턴하는 함수를 하나 추가한다.
Clazz.prototype.getMessage = function(){
    return this.message;
}

Clazz.prototype.getMessage2 = function(){
    return this.message2;
}

// 객체를 생성
var myClazz = new Clazz('good to see u!');
console.log('getMessage: ' + myClazz.getMessage());
console.log('getMessage2: ' + myClazz.getMessage2()); // this 로 선언되지 않은 변수는 prototype으로 추가한 함수에서는 참조할 수 없음