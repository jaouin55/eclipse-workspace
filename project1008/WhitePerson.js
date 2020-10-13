/*백인을 정의한다!!
2015 ECMA
*/
class WhitePerson{
    constructor(){
        //상태는 변수로 표현한다. 즉 속성(property)
        this.color="white";
        this.eye=2;
        this.arm=2;
    }
    //행동은 함수로 표현한다.(즉 메서드 )
    walk(){
        console.log("두발로 걸어요");
    }
    speak(){
        console.log("말을 해요");
    }
}