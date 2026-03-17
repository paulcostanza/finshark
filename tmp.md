

# React

What is the purpose of <code>useState</code>?

Answer: Allows a React component to store and update state valuess. When the state changes, React automatically *re-renders the component* so the UI stays in sync with the data. 

---

What is the difference between props and state in React?

Answer: Props are read-only values that are passed from a parent component to a child component. State is internal data which is managed by a component that can change over time and trigger re-renders. 

---

What is the purpose of <code>useEffect</code> in React? 

Answer: <code>useEffect</code> is used to run *side effects* in a React component, such as fetching data, interacting with APIs, or updating the DOM. It runs after the component renders, and can optionally re-run when specified dependencies change. 

---

What does the dependency array do in <code>useEffect</code>?

```react
useEffect(() => {
    console.log("Hello!")
}, [count]);
```

Answer: The dependency array tells React when the effect should re-run. The effect runs after the first render and then runs again only when one of the values in the dependency array changes.

---

why do React lists need a <code>key</code> prop?

```react
{items.map(item => (
    <li key={item.id}>{item.name}</li>
))}
```

Answer: React uses the <code>key</code> prop to uniquely identify elements in a list so it can update the DOM when an item changes, added, or removed during re-rendering. 

---

What is the difference between a controlled component and an uncontrolled component in React? 

Answer: A **controlled component** is a form element whose value is controlled by React state. An **uncontrolled component** stores its value in the DOM itself, and React access it using things like <code>refs</code>. 

Example of controlled input:

```jsx
const [value, setValue] = useState('');

<input value={value} onChange={(e) => setValue(e.target.value)} />
```

Here we have React controlling the input value through state.

Example of uncontrolled component example using <code>useRef</code>:

```jsx
import {useRef} from 'react';

function MyForm() {
    const inputRef = useRef(null);

    function handleSubmit() {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
```

- <code>useRef()</code> creates a reference to the DOM element
- the input stores its own value in the DOM, *not* in React state
- when the button is clicked, we read the value directly: <code>inputRef.current.value</code>

***Key difference between controlled and uncontrolled***

Controlled: <code><input value={value} onChange={...} /></code>.
React state controles the input

Uncontrolled: <code><input ref={inputRef} /></code>.
The DOM controls the input, and then React reads it when needed.

---

What problem does <code>useCallback</code> solve in React?

<code>useCallback</code> memoizes a function, meaning React keeps the same function instance between renders (does not recreate on every render) unless its dependencies change. This helps prevent unnecessary re-renders in child components that receive the funcction as a prop. It helps with performance optimization. 

```jsx
const handleClick = useCallback(() => {
    console.log('clicked')
}, []);
```

Without <code>useCallback</code>, a new function would be created every render. 

---

What does lifting state up mean in React?

Moving state from a child component to a common parent component so that multiple components can stay synchronized with the same data. 

```console
Parent
 ├── Child A
 └── Child B
```

In our example, if child A and child B both need the same data, the state is moved to Parent, and then passed down through props. 

---

What is the purpose of <code>useContext</code> in React?

Allows components to access shared data from a React context without pasing props through every level of the component tree and is used to avoid prop drilling. 

---

What is the purpose of <code>useMemo</code> in React?







