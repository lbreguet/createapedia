'use strict';

const showArticlesTemplate = require('../templates/article-listing.handlebars');
const showArticleTemplate = require('../templates/article-show.handlebars');


const indexSuccess = (data) => {
  let showArticlesHtml = showArticlesTemplate({ articles: data.articles });
  $('.content').empty().append(showArticlesHtml);
};

const showSuccess = (data) => {
  let showArticleHtml = showArticleTemplate({ article: data.article });
  $('.content').empty().append(showArticleHtml);
  $('.show-input').val('');
};

const createSuccess = () => {
  $('#myModal').modal('hide');
  $('.post-title').val('');
  $('.post-description').val('');
  $('.post-body').val('');
  $('.content').empty();
};

const updateSuccess = () => {
  $('#exampleModal').modal('hide');
  $('.edit-title').val('');
  $('.edit-description').val('');
  $('.edit-body').val('');
  $('.content').empty();
};

const destroySuccess = () => {
  $('.content').empty();
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
  failure
};
