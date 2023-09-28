
let result = document.getElementById('result');
let result2=  document.getElementById('result2');

function display(){
let buttons =document.getElementsByTagName('button');
    for(i=0;i<buttons.length;i++){
        buttons[i].onclick = function(){
            let input = this.innerText;
            updateDisplay(input)
            
        }
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
            result.innerText=""
            result.innerText=input
        }
        
    }
else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.slice(0,-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
            result2.innerText += " " +result.innerText 
        }
    }

}








