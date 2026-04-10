// let's learn the JavaScript

const JSQuestion = [

    {
        ques: "What is Javascript?",
        answer: "JavaScript is a high-level, interpreted programming language used to make web pages interactive. It can manipulate the DOM, handle events, and also run on servers using environments like Node.js."
    },
    {
        ques: "What is DOM",
        answer: "DOM is a programming interface that represents an HTML document as a tree structure, allowing JavaScript to interact with and modify the webpage."
    },
    {   ques: "What is the difference between var, let, and const?", 
        answer: `
        var, let, and const are used to declare variables, but they differ in scope, hoisting, and mutability.
        var → function-scoped, gets hoisted with an initial value of undefined, can cause unexpected bugs.
        let → block-scoped and also hoisted, but not initialized (Temporal Dead Zone), safer than var.
        const → block-scoped, cannot be reassigned, but objects and arrays inside const can still be modified.
        `
    },
    { ques: "what is Hoisting", answer: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during compilation, allowing the code to use them before actual declaration." },
    
    { ques: "what is asynchronous & synchronous", answer: `
        
        Synchronous code runs one task at a time, in order.
        Each task must finish before the next one starts.

        Asynchronous code allows a task to start and then continue later,
        so other code can run without waiting. It does not block the main thread.

        ` },
    { ques: "Explain closures with real-world use cases.", answer: `
        A closure is a feature in JavaScript where an inner function remembers and can access variables from its outer function's scope, even after the outer function has finished executing.

        ` },
    { ques: "What are higher-order functions?", answer: `A higher-order function is a function that either takes another function as an argument, returns a function, or does both.
        
        function greet(name) {
            console.log("Hello " + name);
            }

        function processUser(callback) {
            callback("Gautam");
        }

        processUser(greet);
        
        ` },
    { ques: "What are pure functions and why are they important?", answer: "A pure function is a function that always returns the same output for the same input and does not cause any side effects." },
    { ques: "What is currying in JavaScript?", answer: `Currying in JavaScript is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nested functions, each taking one argument at a time.
        
        
        function curryAdd(a) {
            return function (b) {
                return function (c) {
                return a + b + c;
                }
            }
            }

            console.log(curryAdd(1)(2)(3));

        ` },
    { ques: "Explain the concept of prototypal inheritance.", answer: `
        
        Prototypal inheritance means that every JavaScript object has an internal link to another object called its prototype.
        If a property or method is not found on the object itself, JavaScript looks up the chain (the prototype chain) to find it.

        const person = {
            greet() {
                return "Hello!";
            }
        };

        const student = Object.create(person);
        console.log(student.greet()); // "Hello!"



        Here's what happens:
            student has no greet() method.
            JavaScript checks its prototype (person).
            Finds greet() → returns "Hello!"
        ` },
    { ques: "What is debouncing and throttling?", answer: `
        Both debouncing and throttling are techniques used to control how often a function is executed, especially for events that fire very frequently (scroll, resize, keypress, mousemove, input, etc.).

        Debouncing means:
        "Wait for a certain period of inactivity before running the function."


        function debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
        }
        
        Throttling means:
        "Allow the function to run only once in a fixed time interval."

        function throttle(fn, delay) {
            let lastCall = 0;
            return function (...args) {
                const now = Date.now();
                if (now - lastCall >= delay) {
                lastCall = now;
                fn.apply(this, args);
                }
            };
        }
        
        ` },
    { ques: "Explain call(), apply(), and bind().", answer: `
        
        All three are JavaScript methods used to manually set the this context for a function.
        They belong to Function.prototype, meaning every function in JS can access them.


        call() immediately invokes the function with a specified this and individual arguments.

        apply() is similar to call(), but it takes arguments as an array. (apply is used for maths things for example : 
        
        const nums = [5, 1, 10, 20];
        const max = Math.max.apply(null, nums);
        console.log(max); // 20
        
        )

        bind() does not execute immediately. It returns a new function with the this context permanently set.
` },
    { ques: "Explain shadow copy vs deep copy.", answer: `
        
        
        A shallow copy copies only the first level of an object/array.
        Nested objects still share the same reference.


        const user = {
            name: "Gautam",
            address: { city: "Delhi" }
        };

        const copy = { ...user }; // shallow copy

        copy.address.city = "Mumbai";

        console.log(user.address.city);  // Mumbai ❌



        A deep copy clones all levels, including nested objects.
        The copied object is 100% independent from the original.


        const user = {
            name: "Gautam",
            address: { city: "Delhi" }
        };

        const deepCopy = JSON.parse(JSON.stringify(user));

        deepCopy.address.city = "Mumbai";

        console.log(user.address.city); // Still "Delhi" ✅




        ` },

    { ques: "Explain JavaScript garbage collection.", answer: `
        
        JavaScript uses automatic garbage collection, mainly based on reachability.
        If an object cannot be reached from roots like global scope or active functions, it is removed.
        JS engines use a mark-and-sweep algorithm.
        Memory leaks happen when unreachable memory mistakenly stays referenced (e.g., timers, listeners, closures).
        WeakMap and WeakSet help avoid leaks because their references are weak.
        ` },

    ]


const ReactQuestions = [
    
    { ques: "What is the virtual DOM?", answer: `The Virtual DOM is an in-memory representation of the real DOM.
When state changes, React updates the Virtual DOM first, compares it with the previous version using a diffing algorithm, and then updates only the changed parts of the real DOM. This makes UI updates faster and more efficient.` },


    { ques: "What are React hooks?", answer: "React Hooks are built-in functions that allow functional components to use features like state, lifecycle methods, and side effects without writing class components." },
    { ques: "Explain the useEffect() hook and its dependency array.", answer: `
        
        useEffect is a hook for managing side effects like API calls, timers, or event listeners. The dependency array controls when the effect runs:

No dependencies → runs on every render

Empty array [] → runs once on mount

Specified dependencies → runs when those values change

Cleanup function helps remove previous side effects.
` },
    { ques: "Difference between useEffect() and useLayoutEffect()?", answer: "useEffect runs after the screen is painted (non-blocking), while useLayoutEffect runs before paint (blocking) and is used for DOM measurements and layout-critical updates." },
    { 
        ques: "What is useRef(), and where do we use it?", 
        answer: `
        useRef() is a React Hook that returns a mutable object whose .current property persists for the entire lifetime of the component.
        Unlike state, changing .current does not trigger a re-render.
        It can be used to access DOM elements directly or store any mutable value.


        useRef is a React hook that returns a persistent, mutable object whose .current value survives across renders. It/s used to access DOM elements directly or store mutable values without causing re-renders.

        ` },


    { ques: "What is memoization in React?", answer: `
        Memoization in React is an optimization technique to cache results of components, functions, or calculations, preventing unnecessary re-renders when inputs (props or dependencies) have not changed.


        React.memo → memoizes components

        useMemo → memoizes computed values

        useCallback → memoizes functions

        Helps avoid unnecessary renders

        Improves performance, especially in large apps
        ` },
    { ques: "", answer: "" },

];


