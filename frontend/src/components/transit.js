import React from 'react';
import Union from './union';
import Stockton from './stockton';
import Sansome from './sansome';
import VanNess from './vanNess';


function Transit() {
  return (
      <div className="App">
        Stockton
      <Stockton />
        Union
      <Union />
        Sansome
      <Sansome />
        Van Ness
      <VanNess />
    </div>
  );
}

export default Transit;
