/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PostSummaryList from '../post-summary-list';
import './index.css';

const ExploreComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-11 position-relative">
          <input
            placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"
          />
          <i
            className="bi bi-search position-absolute 
                       wd-nudge-up"
          ></i>
        </div>
        <div className="col-1">
          <i
            className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"
          ></i>
        </div>
      </div>
      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          <a className="nav-link active">For You</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">News</a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img
          src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
          className="w-100"
          alt="Img"
        />
        <h1 className="position-absolute wd-nudge-up text-white">
          SpaceX Starship
        </h1>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
