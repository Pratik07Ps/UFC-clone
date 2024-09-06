function slide(num){

    const ele=document.getElementById("line");
    // ele.style.backgroundColor="#000";
    
     if(num===0){
         ele.style.transform="translateX(10px)";
        ele.style.width="50px";
        ele.style.transition = "all 0.9s";
    }
        
    else if(num===1){
        ele.style.transform="translateX(-527px)";
        ele.style.width="43px";
        ele.style.transition = "all 0.9s";

    }
    else if(num===2){
        ele.style.transform="translateX(-393px)";
        ele.style.width="50px";
        ele.style.transition = "all 0.9s";
        
    }
    else if(num===3){
        ele.style.transform="translateX(-257px)";
        ele.style.width="60px";
        ele.style.transition = "all 0.9s";

    }
    else if(num===4){
        ele.style.transform="translateX(557px)";
        ele.style.width="40px";
        ele.style.transition = "all 0.9s";


    }

}

function slideBack(num){
    const ele=document.getElementById("line");
    // ele.style.backgroundColor="#000";
     if(num===0){
         ele.style.transform="translateX(0px)";
        ele.style.width="30px";
        ele.style.transition = "all 0.9s";

    }
   
    else  if(num===1){
        ele.style.transform="translateX(0px)";
        ele.style.width="30px";
        
        ele.style.transition = "all 0.9s";
    }
    else if(num===2){
        ele.style.transform="translateX(0px)";
        ele.style.width="30px";
        ele.style.transition = "all 0.9s";
        
    }
    else if(num===3){
        ele.style.transform="translateX(0px)";
        ele.style.width="30px";
        ele.style.transition = "all 0.9s";

    }
    else if(num===4){
        ele.style.transform="translateX(0px)";
        ele.style.width="30px";
        ele.style.transition = "all 0.9s";

    }
}
