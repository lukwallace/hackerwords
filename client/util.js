/**
 * @file Utility functions used for client side authentication
 */

module.exports = {

  /**
  * This function is used to store session token locally.
  * @method storeToken
  * @param {object} data data object containing token
  */
  storeToken(data) {
    window.localStorage.setItem('com.hackerwords', data.token);
  },

  /**
  * This function is used to get current session token, if any.
  * @method getToken
  */
  getToken() {
    if (window.localStorage === undefined) {
      return undefined;
    }
    return window.localStorage.getItem('com.hackerwords');
  },

  /**
  * This function is used to sign the user out and destroy session token.
  * @method signOut
  */
  signOut() {
    console.log('SIGN OUT');
    window.localStorage.removeItem('com.hackerwords');
  },
};

