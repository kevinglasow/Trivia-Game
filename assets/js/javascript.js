var timer = 120;

var startGame = function() {
		var countDown = setInterval(function(){
    	timer--
    	$("#rulesTimer").text("Time Remaining: " + timer)	
	   	}, 1000);
    $("#gameBoard").text("1. Who founded the Simpsons' town?")
	$("#gameQuestion").detach()
	var radioButtons = $("<fieldset>").html(
		"<label for='radio-1'>" + trivia[0].A + "</label>" +
		"<input type='radio' name='radio-1' id='radio-1'>" +
		"<label for='radio-1'>" + trivia[0].B + "</label>" +
		"<input type='radio' name='radio-2' id='radio-2'>" + 
		"<label for='radio-1'>" + trivia[0].C + "</label>" +
		"<input type='radio' name='radio-3' id='radio-3'>") 
};

var endGame = function() {
	if( timer === 0 ) {
		countDown.clearInterval();
	}
}

$("#gameButton").click(function() {
	alert(test);
	startGame();
});

var trivia = [
	questionOne = {
		Question: "1. Who founded the Simpsons' town?",
		A: "Jebadiah Springfield",
		B: "Zachariah Springfield",
		C: "Springfield Manhattan",
		Correct: "Jebadiah Springfield"
	}
]


