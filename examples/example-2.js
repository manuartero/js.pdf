'use strict';

const createPdf = require('../lib');


const obj = {
  aFirstLevelTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  anotherFirstLevelTitle: {
    thisIsAList: ['First item', 'Second item', 'Third item', 'Last item'],
    anImportantParagraph: {
      aSubTitle: 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no',
      aSecondSubTitle: {
        responseToLifeAndEverything: {
          value: 42
        }
      }
    }
  }
};

const css = {
  body: {
    font: 'Times-Roman'
  },
  h1: {
    margin: {
      top: 0
    }
  },
  h2: {
    color: '#33ff00'
  }
}

module.exports = () => createPdf(obj, css).toFile('./examples/example-2.pdf');
