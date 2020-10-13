/*충돌체크용 박스객체 정의*/
class Box{
    constructor(bg,x,y){
        this.div = document.createElement("div");
        this.bg=bg;
        this.x=x;
        this.y=y;
        this.width=100;
        this.height=100;

        this.div.style.background=this.bg;
        this.div.style.position="absolute";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"Px";

        this.div.style.color="white";

        document.body.appendChild(this.div);
    }
}