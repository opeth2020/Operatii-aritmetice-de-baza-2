function myFunction() {
    var x,y,z,operator;
    x=prompt("Insert the 1-st number");
    y= prompt("Insert the 2-nd number");
    operator = prompt("Choose an operator from +, -, *, /");
    
    if(operator=="+"){
      z=Number(x)+Number(y);
    }
    else if(operator=="-"){
    z=Number(x)-Number(y);
    }
    else if(operator=="*"){
      z=Number(x)*Number(y);
    }
    else if(operator=="/"){
      z=Number(x)/Number(y);
    }
    else if(operator=!null){
      z="Error!"
    }
    else if(x=!null){
      z="Error!"
    }
    else if(y=!null){
      z="Error!"
    }
    return z;
      }
      
  alert ("Your result is: " + myFunction());