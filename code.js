
window.onload=init;

function init()
{
    console.log("window has loaded");
    character.hairhead="default",
    character.hairback="default",
    character.hairbangs="default",
    character.top="default",
    character.upperarms="default",
    character.hands="default",
    character.bottoms="default",
    character.feet="default",
    character.accessoryhead="default",
    character.accessoryneck="default",
    character.accessoryback="default",
    character.accessorytitle="default",
    
}

var character = {
    hairhead:"default",
    hairback:"default",
    hairbangs:"default",
    top:"default",
    upperarms:"default",
    hands:"default",
    bottoms:"default",
    feet:"default",
    accessoryhead:"default",
    accessoryneck:"default",
    accessoryback:"default",
    accessorytitle:"default",
};

function soulseekerhair()
{
    console.log("inside function soulseekerhair");
    console.log(character.hairhead);
    var soulseekerhairchangehead=document.getElementById("hairhead");
    var soulseekerhairchangeback=document.getElementById("hairback");
    var soulseekerhairchangebangs=document.getElementById("hairbangs");
    
    if(character.hairhead=="default"){
    soulseekerhairchangehead.setAttribute("class","hairheadsoulseeker");
    soulseekerhairchangeback.setAttribute("class","hairbacksoulseeker");
    soulseekerhairchangebangs.setAttribute("class","hairbangssoulseeker");
        character.hairhead="soulseeker",


    }
    else
     if(character.hairhead!="default") && (character.hairhead!="soulseeker"){
    soulseekerhairchangehead.setAttribute("class","hairheadsoulseeker");
    soulseekerhairchangeback.setAttribute("class","hairbacksoulseeker");
    soulseekerhairchangebangs.setAttribute("class","hairbangssoulseeker");
        character.hairhead="soulseeker",
   
    }
    else
     if(character.hairhead=="soulseeker"){
    soulseekerhairchangehead.setAttribute("class","hairheadmaledefault");
    soulseekerhairchangeback.setAttribute("class","hairbackmaledefault");
    soulseekerhairchangebangs.setAttribute("class","hairbangsmaledefault");
        character.hairhead="default",
    }
    
}

function nextshoe()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoe1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoe2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoe3");
         state.j=0;
    }
    
}

function nexthair()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairf=document.getElementById("hairfront");
    var hairb=document.getElementById("hairback");
    hairb.setAttribute("class","hairback");
    
    if(state.k===0){
    hairf.setAttribute("class","hairfront1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hairf.setAttribute("class","hairfront2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    hairf.setAttribute("class","hairfront3");
         state.k=0;
    }
    
}