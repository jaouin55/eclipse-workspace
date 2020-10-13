/*비행기 정의 */
//--this 가 붙은 것들은 해당 instance마다 함께 생명력을 같이한다.
//--비행기가 여러개여도 instance마다 고유하게 보유할 수 있는 크기 ,높이는 각각 다르게 가질 수 있다

class Hero{
    //주인공이 태어날 떄 , 어떠한 초기화작업을 진행할지 결정짓는 메서드
    //생성자 메서드라 부른다.
    //아래의 생성자함수를 호출하는 자는 , 반드시 주인공 이미지가 붙게 될
    //부모 요소를 전달해야 한다 . 즉, container 변수값을 결정지어야 한다.
    constructor(container,x,y,width,height){
        this.x = x; //중괄호가 끝나기 전 x가 소멸 전에 this.x에 보관
        this.y = y;
        this.img=document.createElement("img");
        this.img.src="../img/shooting/plane.png";
        this.img.style.position="absolute";
        this.img.style.left=x+"px";
        this.img.style.top=y+"px";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";

        //부모요소에 Hero를 부착
        container.appendChild(this.img);
        

    
    }
    //비행기 동작방식 결정짓는 메서드
    move(){



    }
}