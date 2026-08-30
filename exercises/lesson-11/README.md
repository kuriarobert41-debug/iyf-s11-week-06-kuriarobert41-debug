# Lesson 11 — Asynchronous JavaScript (Callbacks, Promises, Async/Await)

This folder contains several small, runnable Node.js examples that demonstrate the common async patterns covered in the Week 6 exercises.

Files
- task-11-1-sync-vs-async.js — (already added) shows synchronous vs asynchronous logs and the setTimeout behavior.
- task-11-1-loadUser-callback.js — simulated DB lookup using the callback pattern.
- task-11-2-callback-hell-demo.js — nested callbacks (pyramid of doom) demonstration.
- task-11-2-promises.js — refactor of the pyramid example using Promises and chaining.
- task-11-2-async-await.js — same flow written with async/await for clearer control flow.

How to run
- Requires Node.js (recommended v16+; Node 18+ includes built-in fetch if you use network examples later)
- From the repo root run, for example:
  - node exercises/lesson-11/task-11-1-sync-vs-async.js
  - node exercises/lesson-11/task-11-1-loadUser-callback.js
  - node exercises/lesson-11/task-11-2-callback-hell-demo.js
  - node exercises/lesson-11/task-11-2-promises.js
  - node exercises/lesson-11/task-11-2-async-await.js

Notes
- These examples are intentionally small and synchronous-looking in the async/await version to emphasize readability improvements.
- You can import or require the modules in your own test files if you want to write unit tests.
