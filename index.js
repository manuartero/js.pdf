const createPdf = require('./create_pdf');
const fs = require('fs');


function foo() {
  let obj = {
    aTitle: 'Hola',
    aSecond: ['dasdasd', 'dasdasd', 'dasasd'],
    aThird: 'dasdasdasdasdas',
    aFourth: {
      aFitthTitle: 'as'
    }
  };
  let readableStream = createPdf(obj);
  let writeStream = fs.createWriteStream('./test/a.pdf');
  readableStream.pipe(writeStream);
}

foo();

