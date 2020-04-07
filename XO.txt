alert("Welcome to the tic tac toe Have fun ^-^");
var player1=prompt("Player 1 enter Ur name to play with X");
var player2=prompt("Player 2 enter Ur name to play with O");
var num=0;
var num1=0;
var num2=0;
images=["O.jpg","X.jpg"];
images1=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
images2=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
function score1() {
        var sliderS1=document.getElementById("sc1");
        num1++;
        if (num1 >= images1.length){
        num1=0;
        }
        sliderS1.src=images1[num1];
        if (num1==images1.length-1){
            alert("Game Over "+player1+" Won");
            location.reload();
        }
}
function score2() {
        var sliderS2=document.getElementById("sc2");
        num2++;
        if (num2 >= images2.length){
        num2=0;
        }
        sliderS2.src=images2[num2];
        if (num2==images2.length-1){
            alert("Game Over "+player2+" Won");
            location.reload();
        }
}
L=[0,0,0,0,0,0,0,0,0];
function restart(){
    var result = confirm (" Do you want to play again ? ");
    if(result==true){
        alert("        Okey      ");
        var unslider=document.getElementById("1");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("2");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("3");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("4");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("5");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("6");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("7");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("8");
        unslider.src="ill_1093041_univers.jpg";
        unslider=document.getElementById("9");
        unslider.src="ill_1093041_univers.jpg";
        L=[0,0,0,0,0,0,0,0,0] ;
    }
    else{
        alert("See u soon <3 ");
    }
}
function verifieX(L) {
    if (L[0]=="X" && L[1]=="X" && L[2]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[3]=="X" && L[4]=="X" && L[5]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[6]=="X" && L[7]=="X" && L[8]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[0]=="X" && L[3]=="X" && L[6]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[1]=="X" && L[4]=="X" && L[7]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[2]=="X" && L[5]=="X" && L[8]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[0]=="X" && L[4]=="X" && L[8]=="X"){
        alert(player1 + " Won");
        score1();
    }
    if (L[6]=="X" && L[4]=="X" && L[2]=="X"){
        alert(player1 + " Won");
        score1();
    }
    
}
function verifieO(L) {
    if (L[0]=="O" && L[1]=="O" && L[2]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[3]=="O" && L[4]=="O" && L[5]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[6]=="O" && L[7]=="O" && L[8]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[0]=="O" && L[3]=="O" && L[6]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[1]=="O" && L[4]=="O" && L[7]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[2]=="O" && L[5]=="O" && L[8]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[0]=="O" && L[4]=="O" && L[8]=="O"){
        alert(player2 + " Won");
        score2();
    }
    if (L[6]=="O" && L[4]=="O" && L[2]=="O"){
        alert(player2 + " Won") ;
        score2();
    }
}
function replace1() {
    var slider1=document.getElementById("1");
    num++;
    if (num >= images.length){
        num=0 ;
    }
    if(images[num]=="X.jpg"){
        L[0]="X" ;
    }
    else{
        L[0]="O";
    }
    slider1.src=images[num];
    verifieO(L);
    verifieX(L);
        
}
function replace2() {
    var slider2=document.getElementById("2");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[1]="X" ;
    }
    else{
        L[1]="O";
    }    
    slider2.src=images[num];

}
function replace3() {
    var slider3=document.getElementById("3");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[2]="X" ;
    }
    else{
        L[2]="O";
    }
    slider3.src=images[num];
    verifieO(L);
    verifieX(L); 
}
function replace4() {
    var slider4=document.getElementById("4");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[3]="X" ;
    }
    else{
        L[3]="O";
    }
    slider4.src=images[num];
    verifieO(L);
    verifieX(L);   
}
function replace5() {
    var slider5=document.getElementById("5");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[4]="X" ;
    }
    else{
        L[4]="O";
    }
    slider5.src=images[num];
    verifieO(L);
    verifieX(L);
}
function replace6() {
    var slider6=document.getElementById("6");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[5]="X" ;
    }
    else{
        L[5]="O";
    }
    slider6.src=images[num];
    verifieO(L);
    verifieX(L);
}
function replace7() {
    var slider7=document.getElementById("7");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[6]="X" ;
    }
    else{
        L[6]="O";
    }
    slider7.src=images[num];
    verifieO(L);
    verifieX(L);
}
function replace8() {
    var slider8=document.getElementById("8");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[7]="X" ;
    }
    else{
        L[7]="O";
    }
    slider8.src=images[num];
    verifieO(L);
    verifieX(L);
}
function replace9() {
    var slider9=document.getElementById("9");
    num++;
    if (num >= images.length){
        num=0;
    }
    if(images[num]=="X.jpg"){
        L[8]="X" ;
    }
    else{
        L[8]="O";
    }
    slider9.src=images[num];
    verifieO(L);
    verifieX(L);
}
