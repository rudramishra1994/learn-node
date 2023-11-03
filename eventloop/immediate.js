const fs = require('fs');

fs.readFile('./data/test.txt', function(err, data) {
  const startCallback = Date.now();
  
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  
  if (err) console.log('Error');
  else console.log(data);

  setImmediate(() => {
    console.log('I was scheduled to run immediately');
  });

  const timeoutScheduled = Date.now();
  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`${delay}ms have passed since I was scheduled`);
  }, 5);

});
