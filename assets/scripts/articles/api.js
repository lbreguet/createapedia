'use strict';

const config = require('../config');
const store = require('../store');

const index = function() {
  return $.ajax({
    url: config.apiOrigin + '/articles',
    method: 'GET'
  });
};

const show = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'GET'
  });
};

const showUser = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

const create = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/articles',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  });
};

const update = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  });
};

const destroy = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/articles/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};



module.exports = {
  index,
  show,
  showUser,
  create,
  update,
  destroy
};
