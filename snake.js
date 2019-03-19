
var Gameboard=[];
for(var i=0;i<10;i++)
{
    Gameboard[i]=[];
    for(var j=0;j<10;j++)
    {
        Gameboard[i][j]=0;
    }
}
var Score=0;
Gameboard[5][5]=1;
Snake=[];
class Position {
    constructor(orizontal,vertical) {
        this.orizontal = orizontal;
        this.vertical = vertical;
    }
}
Snake[0]=new Position(5,5);
var directie="west";
document.addEventListener("keyup",function(event)
{
    if(event.which===87||event.which===38)
        directie="north";
    if(event.which===83||event.which===40)
        directie="south";
    if(event.which===65||event.which===37)
        directie="east";
    if(event.which===39||event.which===68)
        directie="west";
})


function miscare (directie) {
    var o;var futureO;
    var v;var futureV;
    let i=0;
    console.log(Snake.length)
        //for(let i=0;i<Snake.length;i++) {
            o=Snake[i].orizontal;v=Snake[i].vertical;
            futureO=o;futureV=v;

            if(directie==='north'){
                    futureV=Snake[i].vertical - 1;
            }
            if(directie==='south') {
                    futureV=Snake[i].vertical + 1;
                }
            if(directie==='east') {
                   futureO= Snake[i].orizontal - 1;
                }
            if(directie==='west') {
                    futureO=Snake[i].orizontal + 1;
            }

            if(Gameboard[futureO][futureV]===2)
            {
                Gameboard[futureO][futureV] = 1;
                Redesenare(futureO,futureV);
                Score++;
                document.getElementById("score").innerText="Score: "+Score;
                Snake[i].vertical=futureV;
                Snake[i].orizontal=futureO;
                Snake[Snake.length]=(new Position(o,v));
                //orizontal=futureO;
                //Snake[i+1].vertical=futureV;

                Apple();

            }
            else{
                if(Snake.length===1){
                    Gameboard[o][v] = 0;
                    Redesenare(o,v);
                }
                Snake[i].orizontal=futureO;
                Snake[i].vertical=futureV;
                Gameboard[futureO][futureV] = 1;
                Redesenare(futureO,futureV);
                for(i=1;i<Snake.length;i++){
                    Snake[i].orizontal=Snake[i-1].orizontal;
                    Snake[i].vertical=Snake[i-1].vertical;
                    if(i===Snake.length-1)
                    { Gameboard[Snake[i].orizontal][Snake[i].orizontal]=0;
                    Redesenare(Snake[i].orizontal,Snake[i].vertical);}
                }
            }

}
function Apple() {
    let orizontal=parseInt(Math.random()*10);
    let vertical=parseInt(Math.random()*10);
    Gameboard[orizontal][vertical]=2;
    Redesenare(orizontal,vertical);
}

function Draw() {
    var table=document.createElement("TABLE");
    var bodyElem=document.getElementById("as");
    bodyElem.appendChild(table);
    table.id="GameTable"
    table.style.width="300px";
    //table.style.borderColor="black";
    //table.style.borderWidth='medium'
   // table.style.borderBottom="20px black"


    //table.height="80%";
    for(var i=0;i<10;i++)
    {
        var randCurent=document.createElement("TR")
        table.appendChild(randCurent);
        randCurent.style.height="30px";


        for(var j=0;j<10;j++)
        {
            let celula=document.createElement("TD");

            randCurent.appendChild(celula);
           // celula.innerText="sdf";
            celula.style.backgroundColor="blue";


            celula.id=i*10+j;
        }
    }
    document.getElementById(55).style.backgroundColor="black";

}
//
Draw();
 for(x of Gameboard){
     console.log(x);
 }

 function Redesenare(o,v) {
     let celula = document.getElementById(v * 10 + o);
     if (Gameboard[o][v] === 0)
         celula.style.backgroundColor = 'white';
     if (Gameboard[o][v] === 1)
         celula.style.backgroundColor = "black";
     if (Gameboard[o][v] === 2)
         celula.style.backgroundColor = "yellow";
 }
function start() {
    setInterval(function () {
        miscare(directie);
    }, 1000);
}
Apple();



