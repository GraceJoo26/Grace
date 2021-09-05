/* let myName = "Grace";
let email = 'gracejoo26@gmail.com';
let hello = `Hello ${myName}?!`//보관법
console.log(myName);
console.log(email);
console.log(hello);
 */



/* const info = {
  name:'grace',
  age:31,
  getName : function(){
    return this.name;
  }
};
const hisName = info.getName();
console.log(hisName);
console.log(info.getName());


const name = {
  name :'kihwa',
  age:61,
  getName : function(){
    return this.name;
  }
}
const herName = name.getName();
console.log(herName);
console.log(name.getName());


const name02 = {
  name:'youngMyung',
  age:62,
  getAge:function(){
    return this.age;
  }
}
const hisAge = name02.getAge();
console.log(hisAge);
console.log(name02.getAge()); */


//chap09-06 예문

/* let boxEl = document.querySelector('.box');

console.log(boxEl);
boxEl.addEventListener('click',function(){
  console.log('Click!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
}); */



//chap09-07예문

/* const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function ( boxEl , index ){
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
}); */

/* const boxEl = document.querySelector('.box');

console.log(boxEl.textContent); //getter

boxEl.textContent = "HEROPY!!";
console.log(boxEl.textContent); //setter */


const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');//searchInputEl에 placeholder라는 html 속성을 넣는다 
});

searchInputEl.addEventListener('blur',function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ' ');//searchInputEl에 placeholder라는 html 속성을 넣는다 
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap.to(요소, 지속시간, 옵션=>css속성 넣을 수 있다.);
      gsap.to(badgeEl, .6, {
        opacity : 0,
        display : 'none'  
      });
    }else {
      // 배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, .6, {
        opacity : 1,
        display : 'block'
    });
    }
  },300));
//_.throttle=>scroll event일때 많은 횟수에 걸쳐 실행되지 않도록 control함
//_.throttle(함수, 시간)
//opacity 속성처럼 값을 숫자로 입력하는 속성들은, 전환효과 (translation 속성이나 gsap 라이브러리등)를 통해 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만, display속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환효과를 적용 할 수 없습니다.


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션=>css속성 넣을 수 있다.);
  gsap.to( fadeEl , 1 , {
    delay : ( index + 1 ) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity : 1
  });
});
//오.. 그냥 index만 치면 되는군.