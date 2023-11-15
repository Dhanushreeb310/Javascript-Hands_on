/*write a javascript program to generate a random number and store it in 
a variable. The program then takes an input from the user to tell them 
whether the guess was correct , greater or lesser than the original number.
 100-(no of guesses) is the score of the user The program is expected to
  terminate once the number is guessed. Number should be between 1-100.*/
 let randomNumber = Math.floor(Math.random()*100);
 let userNumber;
 let count = 0;
 do{
 
     userNumber = parseInt(prompt("Enter a Number => "))
 
     if(randomNumber > userNumber)
     console.log("Sorry Your Number is less than random Number :")
     else if(randomNumber < userNumber)
     console.log("Sorry Your Number is greater than random Number :")
     else
     console.log("Congretulations....Correct Number is : ", userNumber)
     count++;
 }while(randomNumber != userNumber)
 
 console.log("Number of attempts is :" + count)