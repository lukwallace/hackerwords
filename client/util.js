module.exports = {
  storeToken: function(data) {
    window.localStorage.setItem('com.hackerwords', data.token);
  }
}

