const fs = require('fs');
const path = require('path');
const { runLoaders } = require('loader-runner');
runLoaders({
  resource: "./demo.txt",
  loaders: [
    {
      loader: path.resolve(__dirname, './loaders/raw-loader'),
      options: {
        name: 'Alice'
      }
    },
  ],
  readResource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.log(err) : console.log(result);
});