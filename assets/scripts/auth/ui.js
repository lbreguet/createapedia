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
  $('#searchbar-user').text('');
  $('#searchbar').text('');
};

const signInFailure = () => {
  $('.signin-failure').text('The email and/or password do not match with existing user. Try Again.');
};

const changePasswordSuccess = () => {
  $('.new-password').val('');
  $('.old-password').val('');
  $('.changepw-failure').text('Password has been successfully updated!');

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
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('.signup-failure').text('');
  $('.new-password').val('');
  $('.old-password').val('');
  $('.changepw-failure').text('');
  $('.signup-email').val('');
  $('.signup-password').val('');
  $('.signin-email').val('');
  $('.signin-password').val('');
  $('.edit-title').val('');
  $('.edit-description').val('');
  $('.edit-body').val('');
  $('.content').empty();
  $('.update-failure').text('');
  $('.post-title').val('');
  $('.post-description').val('');
  $('.post-body').val('');
  $('.create-failure').text('');
  $('#searchbar-user').text('');
  $('#searchbar').text('');
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
