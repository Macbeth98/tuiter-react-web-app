function NavigationSidebar(activeComponent) {
  return `
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action"><i class="fab fa-twitter"></i></a>
    <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${
      activeComponent === 'home' ? 'active' : ''
    }" id="home"><i class="fa fa-solid fa-house-chimney"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float"> Home</span></a>
    <a href="../exploreScreen/index.html" class="list-group-item list-group-item-action ${
      activeComponent === 'explore' ? 'active' : ''
    }" id="explore"><i class="fa fa-regular fa-hashtag"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float"> Explore</span></a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-solid fa-bell"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float">
        Notifications</span></a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-solid fa-envelope"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float">
        Messages</span></a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-solid fa-bookmark"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float">
        Bookmarks</span></a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-regular fa-list"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float"> Lists</span></a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-solid fa-user"></i>
      <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float"> Profile</span></a>
    <a href="#" class="list-group-item list-group-item-action">
      <span class="wd-padding-left-19">
        <i class="fa fa-circle fa-stack fa-stack-1x wd-text-align-padding-left"><i
            class="fa-ellipsis-h fa-stack-1x fa-inverse wd-text-align-padding-left"></i></i>
        <span class="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none wd-block-float"> More</span>
      </span>
    </a>
    </div>
    <div class="wd-margin-top-8">
      <button class="btn btn-primary wd-width-full wd-border-radius">Tweet</button>
    </div>
    `;
}

export default NavigationSidebar;
