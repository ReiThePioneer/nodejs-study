// global 객체

// browser용인지 node용인지 알려주기 위해 node module import
const fs = require('fs');

console.log(global);

// global이라는 전역 객체에 hello라는 함수 정의
global.hello = () => {
  global.console.log('hello');
}

// global은 생략 가능함
global.hello();
hello();