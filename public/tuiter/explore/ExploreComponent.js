import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
  return `
    <div class="row">
      <div class="col-11">
        <div class="input-group mb-3 wd-margin-bottom">
          <span class="input-group-text wd-search wd-search-icon-color"><i class="fas fa-regular fa-magnifying-glass"></i></span>
          <input type="text" name="search" id="search" class="form-control wd-input" placeholder="Search Twitter" />
        </div>
      </div>
      <div class="col-1">
        <i class="fa fa-solid fa-gear fa-2x wd-color-primary2 wd-float-right"></i>
      </div>
    </div>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
    </div>

    <div>
      <li class="list-group-item wd-padding-0">
        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
          class="wd-width-full" alt="" />
        <h2 class="wd-text-on-img">SpaceX's Starship</h2>
      </li>
      ${PostSummaryList()}
    </div>
    `;
};

export default ExploreComponent;
