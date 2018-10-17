var randomNum = Math.floor(Math.random() * 102 + 19);
$(".random").html(randomNum);
var randomValue = 0;
var total = 0;
var winTime = 0;
var looseTime = 0;
function btnValueSet(){
    randomValue =  Math.floor(Math.random() * 12 + 1);
    $(".pinkBtnValue").val(randomValue);
    randomValue =  Math.floor(Math.random() * 12 + 1);
    $(".purpleBtnValue").val(randomValue);
    randomValue =  Math.floor(Math.random() * 12 + 1);
    $(".blueBtnValue").val(randomValue);
    randomValue =  Math.floor(Math.random() * 12 + 1);
    $(".clearBtnValue").val(randomValue);
}
btnValueSet();
$('button').click(function(){
    total = Number(total) + Number($(this).val());
     $('.score').text(total);
     if(total == randomNum){
        btnValueSet();
        randomNum = Math.floor(Math.random() * 102 + 19);
        $(".random").html(randomNum);
        winTime++;
        $('.win').html("Wins: " + winTime);
        total = 0;
        $('.score').text(total);
     }
     if(total > randomNum){
        btnValueSet();
        randomNum = Math.floor(Math.random() * 102 + 19);
        $(".random").html(randomNum);
        looseTime++;
        $('.losse').html("losses: " + looseTime);
        total = 0;
        $('.score').text(total);
     }       
 });