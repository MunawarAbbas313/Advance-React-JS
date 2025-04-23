1. Map related :
Absolutely! Here are some **commonly asked interview questions** based on the **`map()` method** in JavaScript and React:

---

## 🔹 **JavaScript `map()` Interview Questions**

### 1. **What is the difference between `map()` and `forEach()`?**
> - `map()` returns a **new array**, while `forEach()` does not.
> - `map()` is used when you want to **transform** data.

---

### 2. **Does `map()` mutate the original array?**
> - **No**, `map()` returns a new array and does **not change** the original.

---

### 3. **Can you show an example where `map()` is used to convert numbers into strings?**
```js
const nums = [1, 2, 3];
const strings = nums.map(num => num.toString());
console.log(strings); // ['1', '2', '3']
```

---

### 4. **What happens if you don’t return a value inside `map()`?**
> The new array will have `undefined` at each index.

```js
const arr = [1, 2, 3];
const result = arr.map(num => { num * 2 }); 
// ❌ result = [undefined, undefined, undefined] 
```

**Fix:** Use `return` or arrow function without curly braces.

---

## 🔹 **React-Specific `map()` Questions**

### 5. **How do you use `map()` to render a list of items in React?**
> - By returning JSX inside `map()`.

```jsx
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

---

### 6. **Why is a `key` prop needed when using `map()` in React?**
> - React uses `key` to **identify** which items have changed/updated/deleted.
> - Improves performance during re-rendering.

---

### 7. **What happens if you don’t include the `key` prop in a mapped list?**
> - React will log a **warning** and might behave unexpectedly during re-renders.

---

### 8. **Can `map()` be used inside `useEffect` or other hooks?**
> - Yes, you can use `map()` inside any hook or function as long as it returns a valid array.

---

### 9. **What’s a common mistake when using `map()` in JSX?**
> - Forgetting to use `return` when using curly braces:
```jsx
items.map(item => {
  return <li>{item}</li>; // ✅
});
```

---

### 10. **Can you use `async/await` with `map()`?**
> Not directly. `map()` is **not async-aware**. Use `Promise.all()`:
```js
const results = await Promise.all(items.map(async item => await fetch(item)));
```

---
------------------------------------------------------------------------------------------
