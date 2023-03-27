/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLikeTuit } from './tuits-reducer';

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const likeClickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleLikeTuit(tuit._id));
  };

  return (
    <div className="wd-grid-col-90 float-end">
      <div className="wd-padding-left-12 wd-margin-top-12 wd-margin-bottom-12">
        <a
          href="#"
          className="wd-text-decoration-none wd-text-color-two wd-width-25 wd-display-block"
        >
          <i className="fa fa-regular fa-comment"></i>
          <span className="wd-padding-left-12">{tuit.replies}</span>
        </a>

        <a
          href="#"
          className="wd-text-decoration-none wd-text-color-two wd-width-25 wd-display-block"
        >
          <i className="fa fa-duotone fa-retweet"></i>
          <span className="wd-padding-left-12">{tuit.retuits}</span>
        </a>

        <a
          href=""
          className={`wd-text-decoration-none ${
            tuit.liked
              ? 'fa fa-solid fa-heart wd-text-color-red'
              : 'fa fa-regular fa-heart wd-text-color-two'
          } wd-width-25`}
          onClick={likeClickHandler}
        >
          <span className="wd-padding-left-12 wd-text-color-two">
            {tuit.likes}
          </span>
        </a>

        <a
          href="#"
          className="wd-text-decoration-none wd-text-color-two wd-display-block"
        >
          <i className="fa fa-solid fa-arrow-up-from-bracket"></i>
        </a>
      </div>
    </div>
  );
};

export default TuitStats;
