question_turn = "player1";
answer_turn = "player2";

player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    num1 = parseInt(document.getElementById("num_1").value);
    num2 = parseInt(document.getElementById("num_2").value);
    actual_answer = num1 * num2;
    question_number = "<h4>" + num1 + "×" + num2 + "</h4>"
    input_box = "<br> Answer: <input type='text' id='input_check_box' placeholder='Enter your answer...'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    actual_answer = num1 * num2;

    if (get_answer == actual_answer) {
            if (answer_turn == "player1") {
                change_score("p1");
                close_output_div();
        } else {
            if (answer_turn == "player2") {
                change_score("p2");
                close_output_div();
            }
        }
    } else {
        if (get_answer != actual_answer) {
            if (answer_turn == "player1") {
                change_score("p2");
                close_output_div();
        } else {
            if (answer_turn == "player2") {
                change_score("p1");
                close_output_div();
            }
        }
        }
    }

    if (question_turn == "player1") {
        answer_turn == "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
        question_turn == "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        answer_turn == "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        question_turn == "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

}

function change_score(x) {
    if (x == "p1") {
        player1_score += 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    };

    if (x == "p2") {
        player2_score += 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    };
}

function close_output_div() {
    document.getElementById("output").innerHTML = "<label></label>";
}