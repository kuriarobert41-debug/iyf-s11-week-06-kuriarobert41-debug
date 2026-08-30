// exercises/lesson-11/task-11-1-loadUser-callback.js
// Simulate loading a user from a database using a callback-style API.

function loadUser(userId, callback) {
  console.log(`loadUser: looking up user ${userId}...`);
  setTimeout(() => {
    const user = { id: userId, name: 'Alice', email: 'alice@example.com' };
    // callback signature: callback(error, result)
    callback(null, user);
  }, 1500); // simulate 1.5s DB lookup
}

// Example usage:
loadUser(42, (err, user) => {
  if (err) {
    console.error('Error loading user:', err);
    return;
  }
  console.log('User loaded:', user);
});

// Export for testing if required
module.exports = { loadUser };
