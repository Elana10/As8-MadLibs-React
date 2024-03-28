### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a frontend packaging system that allows developers to create components that can be reused. You use it with any website with redundant features or functions. 

- What is Babel?
    Babel is a language translation software. When used with react it translates JSX into JavaScript. 

- What is JSX?
    JSX is a code used for react that builds components. 

- How is a Component created in React?
    A component is created by making a new JS file with the component name. Into the JS file you can export the component at the bottom with the component name. 

- What are some difference between state and props?
    State is consistent in a react component beyond a refresh or rendering of the component. A prop is a variable that is passed into a component and NEW - or needs to be sent again - every time the component refreshes. 

- What does "downward data flow" refer to in React?
    Components in react are nested. 

- What is a controlled component?
    This is a component with elements that are stored in state and rendered by the values that are IN the state. 

- What is an uncontrolled component?
    An uncontrolled component could be a data input field that is NOT stored in state until it is submitted. 

- What is the purpose of the `key` prop when rendering a list of components? 
    Key props help react identify which items have changed, are added or removed. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? 
    If the array added to or deleted from anyway then the key prop might change for a given element. Key props should remain constant, like a barcode. 

- Describe useEffect.  What use cases is it used for in React components?
    useEffect will render on the first load AND when ever an input variable changes. This helps us control when a component refreshes. Right now components refresh every time a state element is changed. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef accepts a value on load and does not refresh when the value is updated. 

- When would you use a ref? When wouldn't you use one?
    useRef is good for assigning HTML values similar to what you would use in javascript like: document.querySelector('element') Now if you are using react you can easily add a component to the element. 

- What is a custom hook in React? When would you want to write one?
    I custom hook is a function that holds state outside of a component and can be called within the component when needed. Custom hooks are good for any repeated functions or procedures in a code. 
