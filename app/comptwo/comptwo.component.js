"use strict";
const compTwo = {
  template: `
  <div class="profileWrapper">
    <section class="profileContents">
      <h1>Name: <span> {{ $ctrl.userProfile.name }} </span></h1>
      <p>Contact: <span> {{ $ctrl.userProfile.contact }} </span></p>
      <p>Bio: <span> {{ $ctrl.userProfile.bio }} </span></p>
      <button ng-click="$ctrl.editProfile()">Edit</button>
    </section>
  </div>
  `,
  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.userProfile = ProfileService.getUserProfile();
    vm.editProfile = function() {
      ProfileService.editProfile();
    };
  }]
};

angular.module("ProfileApp").component("compTwo", compTwo);