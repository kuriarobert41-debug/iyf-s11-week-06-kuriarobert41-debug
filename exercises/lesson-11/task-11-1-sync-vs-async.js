// exercises/lesson-11/task-11-1-sync-vs-async.js
// Demonstrates synchronous vs asynchronous behavior and predicts outputs.

console.log("1 - Start");
setTimeout(() => { console.log("2 - This is delayed (2s)"); }, 2000);
console.log("3 - End");

// Exercise: predict the output of the snippet below
console.log('\n--- Exercise prediction example ---');
console.log('Code:');
console.log('console.log("A");');
console.log('setTimeout(() => console.log("B"), 0);');
console.log('console.log("C");');
console.log('setTimeout(() => console.log("D"), 100);');
console.log('console.log("E");\n');

console.log('Running the snippet now...');
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
setTimeout(() => console.log('D'), 100);
console.log('E');

// Prediction (explanation):
// Output order: A, C, E, B, D
// Reason: setTimeout(..., 0) schedules B on the event loop after current call stack finishes, so B runs after synchronous logs A, C, E. D runs after 100ms.
