// Promises

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}
// console.log(savetoDb("Piyush Gupta"));

// then() and catch() methods

// let request = savetoDb("Piyush Gupta"); //req = promise object
// request
//   .then(() => {
//     console.log("promise was resolved");
// console.log(request);
//   })
//   .catch(() => {
//     console.log("promise was rejected");
// console.log(request);
//   });

// OR

savetoDb("Piyush Gupta")
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

//   Promise Chaining
savetoDb("Piyush Gupta")
  .then(() => {
    console.log("data1 saved. Promise was resolved");
    savetoDb("apna college").then(() => {
      console.log("data2 saved. Promise was resolved");
      savetoDb("hello world").then(() => {
        console.log("data3 saved. Promise was resolved");
      });
    });
  })
  .catch(() => {
    console.log("promise was rejected");
  });

// OR
savetoDb("Piyush Gupta")
  .then(() => {
    console.log("data1 saved");
    return savetoDb("apna college");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDb("hello world");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

  // The code and callback hell wala code is same.
  
