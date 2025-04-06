// __mocks__/styleMock.js
module.exports = new Proxy({}, {
    get: function(target, key) {
      // Return the key itself (e.g., styles.className -> 'className')
      // Handles cases like styles['my-class'] too
      if (key === '__esModule') {
           return false;
      }
      return key;
    }
  });
  // Or, for a simpler version if the above causes issues:
  // module.exports = {};