# React Native FlatList TypeError: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common error encountered when using FlatList in React Native. The error, `TypeError: Cannot read properties of undefined (reading 'property')`, occurs when trying to access properties of an item in the data array before ensuring that the item exists.  This issue typically arises when the data array is initially empty or when data is being fetched asynchronously.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected implementation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app using your preferred React Native environment (e.g., Expo).
4. Observe the error in the console.

## Solution

The solution involves adding a check to see if the item exists before accessing its properties, ensuring that the code doesn't fail when the data array is empty or if data hasn't yet loaded.