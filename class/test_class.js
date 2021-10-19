//class의 선언 - 카멜표기법으로 첫번째 글자를 대문자로 함수를 하나 선언한다.
function Class(msg){
    // 변수를 객체의 멤버로 사용하기 위해 this 예약어를 사용해서 정의한다.
    this.name = 'I am Class';
    this.message = msg;

    message2 = "find me!"; // this를 사용하지 않은 변수
    // 멤버함수 선언
    this.printMessage2 = function(){
        console.log(message2);
    };
}

var myClass = new Class('good to see u!'); // 객체를 생성
console.log('name: ' + myClass.name);
console.log('message: ' + myClass.message);
console.log('message2: ' + myClass.message2); // this를 사용하지 않은 message2 변수는 외부에서 참조할 수 없다.
myClass.printMessage2(); // this로 선언된 함수를 통해 사용할 수 있다.