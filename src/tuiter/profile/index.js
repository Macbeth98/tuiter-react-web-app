import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <span className="fw-bold">←</span>
        </div>
        <div className="col-11">
          <h4 className="mb-0">
            {profile.firstName} {profile.lastName}
          </h4>
          <span className="wd-text-color-two">6,114 Tweets</span>
        </div>
      </div>

      <div>
        <div>
          <img
            src={profile.bannerPicture}
            alt="banner"
            width="100%"
            height={250}
          />
        </div>
        <div className="row">
          <div className="col-5">
            <img
              className="wd-profile-img"
              src={profile.profilePicture}
              alt="profileImg"
            />
          </div>
          <div className="col-7">
            <Link to="/tuiter/edit-profile">
              <button className="btn btn-primary wd-profile-edit-button float-end mt-3 mr-5">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h4 className="mb-0">
          {profile.firstName} {profile.lastName}
        </h4>
        <span className="wd-text-color-two">{profile.handle}</span>
        <p className="mt-2 mb-2">{profile.bio}</p>
      </div>

      <div>
        <i className="fa fa-solid fa-location-dot wd-text-color-two"></i>
        <span className="wd-text-color-two"> {profile.location}</span>
        <i className="fas fa-solid fa-cake-candles wd-padding-left-16 wd-text-color-two"></i>
        <span className="wd-text-color-two"> {profile.dateOfBirth}</span>
        <i class="fa-solid fa-calendar-days wd-padding-left-16 wd-text-color-two"></i>
        <span className="wd-text-color-two"> Joined {profile.dateJoined}</span>
        <br />
        <div className="mt-2">
          <span className="wd-text-color-two">
            {' '}
            <span className="wd-text-bold">{profile.followingCount}</span>{' '}
            Following
          </span>
          <span className="wd-padding-left-16 wd-text-color-two">
            {' '}
            <span className="wd-text-bold">{profile.followersCount}</span>{' '}
            Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
