import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTuit } from './tuits-reducer';

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = () => {
    dispatch(deleteTuit(tuit._id));
  };

  return (
    <div>
      <div className="wd-padding-top-12">
        <div className="wd-grid-col-10">
          <div className="wd-padding-left-16">
            <img src={tuit.image} alt="user" className="wd-profile-icon" />
          </div>
        </div>

        <div className="wd-grid-col-90">
          <div className="wd-padding-left-12 wd-padding-right-12">
            <span className="wd-text-size-15">
              {tuit.userName} <i className="fa fa-solid fa-circle-check"></i>{' '}
              <span className="wd-text-color-two">
                {' '}
                {tuit.handle} . {tuit.time}
              </span>
            </span>
            {/* <span className="wd-float-right wd-text-color-two">...</span> */}
            <i
              className="bi bi-x-lg float-end wd-padding-right-12"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <br />

            <div className="wd-width-506">
              <span className="wd-text-size-15">{tuit.tuit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitItem;
