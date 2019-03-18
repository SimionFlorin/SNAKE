var Gameboard=[];
for(var i=0;i<10;i++)
{
    Gameboard[i]=[];
    for(var j=0;j<10;j++)
    {
        Gameboard[i][j]=0;
    }
}
Gameboard[5][5]=1;
Snake=[];
 Position =function(o,v) {
 var orizontal=o;
 var vertical=v;
}
Snake.push(new Position(5,5))
/* original
function miscare (directie) {
     var o;
     var v;
	if(directie==='north')
	    for(i in Snake.length) {
	        o=Snake.get(i).orizontal;v=Snake.get(i).vertical
            Gameboard[o][v] = 0;
	        Redesenare(o,v);
            Snake.get(i).vertical += 1;
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
        }
	if(directie==='south')
        for(i in Snake.length) {
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 0;
            Snake.get(i).vertical -= 1;
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
        }
    if(directie==='east')
        for(i in Snake.length) {
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 0;
            Snake.get(i).orizontal -= 1;
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
        }
    if(directie==='west')
        for(i in Snake.length) {
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 0;
            Snake.get(i).orizontal += 1;
            Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
        }
}
*/
function miscare (directie) {
    var o;
    var v;

        for(i in Snake.length) {
            o=Snake.get(i).orizontal;v=Snake.get(i).vertical;
            if(directie==='north'){
                    Gameboard[o][v] = 0;
                    Redesenare(o,v);
                    Snake.get(i).vertical += 1;
                    Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;

            }
            if(directie==='south')
            {
                    Gameboard[o][v] = 0;
                    Redesenare[o,v];
                    Snake.get(i).vertical -= 1;
                    Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
                }
            if(directie==='east')
            {
                    Gameboard[o][v] = 0;
                    Redesenare[o][v];
                    Snake.get(i).orizontal -= 1;
                    Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
                }
            if(directie==='west')
            {
                    Gameboard[o][v] = 0;
                    Redesenare[o][v];
                    Snake.get(i).orizontal += 1;
                    Gameboard[Snake.get(i).orizontal][Snake.get(i).vertical] = 1;
                }
            Redesenare([Snake.get(i).orizontal],[Snake.get(i).vertical]);
        }
}

function Draw() {
    var table=document.createElement("TABLE");
    var bodyElem=document.getElementById("as");
    bodyElem.appendChild(table);
    table.id="GameTable"
    table.style.width="300px";
    table.style.borderColor="black";
    table.style.borderWidth='medium'
    table.style.borderBottom="20px black"


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

}
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
     if (Gameboard[o][v])
         celula.style.backgroundColor = "yellow";
 }


