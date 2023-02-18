/* eslint-disable no-undef */
import NavigationSidebar from '../NavigationSidebar/index.js';
import PostList from '../PostList/index.js';
import PostSummaryList from '../PostSummaryList/index.js';

function HomeScreenComponent() {
  $('#wd-home').append(`

    <div class="row mt-2">
    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
      <!-- <h3>NavigationSidebar</h3> -->
      ${NavigationSidebar('home')}
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 wd-padding-0 wd-border-center">
      ${PostList()}
    </div>
    <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none wd-padding-right-0">
      <!-- <h3>PostSummaryList </h3> -->
      ${PostSummaryList()}
    </div>
    </div>

  `);
}

$(HomeScreenComponent);
