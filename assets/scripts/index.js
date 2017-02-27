'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const auth = require('./auth/events');
const articles = require('./articles/events');

$(() => {
  auth.addHandlers();
  articles.addHandlers();
  let password = document.getElementById("password"),
    password_confirmation = document.getElementById("password_confirmation");

  function validatePassword() {
    if (password.value !== password_confirmation.value) {
      password_confirmation.setCustomValidity("Passwords Don't Match!");
    } else {
      password_confirmation.setCustomValisdity('');
    }
  }

  password.onchange = validatePassword;
  password_confirmation.onkeyup = validatePassword;
});
