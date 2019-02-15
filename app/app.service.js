"use strict";

function ProfileService($location) {
  const self = this;
  self.userProfile = {
    
    name: "Matt",
    contact: "mamroue@yahoo.com",
    bio: "I love tech"
  }

  self.getUserProfile  = function() {
    return self.userProfile;
  };
  self.setUserProfile = function(userProfile) {
    self.userProfile = userProfile;
    $location.path("/profile");
    console.log(userProfile);
  };
  self.editProfile = function() {
    $location.path("/editProfile");
  }
}

angular
  .module("ProfileApp")
  .service("ProfileService", ProfileService)