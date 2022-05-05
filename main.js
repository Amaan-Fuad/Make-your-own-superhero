var canvas = new fabric.Canvas('myCanvas');
playerx = 10;
playery = 10;
blockimagewidth = 30;
blockimgheight = 30;
player_object = "";
blockimgobject = "";
function playerupdate() {
    fabric.Image.fromURL('Player.png', function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: playery, left: playerx });
        canvas.add(player_object);
    });
}
function blockimg(getimg) {
    fabric.Image.fromURL(getimg, function (Img) {
        blockimgobject = Img;
        blockimgobject.scaleToWidth(blockimagewidth);
        blockimgobject.scaleToHeight(blockimgheight);
        blockimgobject.set({ top: playery, left: playerx });
        canvas.add(blockimgobject);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (e.shiftKey == true && keypress == '80') {
        console.log("p and shift key are pressed together");
        blockimagewidth = blockimagewidth + 10;
        blockimgheight = blockimgheight + 10;
        document.getElementById("currentwidth").innerHTML = blockimagewidth;
        document.getElementById("currentheight").innerHTML = blockimgheight;
    }
    if (e.shiftKey == true && keypress == '77') {
        console.log("m and shift key are pressed together");
        blockimagewidth = blockimagewidth - 10;
        blockimgheight = blockimgheight - 10;
        document.getElementById("currentwidth").innerHTML = blockimagewidth;
        document.getElementById("currentheight").innerHTML = blockimgheight;
    }

if (keypress == '67') {
    blockimg('Copy of captain_america_left_hand.png');
    console.log("when c is pressed");

}
if (keypress == '68') {
    blockimg('Copy of hulk_face.png');
    console.log("when h is pressed");

}
if (keypress == '71') {
    blockimg('Copy of hulk_left_hand.png');
    console.log("when g is pressed");

}
if (keypress == '76') {
    blockimg('Copy of hulk_legs.png');
    console.log("when l is pressed");

}
if (keypress == '82') {
    blockimg('Copy of hulk_right_hand.png');
    console.log("when r is pressed");

}
if (keypress == '84') {
    blockimg('Copy of hulkd_body.png');
    console.log("when t is pressed");

}
if (keypress == '85') {
    blockimg('Copy of ironman_body.png');
    console.log("when u is pressed");

}
if (keypress == '87') {
    blockimg('Copy of ironman_face.png');
    console.log("when w is pressed");

}
if (keypress == '89') {
    blockimg('Cop of ironman_left_hand.png');
    console.log("when y is pressed");

}

if (keypress == '37') {
    left();
    console.log("left is pressed");

}
if (keypress == '38') {
    up();
    console.log("up is pressed");

}
if (keypress == '39') {
    right();
    console.log("right is pressed");

}
if (keypress == '40') {
    down();
    console.log("down is pressed");

}
}
function up() {
    if (playery >= 0) {
        playery = playery - blockimgheight;
        console.log("block img height is" + blockimgheight);
        console.log("when up is pressed x=," + playerx + "y=," + playery);
        canvas.remove(player_object);
        playerupdate();
    }
}
function down() {
    if (playery <= 400) {
        playery = playery + blockimgheight;
        console.log("block img height is" + blockimgheight);
        console.log("when up is pressed x=," + playerx + "y=," + playery);
        canvas.remove(player_object);
        playerupdate();
    }
}
function right() {
    if (playerx <= 700) {
        playerx = playerx + blockimagewidth;
        console.log("block img width is" + blockimagewidth);
        console.log("when up is pressed x=," + playerx + "y=," + playery);
        canvas.remove(player_object);
        playerupdate();
    }
}
function left() {
    if (playerx >= 0) {
        playerx = playerx - blockimagewidth;
        console.log("block img width is" + blockimagewidth);
        console.log("when up is pressed x=," + playerx + "y=," + playery);
        canvas.remove(player_object);
        playerupdate();
    }
}