function addUser(){
    Player1Name = document.getElementById("player1_name_input").value;
    Player2Name = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1Name", Player1Name);
    localStorage.setItem("Player2Name", Player2Name);
    window.location = "game_page.html";
}