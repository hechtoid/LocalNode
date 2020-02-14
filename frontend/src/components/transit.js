import React from 'react';
import Union from './union';
import Stockton from './stockton';
import Sansome from './sansome';
import VanNess from './vanNess';
import Broadway from './broadway';

function Transit() {
  return (
      <div className="transit">
      <div className="small">
        <Union />
        <Sansome />
	<Broadway />
      </div>
      <div className="big">
        <Stockton />
        <VanNess />
      </div>
    </div>
  );
}

export default Transit;
