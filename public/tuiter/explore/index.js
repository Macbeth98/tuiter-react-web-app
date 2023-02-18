/* eslint-disable no-undef */
// alert('Hello World!');

import NavigationSidebar from '../NavigationSidebar/index.js';
import WhoToFollowList from '../WhoToFollowList/index.js';
import ExploreComponent from './ExploreComponent.js';

function exploreComponent() {
  $('#wd-explore').append(`

    <div class="row mt-2">
    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
      <!-- <h3>NavigationSidebar</h3> -->
      ${NavigationSidebar('explore')}
    </div>
    <div class="col-xxl-7 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 wd-padding-0">
      <!-- <h3>ExploreComponent</h3> -->
      ${ExploreComponent()}
    </div>
    <div class="col-xxl-3 col-xl-4 col-lg-4 d-none d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">
      <!-- <h3>WhoToFollowList </h3> -->
      ${WhoToFollowList()}
    </div>
    </div>

  `);
}

$(exploreComponent);
