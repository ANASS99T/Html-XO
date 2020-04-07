$(function(){
    var turns=["#","#","#","#","#","#","#","#"];
    var bot_turn="";
    var player_turn="";
    var gamestart=prompt("please choose X or O");
    var game_over=false;
    var count=0;
    var score_bot=0;
    var score_player=0;
    switch(gamestart){
        case "x":
            bot_turn = "O";
            player_turn = "X"; 
            $("#message").html("PLAYER "+ player_turn+" START PLEASE!");
            break;
        case "o":
            bot_turn = "X";
            player_turn = "O";
            $("#message").html("PLAYER "+ player_turn+ " START PLEASE!");
            break;
        case "O":
            bot_turn = "X";
            player_turn = "O";
            $("#message").html("PLAYER "+ player_turn+ " START PLEASE!");
            break;
        case "X":
            bot_turn = "O";
            player_turn = "X";
            $("#message").html("PLAYER "+ player_turn+ " START PLEASE!");
            break;
        case null:
            alert("sorry, you didn't choose your type");
            location.reload(true);
            break;
        default:
            alert("sorry, you've chosen a different type please choose X or O");
            location.reload(true);
            break;
    }
    function botturn(){
        var old=false;
        while(old === false && count !==5 ){
            var bot_mouve=(Math.random()*10).toFixed();
            var mouve=$("#"+ bot_mouve).text();
            if(mouve === "#"){
                $("#"+ bot_mouve).text(bot_turn);
                old= true;
                turns[bot_mouve]=bot_turn;
            }
        }
    }
    function playerturn(player_turn,id){
        var box_taken=$("#"+id).text();
        if (box_taken === "#"){
            count++;
            turns[id]=player_turn;
            $("#"+id).text(player_turn);
            wincondition(turns,player_turn);
            if(game_over===false){
                botturn();
                $("#message").html("IT'S "+ player_turn + "'S TURN !");
                wincondition(turns,bot_turn);
            }
        }
    }
    function wincondition(listmove,oldmove){
        if(listmove[1]===oldmove && listmove[2]===oldmove && listmove[3]===oldmove){
            
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            game_over=true;
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[4]===oldmove && listmove[5]===oldmove && listmove[6]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[7]===oldmove && listmove[8]===oldmove && listmove[9]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[1]===oldmove && listmove[4]===oldmove && listmove[7]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[2]===oldmove && listmove[5]===oldmove && listmove[8]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[3]===oldmove && listmove[6]===oldmove && listmove[9]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[1]===oldmove && listmove[5]===oldmove && listmove[9]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
            restart();
            alert("PLAYER "+ oldmove +" WIN !");
        }
        else if(listmove[3]===oldmove && listmove[5]===oldmove && listmove[7]===oldmove){
            game_over=true;
            if (oldmove==player_turn){
                score_player++;
                $(".score_player").text(score_player);
            }
            else{
                score_bot++;
                $(".score_bot").text(score_bot);
            }
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
        var x=$(this).attr("id");
        playerturn(player_turn,x);
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