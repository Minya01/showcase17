/*
 * @Author: kael 
 * @Date: 2019-03-23 14:13:33 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 14:27:47
 */

foo(); // TypeError: foo is not a function
bar(); // ReferenceError: bar is not defined

var foo = function bar() {
  // ...
  console.log('bar');
};




