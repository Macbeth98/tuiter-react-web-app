import React from 'react';
import TuitItem from './tuits-item';
import TuitStats from './tuitStats';
import { useSelector } from 'react-redux';

const TuitsList = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <div className="wd-border-center wd-padding-0">
      {tuits.map((tuit, index) => (
        <div>
          <TuitItem key={index} tuit={tuit} />
          <TuitStats key={index} tuit={tuit} />
          <hr className="wd-line-separator wd-clear" />
        </div>
      ))}
    </div>
  );
};

export default TuitsList;
