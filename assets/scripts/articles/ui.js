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
  $('#searchbar-user').text('');
  $('#searchbar').text('');
};

const showUserFailure = () => {
  $('#searchbar-user').text('Please Enter a Valid ID Number.');
};

const showFailure = () => {
  $('#searchbar').text('Please Enter a Valid ID Number.');
};

const createSuccess = () => {
  $('#myModal').modal('hide');
  $('.post-title').val('');
  $('.post-description').val('');
  $('.post-body').val('');
  $('.content').empty();
  $('.create-failure').text('');
};

const createFailure = () => {
  $('.create-failure').text('Please fill in all of the blanks.');
};

const updateSuccess = () => {
  $('#exampleModal').modal('hide');
  $('.edit-title').val('');
  $('.edit-description').val('');
  $('.edit-body').val('');
  $('.content').empty();
  $('.update-failure').text('');
};

const updateFailure = () => {
  $('.update-failure').text('Please fill in all of the blanks.');
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
  showUserFailure,
  showFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  failure
};
