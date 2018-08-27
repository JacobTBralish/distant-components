# Redux

## What's the problem with distant components in React?

Like the telephone game, it's unreliable to share data through too many middlemen.

## What is Redux? Why/when do we use it?

Redux is a global data store. We use it whenever it's less painful than props drilling.

## What are the steps to add Redux to a React app?

* Steps for redux
  * READ
    * create store in store file
    * in index.js, use Provider and pass in store
    * use connect in each component to read data from store
  * WRITE
    * still connect component (same as before)
      * In component, dispatch actions to store
    * Create reducer file
      * Create reducer function
      * Create action names
      * Make action creator functions


## What is a store?
A store holds data. It also has a reducer. Analogy: it's like a grocery store with groceries, and the reducer is the receiving/stocking department.

## What is a reducer? What does the reducer do for us in Redux?
A reducer is a function that takes in some state and an action, and outputs the new state.

## What is immutability? Why do we use it?
Immutability is when we don't mutate data (objects, arrays), but instead we copy the data first, and then mutate that.

We use it because it is more efficient to check for a single change in reference than (potentially) many more checks in property values.