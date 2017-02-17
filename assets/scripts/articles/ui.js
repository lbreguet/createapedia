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
  let showArticlesHtml = showArticlesTemplate({ articles: data.articles });
  $('.content').empty().append(showArticlesHtml);
  console.log(data);
};

const updateSuccess = (data) => {
  let showArticleHtml = showArticleTemplate({ article: data.article });
  $('.content').empty().append(showArticleHtml);
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
