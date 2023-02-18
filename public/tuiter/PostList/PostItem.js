const PostItem = (postItem) => {
  return `
    <div class="wd-padding-top-12">

      <div class="wd-grid-col-10">
        <div class="wd-padding-left-16">
          <img src="${postItem.avatarIcon}" alt="user" class="wd-profile-icon" />
        </div>
      </div>

      <div class="wd-grid-col-90">

        <div class="wd-padding-left-12 wd-padding-right-16">

          <span class="wd-text-size-15">${postItem.userName} <i class="fa fa-solid fa-circle-check"></i> <span class="wd-text-color-two"> @${postItem.handle} . ${postItem.time}</span></span>
          <span class="wd-float-right wd-text-color-two">...</span>
          <br />

          <div class="wd-width-506">
            <span class="wd-text-size-15">
              ${postItem.title}
            </span>

          </div>

          <div class="wd-border-thin wd-margin-top-12 wd-border-top-curve wd-border-bottom-curve wd-width-min-content">
            <img src="${postItem.postImg}" alt="postImg" class="wd-post-img" />

            <div class="wd-padding-12">
              ${postItem.imgTitle}
              <br />
              <span class="wd-text-color-two">
                ${postItem.imgDesc}
                <br />
                ${postItem.link}
              </span>
            </div>
          </div>

          <div class="wd-margin-top-12 wd-margin-bottom-12">
            <a href="#" class="wd-text-decoration-none wd-text-color-two wd-width-25 wd-display-block"><i
                class="fa fa-regular fa-comment"></i><span class="wd-padding-left-12">${postItem.comments}</span></a>

            <a href="#" class="wd-text-decoration-none wd-text-color-two wd-width-25 wd-display-block"><i
                class="fa fa-duotone fa-retweet"></i><span class="wd-padding-left-12">${postItem.reTweets}</span></a>

            <a href="#" class="fa fa-solid fa-heart wd-text-decoration-none wd-text-color-red wd-width-25"><span
                class="wd-padding-left-12">${postItem.likes}</span></a>

            <a href="#" class="wd-text-decoration-none wd-text-color-two wd-display-block"><i
                class="fa fa-solid fa-arrow-up-from-bracket"></i></a>
          </div>
        </div>


      </div>

    </div>


    <hr class="wd-line-separator wd-clear" />
    `;
};

export default PostItem;
