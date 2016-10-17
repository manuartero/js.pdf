'use strict';

const createPdf = require('./create_pdf');


function foo() {
  let obj = {
    aFirstLevelTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    anotherFirstLevelTitle: ['First item', 'Second item', 'Third item'],
    anImportantParagraph: {
      aSubTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      aSecondSubTitle: {
        innerHeading: {
          value: 42
        }
      }
    }
  };

  createPdf(obj).toFile('./test/b.pdf');
}


foo();

