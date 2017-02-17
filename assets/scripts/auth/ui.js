'use strict';

// const success = (data) => {
//   // handles success
//   if (data) {
//     console.log(data);
//   }
// };

const signUpSuccess = (data) => {
  $('#sign-up').hide().val('');
  if (data) {
    console.log(data);
  }
};

const signInSuccess = (data) => {
  $('#sign-up').val('');
  $('#sign-in').val('');
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#article-destroy').show();
  $('#edit-article').show();
  $('#post-article').show();
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
  $('#post-article').hide();
  if (data) {
    console.log(data);
  }
};


const failure = (error) => {
  // handles error
  console.error(error);
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  // success,
  failure
};
