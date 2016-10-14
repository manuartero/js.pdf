'use strict';

const createPdf = require('./create_pdf');


function foo() {
  let obj = {
    aTitle: 'Hola',
    aSecond: ['dasdasd', 'dasdasd', 'dasasd'],
    aThird: 'dasdasdasdasdas',
    aFourth: {
      aFitthTitle: 'as',
      another: {
        ggggg: {
          hhhhhhh: {
            r: 4
          }
        }
      }
    }
  };

  createPdf(obj).toFile('./test/b.pdf');
}


foo();

