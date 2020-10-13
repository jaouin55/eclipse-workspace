/*아래 코드 단위는 사물 자체가 아니라,
장차 사물을 대량으로 생산할 수 있는 틀
그리고 전산 분야에서는 이 틀을 가리켜 클래스라 부른다.

ex ) 붕어빵(instance) - 붕어빵 형판(class)*/

/*객체 지향 프로그래밍 언어
객체지향이란 ? 객체중심적 사고방식으로 접근해야 한다*/

class Arrow{
    //클래스 안에 선언된 변수는 이 클래스 소속이 되므로 변수명 앞에 var가 아닌 this가 와야한다.
    //ES(ECMAScript(정식명칭))에 발표된 js에 의해서 클래스가 소유한 변수는 무조건
    //constructor()라는 생성자 함수에 넣어둬야 한다(그냥외워요!)
constructor(){
    this.arrow;
    this.stepX=10;
}
//함수부분도 function(함수)은 없애주고 변수명만 메서드로 만들어주면된다.
//클래스 안에 선언된 , 즉 클래스가 보유한 함수는 해당 사물의 동작방법을 결정짓는다 하여
//메서드라고 한다..method(방법)
createArrow(x,y){ //객체지향이기 때문에 안쪽 변수로 선언된 애들에도 this를 붙여야한다!
    this.arrow = document.createElement("span");
    this.arrow.innerText="▶";
    this.arrow.style.position="absolute";
    this.arrow.style.left=x+"px";
    this.arrow.style.top=y+"px";
    this.arrow.style.color="red";
    this.arrow.style.fontSize="30px";

    document.body.appendChild(this.arrow);
}
move(){
    this.arrow.style.left=parseInt(this.arrow.style.left)+this.stepX+"px";
    }
}
 /*new 연산자는 클래스로부터 객체의 인스턴스를 새성할때 사용하는 연산자이며,
    new연산자 뒤에 오는 클래스명() 메서드를 가리켜 ,생성자 메서드라 한다.
    위 코드에서 new Arrow()라는 것은 사실 new constructor()메서드를 호출한 것이다.
    또 constructor() 라는 명칭은 이미 정해진 것이기 떄문에 다른 명칭을 사용하면 에러난다.*/