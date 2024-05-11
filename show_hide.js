
    document.getElementById('mybtn').addEventListener('click',function(){
        var hello=document.getElementById('show-more');
        if(hello.style.display==  "block"){
            hello.style.display="none";
        }
        else{
            hello.style.display="block";
        }
        
    });