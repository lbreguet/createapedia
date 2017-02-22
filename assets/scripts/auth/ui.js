'use strict';

const signUpSuccess = () => {
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('#sign-up').hide();
};

const signInSuccess = () => {
  $('#sign-up').hide();
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('.signin-email').val('');
  $('.signin-password').val('');
  $('#sign-in').hide();
  $('#change-password').show();
  $('#edit-modal').show();
  $('#post-modal').show();
  $('#sign-out').show();
  $('.article-destroy').show();
  $('#edit-article').show();
  $('#post-article').show();
  $('#article-search').hide();
  $('#article-search-user').show();
};

const changePasswordSuccess = () => {
  $('.new-password').val('');
  $('.old-password').val('');
};

const signOutSuccess = () => {
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('.article-destroy').hide();
  $('#edit-article').hide();
  $('#edit-modal').hide();
  $('#post-modal').hide();
  $('#post-article').hide();
  $('#article-search').show();
  $('#article-search-user').hide();
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
