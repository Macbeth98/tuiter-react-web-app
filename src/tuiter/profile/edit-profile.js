import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProfile } from './profile-reducer';

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const [user, setUser] = useState(profile);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateProfile(user));
  };

  return (
    <div>
      <div className="row mb-2">
        <div className="col-1">
          <Link to="/tuiter/profile">
            <span className="fw-bold">X</span>
          </Link>
        </div>
        <div className="col-9">
          <h4 className="mb-0">Edit Profile</h4>
        </div>
        <div className="col-2">
          <button className="btn btn-dark" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>

      <div>
        <div>
          <img
            src={user.bannerPicture}
            alt="banner"
            width="100%"
            height={250}
          />
        </div>
        <div className="row">
          <div className="col-5">
            <img
              className="wd-profile-img"
              src={user.profilePicture}
              alt="profileImg"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-control"
          value={user.firstName}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-control"
          value={user.lastName}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="">Bio</label>
        <textarea
          className="form-control"
          name="bio"
          id="bio"
          value={user.bio}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="">Location</label>
        <input
          type="text"
          className="form-control"
          name="location"
          id="location"
          value={user.location}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="">Date of Birth</label>
        <input
          type="text"
          className="form-control"
          value={user.dateOfBirth}
          name="dateOfBirth"
          id="dateOfBirth"
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default EditProfile;
