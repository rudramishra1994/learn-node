const fs = require("fs");

fs.readFile("./operations/data.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
    // Delete the file after reading it
    try {
      fs.unlinkSync("./operations/data.txt");
    } catch (unlinkErr) {
      console.log(unlinkErr.message);
    }
  }
});
