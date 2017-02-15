'use strict';

// const success = (data) => {
//   // handles success
//   if (data) {
//     console.log(data);
//   }
// };

const indexSuccess = (data) => {
  console.log(data);
};

const showSuccess = (data) => {
  console.log(data);
};

const createSuccess = (data) => {
  console.log(data);

};

const updateSuccess = (data) => {
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
