'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const api = require('./api');
const ui = require('./ui');

const onMenu = function (event) {
  event.preventDefault();
  api.index()
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const onGetArticles = function (event) {
  event.preventDefault();
  let data =  getFormFields(event.target);

  if (data.article.id.length === 0) {
    api.show.then(ui.failure);
  } else {
    api.show(data.article.id)
    .then(ui.showSuccess)
    .catch(ui.failure);
  }
};

const onCreateArticles = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.create(data)
  .then(ui.createSuccess)
  .catch(ui.failure);
};

const onUpdateArticles = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.update(data.article.id, data)
  .then(ui.updateSuccess)
  .catch(ui.failure);
};

const onDestroyArticles = function (event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  console.log('delete');
  let data = getFormFields(event.target);
  api.destroy(id)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};



const addHandlers = () => {
  $('#edit-modal').hide();
  $('#edit-article').hide();
  $('#post-article').hide();
  $('#article-destroy').hide();
  $('#menu').on('submit', onMenu);
  $("#article-search").on('submit', onGetArticles);
  $(".content").on('click', ".article-destroy", onDestroyArticles);
  $("#edit-article").on('submit', onUpdateArticles);
  $("#post-article").on('submit', onCreateArticles);
};

module.exports = {
  addHandlers,
};
