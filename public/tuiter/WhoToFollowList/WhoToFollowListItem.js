function WhoToFollowListItem(who) {
  return `
    <li class="list-group-item">
      <div class="row me-0">
        <div class="col-xxl-2 col-xl-2 col-lg-2 wd-padding-0">
          <img src="${who.avatarIcon}" class="wd-img-48 wd-border-radius-48" alt="avatarIcon" />
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <b>${who.userName}</b>
          <i class="fa fa-solid fa-circle-check"></i>
          <br />
          @${who.handle}
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4 wd-padding-0">
          <button class="btn btn-primary wd-border-radius">follow</button>
        </div>
      </div>
    </li>
    `;
}

export default WhoToFollowListItem;
