class Thumbnail{
    constructor(container , width , height , bd , src , x){
        this.container=container; 
        this.div= document.createElement("div");
        this.width=width;
        this.height=height;
        this.bd=bd; //보더두께
        this.img = document.createElement("img");
        this.src=src;
        this.x=x;
        var me=this;
        
        //스타일부여
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid blue";
        this.div.style.boxSizing="border-box";
        this.img.src=this.src;
        this.img.style.width=(this.width-(bd*2))+"px";
        this.img.style.height=(this.height-(bd*2))+"px";

        //이미지 이벤트 구현
        this.img.addEventListener("click",function(){
            getDetail(this.src);

        //현재 객체의 인덱스 확인
        var index=thumbArray.indexOf(me);
        console.log(index);
        getDetail(index);
        });
    

        //조립
        this.div.appendChild(this.img);
        this.container.appendChild(this.div);

    }
}