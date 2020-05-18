const StoreInput = (props) => {
  props = {
    Name: document.querySelector('#EntryName').value,
    Email: document.querySelector('#EMail').value,
    Message: document.querySelector('#Message').value,
  };

  let FormEntry = { ...props };

  typeof Storage !== 'undefined'
    ? console.log('Info : ' + FormEntry)
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
  AppendValueToStorage('Info', FormEntry);
  document.forms[0].reset();
};

export default StoreInput;
