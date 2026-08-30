// exercises/lesson-11/task-11-2-callback-hell-demo.js
// Demonstrates "callback hell" (pyramid of doom) with nested asynchronous calls.

function getUserData(userId, callback) {
  setTimeout(() => callback(null, { id: userId, name: 'John' }), 1000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => callback(null, [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ]), 1000);
}

function getPostComments(postId, callback) {
  setTimeout(() => callback(null, [
    { id: 1, text: 'Great post!' },
    { id: 2, text: 'Thanks for sharing' }
  ]), 1000);
}

// The pyramid of doom - deeply nested callbacks
getUserData(1, (err, user) => {
  if (err) return console.error(err);
  console.log('User:', user);
  getUserPosts(user.id, (err, posts) => {
    if (err) return console.error(err);
    console.log('Posts:', posts);
    // pick the first post
    const postId = posts[0].id;
    getPostComments(postId, (err, comments) => {
      if (err) return console.error(err);
      console.log('Comments for post', postId, ':', comments);
      // More nested callbacks could continue here, which makes code hard to read and maintain.
    });
  });
});
