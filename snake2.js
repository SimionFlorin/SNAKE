var Score=0;
//Gameboard[5][5]=1;
Snake=[];
class Position {
    constructor(orizontal,vertical) {
        this.orizontal = orizontal;
        this.vertical = vertical;
        this.prevVertical=vertical;
        this.prevOrizontal=orizontal;
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
    console.log(Snake.length)
    //for(let i=0;i<Snake.length;i++) {
    o=Snake[0].orizontal;v=Snake[0].vertical;
    futureO=o;futureV=v;

    if(directie==='north'){
        futureV=Snake[0].vertical - 1;
    }
    if(directie==='south') {
        futureV=Snake[0].vertical + 1;
    }
    if(directie==='east') {
        futureO= Snake[0].orizontal - 1;
    }
    if(directie==='west') {
        futureO=Snake[0].orizontal + 1;
    }
    //window.alert(i)
    let futureElem=document.getElementById(futureO*10+futureV).className;
    if(futureElem==="Fruit") {
        document.getElementById((futureO*10+futureV)).className = "Snake";
        //Redesenare(futureO, futureV);
        Score++;
        document.getElementById("score").innerText = "Score: " + Score;
        Snake[0].vertical = futureV;
        Snake[0].orizontal = futureO;
        let i = 1
        while ( i < Snake.length) {
            Snake[i].prevVertical = Snake[i].vertical;
            Snake[i].prevOrizontal = Snake[i].orizontal;
            Snake[i].orizontal = Snake[i - 1].prevOrizontal;
            Snake[i].vertical = Snake[i - 1].prevVertical;

            i++;
        }

        Snake[Snake.length]=new Position(Snake[i-1].prevOrizontal,Snake[i-1].prevVertical);
        //orizontal=futureO;
        //Snake[i+1].vertical=futureV;

        Apple();

    }
    else{
        if(Snake.length===1){
            document.getElementById((o*10+v)).className="Empty"
            Redesenare()//(o,v);
        }
        Snake[0].orizontal=futureO;
        Snake[0].vertical=futureV;
        document.getElementById(futureO*10+futureV).className="Snake";
        Redesenare()//(futureO,futureV);
        let i=1;
        while(i<Snake.length){
            //window.alert(i);
            if(i===Snake.length-1)
            { document.getElementById((Snake[i].orizontal*10+Snake[i].vertical)).className="Empty";}
                Redesenare()//(Snake[i].orizontal,Snake[i].vertical);}
            Snake[i].orizontal=Snake[i-1].prevOrizontal;
            Snake[i].vertical=Snake[i-1].prevVertical;
            Snake[i-1].prevVertical=Snake[i-1].vertical;
            Snake[i-1].prevOrizontal=Snake[i-1].orizontal;
            i++;

        }
    }
    Snake[0].prevVertical=Snake[0].vertical;
    Snake[0].prevOrizontal=Snake[0].orizontal;

}
function Apple() {
    let orizontal=parseInt(Math.random()*10);
    let vertical=parseInt(Math.random()*10);
    let coordonate=orizontal*10+vertical;
    document.getElementById(coordonate).className="Fruit";
   Redesenare()//(orizontal,vertical);
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
            celula.style.backgroundColor="grey";
            celula.id=j*10+i;
            celula.className="Empty"
        }
    }
    let primul=document.getElementById(55)
    primul.style.backgroundColor="black";
    primul.className="Snake";

}
//
Draw();


function Redesenare() {
    for(let o=0;o<10;o++)
        for(let v=0;v<10;v++)
        {
            let celula = document.getElementById(o * 10 + v);
            if (document.getElementById((o*10+v)).className === "Empty")
                celula.style.backgroundColor = 'grey'
            if (document.getElementById((o*10+v)).className==="Snake")
                celula.style.backgroundColor = "black";
            if (document.getElementById((o*10+v)).className==="Fruit")
                celula.style.backgroundColor = "green";
        }

}
function start() {
    setInterval(function () {
        miscare(directie);
    }, 1000);
}
Apple();


