module.exports = {
  storeToken(data) {
    window.localStorage.setItem('com.hackerwords', data.token);
  },

  getToken(data) {
    return window.localStorage.getItem('com.hackerwords');
  },

  signOut() {
    console.log('SIGN OUT');
    window.localStorage.removeItem('com.hackerwords');
  },
};

