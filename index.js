let ticketNumber = 73

function takeANumber (katzDeliLine){
  ticketNumber++; 
  katzDeliLine.push(ticketNumber);
  return ("Welcome. You are number " + katzDeliLine.length + " in line." "Your ticket number is " + ticketNumber + "." ); 
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0){
   return "There is nobody waiting to be served!";
 } else if (katzDeliLine.length > 0) {
   katzDeliLine = katzDeliLine.shift();
   return "Currently serving " + katzDeliLine + ".";
 }
}

function currentLine (katzDeliLine){
  let list= [];
   if (katzDeliLine.length === 0){
    return "The line is currently empty.";
   }
   for (let k = 0; k< katzDeliLine.length; k++){
          list.push(k + 1 + ". " + katzDeliLine[k]);
   }
   return "The line is currently: " + list.join(", ");
}

