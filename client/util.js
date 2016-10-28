module.exports = {

  /** Store session token locally */
  storeToken(data) {
    window.localStorage.setItem('com.hackerwords', data.token);
  },

  /** Get current session token, if any */
  getToken() {
    if (window.localStorage === undefined) {
      return undefined;
    }
    return window.localStorage.getItem('com.hackerwords');
  },

  /** Sign user out and destroy session token */
  signOut() {
    console.log('SIGN OUT');
    window.localStorage.removeItem('com.hackerwords');
  },
};

