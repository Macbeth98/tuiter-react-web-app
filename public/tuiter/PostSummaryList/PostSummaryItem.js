function PostSummaryItem(post) {
  return `
    <li class="list-group-item wd-padding-right-30">
      <div class="row">
        <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9">
          <span class="wd-text-color-greyish">${post.topic}</span>
          <br />
          <b>
            ${post.userName} <i class="fa fa-solid fa-circle-check"></i> - ${post.time} <br />
            ${post.title}
          </b>
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 wd-main-li-img-col wd-padding-img-0">
          <img src="${post.image}" alt="" class="wd-img-li-main" />
        </div>
      </div>
    </li>
    `;
}

export default PostSummaryItem;
