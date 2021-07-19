var canvas=new fabric.Canvas("myCanvas");
var player_x=10;
player_y=10;
block_width=30;
block_height=30;
player_object="";
block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true&&keyPressed=='80'){
        console.log("shift and p pressed together");
        block_width=block_width+5;
        block_height=block_height+5;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (e.shiftKey==true&&keyPressed=='77'){
        console.log("shift and m pressed together");
        block_width=block_width-5;
        block_height=block_height-5;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (keyPressed=='38'){
        console.log("up key is pressed");
    }
    
    if (keyPressed=='40'){
        console.log("down key is pressed");
    }

    if (keyPressed=='37'){
        console.log("left key is pressed");
    }

    if (keyPressed=='39'){
        console.log("right key is pressed");
    }
    if (keyPressed=='87'){
        console.log("w key is pressed");
        new_image('wall.jpg');
    }

    if (keyPressed=='71'){
        console.log("g key is pressed");
        new_image('ground.png');
    }

    if (keyPressed=='84'){
        console.log("t key is pressed");
        new_image('trunk.jpg');
    }

    if (keyPressed=='85'){
        console.log("u key is pressed");
        new_image('unique.png');
    }

    if (keyPressed=='82'){
        new_image('roof.jpg');
        console.log("r key is pressed");
    }

    if (keyPressed=='76'){
        console.log("l key is pressed");
        new_image('light_green.png');
    }

    if (keyPressed=='68'){
        console.log("d key is pressed");
        new_image('dark_green.png');
    }

    if (keyPressed=='67'){
        console.log("c key is pressed");
        new_image('cloud.jpg');
    }

    if (keyPressed=='89'){
        console.log("y key is pressed");
        new_image('yellow_wall.png');
    }
}