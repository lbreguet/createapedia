'use strict';

const signUpSuccess = () => {
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('#sign-up').hide();
  $('.signup-failure').text('');
};

const signUpFailure = () => {
  $('.signup-failure').text('This user already exists. Please choose another email.');
};

const signInSuccess = () => {
  $('#sign-up').hide();
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('.signin-email').val('');
  $('.signin-password').val('');
  $('#sign-in').hide();
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('#sign-up').hide();
  $('.signup-failure').text('');
  $('#change-password').show();
  $('#edit-modal').show();
  $('#post-modal').show();
  $('#sign-out').show();
  $('.article-destroy').show();
  $('#edit-article').show();
  $('#post-article').show();
  $('#article-search').hide();
  $('#article-search-user').show();
  $('.signin-failure').text('');
};

const signInFailure = () => {
  $('.signin-failure').text('The email and/or password do not match. Try Again.');
};

const changePasswordSuccess = () => {
  $('.new-password').val('');
  $('.old-password').val('');
  $('.changepw-failure').text('');

};

const changePasswordFailure = () => {
  $('.changepw-failure').text('Type in the password associated with this account!');
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
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  failure
};
