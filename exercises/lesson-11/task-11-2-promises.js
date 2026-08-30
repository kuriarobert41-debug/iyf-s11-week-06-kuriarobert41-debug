// exercises/lesson-11/task-11-2-promises.js
// Refactor of the callback-hell demo using Promises and chaining.

function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: 'John' }), 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]), 1000);
  });
}

function getPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { id: 1, text: 'Great post!' },
      { id: 2, text: 'Thanks for sharing' }
    ]), 1000);
  });
}

// Using Promise chaining to avoid deep nesting
getUserData(1)
  .then(user => {
    console.log('User:', user);
    return getUserPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
    return getPostComments(posts[0].id);
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(err => {
    console.error('Error:', err);
  });

module.exports = { getUserData, getUserPosts, getPostComments };
