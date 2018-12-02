var startNum = 0;
var winNum = 0;
var loseNum = 0;

$('#score').text(startNum);
$('#win_num').text(winNum);
$('#lose_num').text(loseNum);



var crystalsHolder = ["assets/images/01.png", "assets/images/02.png", "assets/images/03.png", "assets/images/04.png"];

for(i = 0; i < crystalsHolder.length; i++) {
	var crystal = $('<img>');
	crystal.attr('src', crystalsHolder[i]);
	crystal.addClass('crystal-button');
	crystal.attr('info', Math.ceil(Math.random() * 11));
	$('#crystal-container').append(crystal);

}

function randomInt(){
	return Math.floor(Math.random()*(120-19+1)+19);
}
var randNum = randomInt();


function reset() {
    startNum = 0;
    $('#score').text(startNum);
   
	randNum = randomInt();
	$('#target_number').text(randNum);
}

$('.crystal-button').on('click', function(){
	
	var num = parseInt($(this).attr('info'));
	startNum = startNum + num;
	
	$('#score').text(startNum);
	$('#target_number').text(randNum);
  
	if(startNum > randNum) {
		loseNum++;
		$('#result').text('You Lost!');
		$('#lose_num').text(loseNum);
        reset();
        alert("you lost");
    }

	if(startNum === randNum) {
		winNum++;
		$('#result').text('You Won!');
		$('#win_num').text(winNum);
        reset();
		alert("you win");
	}	
});