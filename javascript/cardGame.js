let count = 0;
const cardCounter = card =>{
  if(card >= 2 && card <= 6){
    count ++;
  }else if([10, "J", "Q", "K", "A"].includes(card)){
    count --;
  }
  const output = count > 0 ? "Bet" : "Hold";
  return `${count} ${output}`
}
console.log(cardCounter(10))