for (let num = 100; num <= 200; num++) {
  if (num % 3 != 0 && num % 4 != 0 ){
    console.log(num);
  }
  if (num % 3 == 0 && num % 4 != 0){
    console.log("Loopy");

  }
  if (num % 4 == 0 && num % 3 != 0){
    console.log("Lighthouse");
  }
  if (num % 12 === 0){
    console.log("LoopyLighthouse");
  }


}