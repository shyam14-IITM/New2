let gameSeq=[];
let userSeq=[];
let outer=document.querySelector('.outer');
let boxes=document.querySelectorAll('.box');
let h3=document.querySelector('h3');
let b;

let started=false;
let level=0;
document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        console.log("Game Started");

        levelUp();
    }

})
function levelUp(){
    level++;
    h3.innerText=`Level ${level}`;

    let rndmInt= Math.floor(Math.random()*4)
    flash(boxes[rndmInt]);
    gameSeq.push(boxes[rndmInt]);
    // console.log("gameSeq ",gameSeq);
    console.log(userSeq);
    console.log(gameSeq);

    userSeq=[];
}

function flash(box){
    let color=box.style.backgroundColor;
    box.style.backgroundColor='white';
    setTimeout(()=>{box.style.backgroundColor=color;},250);

}


function check(idx){
    
        if(gameSeq[idx]===userSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelUp,1000)
            }
        }
        else{
            
            h3.innerHTML="<h3 style= 'color:red;'> Game over ! Press any key to start again</h3>";
            started=false;
            level=0;
            gameSeq=[]; userSeq=[];
        }
        
}

// for(box of boxes){
//     outer.addEventListener('click',function(event){
        
        
//         userSeq.push[event.target];
//         if(check){
//             flash(event.target)
//             levelUp();
//         }
//         else{
//             h3.innerText="Game Over";

//         }
// })
for(box of boxes)
{
    box.addEventListener('click',function(){

        
        if(started==false){
        started=true;
        console.log("Game Started");

        levelUp();
    }
        else{
            userSeq.push(this);
            flash(this);
        
            check(userSeq.length-1);
        }

    })

    

}
        
    // })
// }

   
//     // {
//     //     if(h3.innertext=="Press any key to start the game"){
//     //         console.log('ok')
//     //         h3.innertext='Game Started';
//     //     }        
//     // })    
//     box.addEventListener('click',function(){
//         if(start==false){
//             h3.innerText='Game Started';
//             start=true;
//             console.log(start);
//         }
//         if(start==true){
//             console.log(start);
//             let n=Math.floor((Math.random()*4));
//             // console.log(boxes[n]);
//             boxes[n].;

//         }

//     })


//     let color=box.style.backgroundColor;
//     box.addEventListener('mousedown',function(){
//         // console.log("mouse");
//         // let color=box.style.backgroundColor;
//         this.style.backgroundColor='white';
        
//     })
//     box.addEventListener('mouseup',function(){
//         this.style.backgroundColor=color;
//     })

// }



