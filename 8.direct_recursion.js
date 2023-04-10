let apple=0;
let budget=250;

// Find the number of apples we can buy at given budget if one apple cost 20 

buyApple=(money) => {
  if(money>0){

    moneySpent(money);
    console.log(apple++)
    ;

  }else{
    console.log(`money end you have ${money}`)
  }
}

moneySpent=(money) => { 
  buyApple(money-20)
}
console.log(buyApple(budget))