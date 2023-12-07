// Console Log

console.log('logging...');
console.clear();

// log level
console.log('log'); // 개발할 때 
console.info('info'); // 중요한 정보에 대해 남길 때 
console.warn('warn'); // 경보 단계일 때 
console.error('error'); // 치명적인 에러가 발생했을 때, 사용자 에러, 시스템 에러

// assert: 특정 조건 만족할 때만 출력하고 싶을 때(false일 때만 출력)
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 }); // option 사용 가능

// measuring time: 성능을 확인할 때 등
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting: 함수가 예상 횟수만큼 호출이 되었는지 확인 가능
function a() {
  console.count('a function');
}
a();
console.countReset('a function'); // 카운트 초기화 
a();
a();

// trace: 누가 이 함수를 호출했는지 확인 (디버깅 할 때 유용)
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();