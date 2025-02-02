// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     if(internetSpeed >4){
//         console.log("your data was saved: ", data);
//     }else{
//         console.log("weak connection. Data not saved");
//     }
// }
// savetoDb("apna college")

function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "apna college",
  () => {
    console.log("success :your data was saved: ");
    savetoDb(
      "hello world",
      () => {
        console.log("success2 :data2 saved");
        savetoDb(
          "Piyush Gupta",
          () => {
            console.log("success3 : data3 saved");
          },
          () => {
            console.log("failure3 : weak connection");
          }
        );
      },
      () => {
        console.log("failure2 :weak connection");
      }
    );
  },
  () => {
    console.log("failure :weak connection, Data not saved");
  }
);
