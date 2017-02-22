'use strict';

const signUpSuccess = (data) => {
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('#sign-up').hide();
  if (data) {
    console.log(data);
  }
};

const signInSuccess = (data) => {
  $('#sign-up').hide();
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('.signin-email').val('');
  $('.signin-password').val('');
  $('#sign-in').hide();
  $('#change-password').show();
  $('#edit-modal').show();
  $('#sign-out').show();
  $('#article-destroy').show();
  $('#edit-article').show();
  $('#post-article').show();
  if (data) {
    console.log(data);
  }
};

const changePasswordSuccess = (data) => {
  $('.new-password').val('');
  $('.old-password').val('');
  if (data) {
    console.log(data);
  }
};

const signOutSuccess = (data) => {
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#article-destroy').hide();
  $('#edit-article').hide();
  $('#edit-modal').hide();
  $('#post-article').hide();
  if (data) {
    console.log(data);
  }
};


const failure = (error) => {
  console.error(error);
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure
};
