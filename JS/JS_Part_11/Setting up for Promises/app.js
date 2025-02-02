// savetoDb(
//   "apna college",
//   () => {
//     console.log("success :your data was saved: ");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2 :data2 saved");
//         savetoDb(
//           "Piyush Gupta",
//           () => {
//             console.log("success3 : data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 :weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure :weak connection, Data not saved");
//   }
// );

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure:weak connection");
    }
  });
}

console.log(savetoDb("Piyush Gupta"));
