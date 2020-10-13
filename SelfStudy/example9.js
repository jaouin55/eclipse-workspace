var req = new XMLHttpRequest();
req.open("GET" , "./example9.json");
req.onreadystatechange = function(){
    if ( this.readyState == 4){
        console.log(this.response);
    }
}
req.send();