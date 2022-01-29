Player1Name = localStorage.getItem("Player1Name");
Player2Name = localStorage.getItem("Player2Name");
Player1Score = 0;
Player2Score = 0;
document.getElementById("player1_name").innerHTML = Player1Name + ":";
document.getElementById("player2_name").innerHTML = Player2Name + ":";
document.getElementById("player1_score").innerHTML = Player1Score;
document.getElementById("player2_score").innerHTML = Player2Score;
document.getElementById("player_question").innerHTML = "Question Turn - " + Player1Name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player2Name;
function send(){
    getword = document.getElementById("word").value;
    Word = getword.toLowerCase();
    console.log("Word In Lower Case = " + Word);
    charAt1 = Word.charAt(1);
    console.log(charAt1);
    LengthDivide2 = Math.floor(Word.length/2);
    charAt2 = Word.charAt(LengthDivide2);
    console.log(charAt2);
    LengthMinus1 = Word.length - 1;
    charAt3 = Word.charAt(LengthMinus1);
    console.log(charAt3);
    RemoveCharAt1 = Word.replace(charAt1, "_");
    RemoveCharAt2 = RemoveCharAt1.replace(charAt2, "_");
    RemoveCharAt3 = RemoveCharAt2.replace(charAt3, "_");
    console.log(RemoveCharAt3);
    QuestionWord = "<h4 id= 'word_display'> Q. " + RemoveCharAt3 + " </h4>";
    InputBox = "<br> Ans: <input type='text' id='input_check_box'>";
    CheckButton = "<br> <br> <button class='btn btn-info' onclick= 'check()'> Check </button>";
    Row = QuestionWord + InputBox + CheckButton;
    document.getElementById("output").innerHTML = Row;
    document.getElementById("word").value = "";
}
QuestionTurn = "Player1";
AnswerTurn = "Player2";

function check(){
    GetAnswer = document.getElementById("input_check_box").value;
    Answer = GetAnswer.toLowerCase();
    console.log("Answer In Lowercase: " + Answer);
    if(Answer == Word ){
        if(AnswerTurn == "Player1"){
         Player1Score = Player1Score + 1;
         document.getElementById("player1_score").innerHTML = Player1Score;
        }
        else{
            Player2Score = Player2Score + 1;
            document.getElementById("player2_score").innerHTML = Player2Score;
        }
    }
    if(QuestionTurn == "Player1"){
        QuestionTurn = "Player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + Player2Name;
    }
    else{
        QuestionTurn = "Player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + Player1Name;
    }
    if(AnswerTurn == "Player1"){
        AnswerTurn = "Player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player2Name;
    }
    else{
        AnswerTurn = "Player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player1Name;
    }
    document.getElementById("output").innerHTML = " ";
}