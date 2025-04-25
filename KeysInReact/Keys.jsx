const fruits = ["Apple", "Banana", "Mango"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>  // 🔑 key is required here
      ))}
    </ul>
  );
}
```

---

### ⚠️ **Best Practice**
- Prefer using **unique IDs** instead of `index` when possible:

```jsx
const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li> // ✅ better than using index
      ))}
    </ul>
  );
}
