To avoid errors we should import things from client. Client side and not server
side
```javascript
import { createRoot } from "react-dom/client";
```

At App always something must be returned to be rendered
```javascript
export default function App() {
  return (
    <div className="App">
      <AppCounter />
      <AppRandomUser />
    </div>
  );
}
```

in react we can use directly some logic regarding css styles values
like this example of disabled

**className** - we have to use className that is already used by the Javascript API

**for** - is also a reserved word for loops at javascript, so at jsx we use
htmlFor

## VirtualDOM vs DOM
-> DOM (Document Object Model)- interface for web documents that represents the structure of a webpage as a tree of objects. is used to manipulate and render the content and structure of the page in the browser.

-> Virtual DOM is an abstraction of the DOM. React creates a lightweight copy (the Virtual DOM) and makes changes there first. React then compares the Virtual DOM with a previous version using a process called **"reconciliation"**, identifies the differences (or "diffs"), and updates only the parts of the actual DOM that have changed. **improves performance.**

## WHEN TO PUT THINGS OUT (single purposes/ single responsability)  
-> should be individually tested
-> should be used individually
-> to big component

## const Results = ({ pets }) =>
i expecting a prop called x,y,z . so i will destructuting it to take it out
and then use it directly at the component

## don't use spread operator at component usage
-> very implicit
-> pass everything to the component but in the future the component can change
-> and sometimes it will be difficult to understand 
-> it's like to make the contract from that component explicit

just use the spread the operator if is just to pass the props and don't do anything
however i will avoid that to avoid **prop drilling!!!**

## Placeholders for images


# useState
```javascript
import { useState } from "react";

const [location, useLocation] = useState('Porto');
// is like
const locationHook = useState("");
const location = locationHook[0];
const setLocation = locationHook[1];
```
-> everytime that an event happens at React everything is re-rendered

-> the first value is the currentValue of the state

-> the second value is the function responsible to change that value

-> 'Porto' is the default value of location

### onBlur
-> some old React versions must have a function to keep the inputs working
correctly. For that some error appear asking for an onBlur event to remove
the focus if the element is no more selected

### maps
-> react use a lot maps to render a list of the same components. like JS, 
it will return an array of new elements of the component used below the map.
```javascript
{ANIMALS.map((animal) => {
    <option key={animal}>{animal}</option>
})}
```
-> **Without a key,** for react is just an array, so it will destroy and rerender all elements.
-> so we should give to key attribute some **unique identifier in the array!!!**
-> NEVER use index can take to odd issues or at least combine it with something (best solution UUID npm package  )

# useEffect
-> Everytime that react sees an useEffect it will ask,
"ok i have an useEffect, but when an run this effect? And so react will se the
dependency array to check that"
```javascript
import { useEffect } from "react";

// this useEffect() will run everytime that some rerender happens
// NO DEPENDENCY
useEffect(() => {
    requestPets();
})

// this useEffect() will run only in the first render of the page 
// EMPTY ARRAY AS DEPENDENCY, run once only
useEffect(() => {
    requestPets();
}, [])

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
}
```
-> everytime that an event happens at React everything is re-rendered