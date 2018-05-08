/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function(){

    function Start() {
        console.log("App Started!");
        console.log("----------------------------");
        console.log("Hello, World!");
    }

    window.onload = Start;
})();