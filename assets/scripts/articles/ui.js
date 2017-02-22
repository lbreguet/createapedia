'use strict';

const showArticlesTemplate = require('../templates/article-listing.handlebars');
const showArticleTemplate = require('../templates/article-show.handlebars');


const indexSuccess = (data) => {
  console.log(data);
  let showArticlesHtml = showArticlesTemplate({ articles: data.articles });
  $('.content').empty().append(showArticlesHtml);
};

const showSuccess = (data) => {
  console.log(data);
  let showArticleHtml = showArticleTemplate({ article: data.article });
  $('.content').empty().append(showArticleHtml);
  $('.show-input').val('');
};

const createSuccess = (data) => {
  $('#myModal').modal('hide');
  $('.post-title').val('');
  $('.post-description').val('');
  $('.post-body').val('');
  console.log(data);
};

const updateSuccess = (data) => {
  $('#exampleModal').modal('hide');
  $('.edit-id').val('');
  $('.edit-title').val('');
  $('.edit-description').val('');
  $('.edit-body').val('');
  console.log(data);
};

const destroySuccess = (data) => {
  console.log(data);
};


const failure = (error) => {
  // handles error
  console.error(error);
};


module.exports = {
  indexSuccess,
  showSuccess,
  createSuccess,
  updateSuccess,
  destroySuccess,
  // success,
  failure
};
