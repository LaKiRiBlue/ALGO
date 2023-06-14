//Write an algorithm which prints everything in an array.

// let sweets = ["chocolate", "cookies", "waffles", "candies"];
// for (i in sweets){
//     console.log(sweets[i]);
// }
// //^^^^...and this is a bit longer way how to do the same thing
// for (let i = 0 ; i < sweets.length ; i+=1){
//     console.log(sweets[i]);
// }

//Write an algorithm which receives an array of integers and prints its minimum.


    //  let minValue = [15, 10, 20, 5,  16];

    //  let result=minValue[0];
  
    //  for (let i = 0; i < minValue.length; i++) {
    //   if (minValue[i] < result) {
    //     result = minValue[i];
    //     console.log(i + " = "+minValue[i])
    //   }
    // }
  
    // console.log("The minimum value is:", result);
  
    //Write an algorithm which receives an array of integers and prints the position of its minimum.

    // let minValue = [78, 10, 5, 16];
    // let result=minValue[0];
    // let position = 0;
    // for (let i = 0; i < minValue.length; i++) {
    //     if (minValue[i] < result) {
    //       result = minValue[i];
    //       position=i;
    //     }
    //   }
    
    //   console.log("The position of min (" +result+") nb is:", position);*

      // let minValue = [78, 10, 5, 16];
      // let result=minValue[0];
      // let position;
      // for (let i = 0; i < minValue.length; i++) {
      //     if (minValue[i] < result) {
      //       result = minValue[i];
      //     }
      //   }
      
      //   for (let i = 0; i < minValue.length; i++) {
      //     if (minValue[i] == result) {
      //       position = i;
      //       console.log("--> ", position);
      //     }
      //   }

      //   console.log("The position of min (" +result+") nb is:", position);

      //Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

      let integers = [4,1, 2,  3];
      let result = true;

      for (let i = 1; i < integers.length; i++) {
        if (integers[i-1]>integers[i]) {
         // console.log(false);
          result=false;
          break;
        }
      }
  
  // if (result){
  //   console.log(true);
  // }

  console.log(result);
 