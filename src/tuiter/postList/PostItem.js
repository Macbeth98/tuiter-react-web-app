/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const PostItem = ({
  postItem = {
    avatarIcon: '../../images/onepieceprofileimg.jpg',
    userName: 'One Piece',
    handle: 'OnePieceAnime',
    time: '23h',
    title:
      "Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.",
    postImg: '../../images/post2.jpeg',
    imgTitle:
      'Wow! #OnePieceFilmRed is nominated for Best Film AND Best Anime Song...',
    imgDesc: '(""New Genesis"" by Ado) at @TheAnimeAwards! VOTE NOW:',
    link: 'got.cr/AA23SVOTE-TW',
    comments: '123',
    reTweets: '1006',
    likes: '8,835',
  },
}) => {
  return (
    <div>
      <div className="wd-padding-top-12">
        <div className="wd-grid-col-10">
          <div className="wd-padding-left-16">
            <img
              src={postItem.avatarIcon}
              alt="user"
              className="wd-profile-icon"
            />
          </div>
        </div>

        <div className="wd-grid-col-90">
          <div className="wd-padding-left-12 wd-padding-right-16">
            <span className="wd-text-size-15">
              {postItem.userName}{' '}
              <i className="fa fa-solid fa-circle-check"></i>{' '}
              <span className="wd-text-color-two">
                {' '}
                @{postItem.handle} . {postItem.time}
              </span>
            </span>
            <span className="wd-float-right wd-text-color-two">...</span>
            <br />

            <div className="wd-width-506">
              <span className="wd-text-size-15">{postItem.title}</span>
            </div>

            <div className="wd-border-thin wd-margin-top-12 wd-border-top-curve wd-border-bottom-curve wd-width-min-content">
              <img
                src={postItem.postImg}
                alt="postImg"
                className="wd-post-img"
              />

              <div className="wd-padding-12">
                {postItem.imgTitle}
                <br />
                <span className="wd-text-color-two">
                  {postItem.imgDesc}
                  <br />
                  {postItem.link}
                </span>
              </div>
            </div>

            <div className="wd-margin-top-12 wd-margin-bottom-12">
              <a
                href="#"
                className="wd-text-decoration-none wd-text-color-two wd-width-25 wd-display-block"
              >
                <i className="fa fa-regular fa-comment"></i>
                <span className="wd-padding-left-12">{postItem.comments}</span>
              </a>

              <a
                href="#"
                className="wd-text-decoration-none wd-text-color-two wd-width-25 wd-display-block"
              >
                <i className="fa fa-duotone fa-retweet"></i>
                <span className="wd-padding-left-12">{postItem.reTweets}</span>
              </a>

              <a
                href="#"
                className="fa fa-solid fa-heart wd-text-decoration-none wd-text-color-red wd-width-25"
              >
                <span className="wd-padding-left-12">{postItem.likes}</span>
              </a>

              <a
                href="#"
                className="wd-text-decoration-none wd-text-color-two wd-display-block"
              >
                <i className="fa fa-solid fa-arrow-up-from-bracket"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="wd-line-separator wd-clear" />
    </div>
  );
};

export default PostItem;
