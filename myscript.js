var count=75;
var counter=setInterval(timer, 1000);
var rightAnswer = "right"
var wrongAnswer = "wrong"


function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return document.getElementById("timer").innerHTML = "Test Complete";
  }
  rightAnswer.forEach(count++ {
      
  });

 document.getElementById("timer").innerHTML="Time:"+ count + "secs"; 
}


