const StoreInput = (props) => {
  props = {
    name: document.querySelector('#entryName').value,
    email: document.querySelector('#eMail').value,
    message: document.querySelector('#Message').value,
  };

  typeof Storage !== 'undefined'
    ? console.log('Info : ' + props.name)
    : (document.getElementById('Name').innerHTML =
        'Sorry, your browser does not support Web Storage...');

  let AppendValueToStorage = (key, value) => {
    let RetrievedInput = JSON.parse(localStorage.getItem(key));
    if (RetrievedInput === null) {
      RetrievedInput = [];
    }

    RetrievedInput.push(value);
    localStorage.setItem(key, JSON.stringify(RetrievedInput));
    console.log(localStorage.getItem(key));
  };
  AppendValueToStorage('Info', props);
  document.forms[0].reset();
};

export default StoreInput;
