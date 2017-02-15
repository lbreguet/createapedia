'use strict';

const config = require('../config');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/articles',
    method: 'GET'
  });
};

const show = function  (id) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'GET'
  });
};

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/articles',
    method: 'POST',
    data
  });
};

const update = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'PATCH',
    data
  });
};

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'DELETE'
  });
};



module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
