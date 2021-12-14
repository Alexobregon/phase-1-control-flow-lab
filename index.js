function scuberGreetingForFeet(someNumber) {
  let result;
  if (someNumber <= 400) {
    result = someNumber = "This one is on me!";
    return result;  
    } else if (someNumber > 2000  && someNumber < 2500) {
      result = someNumber = 'I will gladly take your thirty bucks.';
      return result;
    } else if (someNumber > 2500 ) {
      result = someNumber = 'No can do.';
      return result;
     }
  
  scuberGreetingForFeet(2600);
}

function ternaryCheckCity(City){


return ((City === "NYC") ? "Ok, sounds good." : "No go.");
}


function switchOnCharmFromTip(tip){

    switch (tip) {
      case 'generous':
        return "Thank you so much.";
        break;
      case 'not as generous':
          return "Thank you.";
          break;
      case 'thanks for everything':
          return "Bye.";
          break;


  }
}
