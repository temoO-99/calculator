
//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x) //eval to get the value of string
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}



$(function (){
    $('table').css({
        marginTop: $(window).height()/2 - 50
    });
});



