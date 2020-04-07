$(function(){
    var turns=["#","#","#","#","#","#","#","#"];
    var player1="";
    var gamestart=prompt("player 1 please choose X or O");
    var game_over=false;
    var count=0;
    switch(gamestart){
        case "X":
            player1 = "X";
            $("#message").html("PLAYER "+ player1 + " START PLEASE !");
            break;
        case "x":
            player1 = "X";
            $("#message").html("PLAYER "+ player1 + " START PLEASE !");
            break;
        case "O":
            player1 = "O";
            
            $("#message").html("PLAYER "+ player1 + " START PLEASE !");
            break;
        case "o":
            player1 = "O";
            
            $("#message").html("PLAYER "+ player1 + " START PLEASE !");
            break;
        case null:
            alert("sorry, you didn't choose your type");
            location.reload(true);
            break;
        default:
            alert("sorry, you've chosen a different type, please choose 'X' or 'O' ");
            location.reload(true);
            break;
    }
    function player1_turn(player1,id){
        var box_taken=$("#"+id).text();
        if(box_taken === "#"){
            count++;
            turns[id]=player1;
            $("#"+id).text(player1);
            wincondition(turns,player1);
            
        }
    
    }
    function wincondition(listmove,oldmove){
        if(listmove[1]===oldmove && listmove[2]===oldmove && listmove[3]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[4]===oldmove && listmove[5]===oldmove && listmove[6]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[7]===oldmove && listmove[8]===oldmove && listmove[9]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[1]===oldmove && listmove[4]===oldmove && listmove[7]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[2]===oldmove && listmove[5]===oldmove && listmove[8]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[3]===oldmove && listmove[6]===oldmove && listmove[9]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[1]===oldmove && listmove[5]===oldmove && listmove[9]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[3]===oldmove && listmove[5]===oldmove && listmove[7]===oldmove){
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(!(listmove.includes("#"))){
            game_over=true;
            alert("IT'S A DRAW !!!")
            restart();
        }
        else{
            game_over=false;
        }
    }
    $(".box").click(function(){
        console.log($(this).text())
        
        if($(this).text()==="X" || $(this).text()==="O"){
            alert("Alerdy clicked , choose another box");
            return;
        }
        else{
            $(this).text(player1);
            if(player1==="X"){
                var x=$(this).attr("id");
                // player1_turn(player1,x)
                wincondition(turns,player1);

                player1="O"
                
                $("#message").html("IT'S "+ player1 + "'S TURN !")
            }
            else if(player1==="O"){
                var x=$(this).attr("id");
                wincondition(turns,player1);
                // player1_turn(player1,x)
                player1="X"
                $("#message").html("IT'S "+ player1 + "'S TURN !")
            }
        }
        
    });
    
    function restart(){
        turns=["#","#","#","#","#","#","#","#"];
        count=0;
        $(".box").text("#");
        game_over=true;
    }
    $("#reset").click(function(){
        restart();
    });
});