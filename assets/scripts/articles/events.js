'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const api = require('./api');
const ui = require('./ui');

const onMenu = function(event) {
  event.preventDefault();
  api.index()
    .then(ui.indexSuccess)
  // .catch(ui.failure)
  ;
};

const onGetUserArticles = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.article.id.length === 0) {
    $('#searchbar-user').text('Please Enter a Valid ID Number.');
  } else {
    api.showUser(data.article.id)
      .then(ui.showSuccess)
      .catch(ui.showUserFailure)
    ;
  }
};

const onGetArticles = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.article.id.length === 0) {
    $('#searchbar').text('Please Enter a Valid ID Number.');
  } else {
    api.show(data.article.id)
      .then(ui.showSuccess)
      .catch(ui.showFailure)
    ;
  }
};

const onCreateArticles = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
  ;
};

const onUpdateArticles = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.dataset.id;
  api.update(id, data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
  ;
};

const onDestroyArticles = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  console.log('delete');
  api.destroy(id)
    .then(ui.destroySuccess)
  // .catch(ui.failure)
  ;
};



const addHandlers = () => {
  $('#edit-modal').hide();
  $('#edit-article').hide();
  $('#post-article').hide();
  $('#post-modal').hide();
  $('.btn-danger').hide();
  $('#article-search-user').hide();
  $('#menu').on('submit', onMenu);
  $("#article-search-user").on('submit', onGetUserArticles);
  $("#article-search").on('submit', onGetArticles);
  $(".content").on('click', ".article-destroy", onDestroyArticles);
  $(".content").on('submit', "#edit-article", onUpdateArticles);
  $("#post-article").on('submit', onCreateArticles);
};

module.exports = {
  addHandlers,
};
