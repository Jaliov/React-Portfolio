import React from 'react';

const StoreInput = (props) => {
  props = {
    name: document.querySelector('#entryName').value,
    email: document.querySelector('#eMail').value,
    message: document.querySelector('#message').value,
  };

  let FormEntry = { ...props };

  typeof Storage !== 'undefined'
    ? console.log('Info : ' + FormEntry)
    : (document.getElementById('name').innerHTML =
        'Sorry, your browser does not support Web Storage...');

  let appendValueToStorage = (key, value) => {
    let retrievedInput = JSON.parse(localStorage.getItem(key));
    if (retrievedInput === null) {
      retrievedInput = [];
    }

    retrievedInput.push(value);
    localStorage.setItem(key, JSON.stringify(retrievedInput));
    console.log(localStorage.getItem(key));
  };
  appendValueToStorage('Info', FormEntry);
  document.forms[0].reset();
};

export default StoreInput;
