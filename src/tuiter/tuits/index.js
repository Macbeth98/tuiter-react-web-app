import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TuitItem from './tuits-item';
import TuitStats from './tuitStats';
import { findTuitsThunk } from '../../services/tuits-thunks';

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <div className="wd-border-center wd-padding-0">
      {loading ? (
        <ul className="list-group">
          <li className="list-group-item">Loading...</li>
        </ul>
      ) : (
        tuits.map((tuit, index) => (
          <div>
            <TuitItem key={index} tuit={tuit} />
            <TuitStats key={index} tuit={tuit} />
            <hr className="wd-line-separator wd-clear" />
          </div>
        ))
      )}
    </div>
  );
};

export default TuitsList;
