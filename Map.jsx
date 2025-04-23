
/*



---

## 🔹 **What is the `map()` Method?**

In **JavaScript**, the `map()` method is used on **arrays** to create a **new array** by applying a function to **each element** of the original array.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

✅ **Note**: `map()` **does not change** the original array — it returns a **new one**.

---

## 🔹 **Uses of `map()` in React**

In **React**, we mostly use `map()` to dynamically render **lists of components**.

### 🔸 Example: Rendering a list

```jsx
const fruits = ['Apple', 'Banana', 'Orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

## 🔹 **Benefits of Using `map()`**

| Benefit | Explanation |
|--------|-------------|
| 🌀 **Dynamic Rendering** | Easily loop through data to create components (like lists, cards, etc.) |
| ✨ **Cleaner Code** | Replaces traditional loops (`for`, `forEach`) with more readable functional style |
| 🔄 **Immutability** | Doesn’t modify original array, which aligns with React's best practices |
| 💡 **Efficiency** | Simplifies rendering large data sets (e.g., APIs, tables, posts, products, etc.) |

---

### ✅ When to Use `map()` in React
- Rendering arrays (lists of posts, users, items, etc.)
- Transforming fetched data into JSX components
- Looping through state arrays

---




*/
import './App.css'

function App() {
 
const listItems = [{
  Name: "Milk shake",
  price: "$12",
  Description: "It's one of our most sold products",
  image: "https://via.placeholder.com/150"
},
{
  Name: "Burger",
  price: "$8",
  Description: "A delicious beef burger",
  image: "https://via.placeholder.com/150"
},
{
  Name: "Pizza",
  price: "$15",
  Description: "Cheesy and loaded with toppings",
  image: "https://via.placeholder.com/150"
},
{
  Name: "Pasta",
  price: "$10",
  Description: "Creamy Alfredo pasta",
  image: "https://via.placeholder.com/150"
},
{
  Name: "Salad",
  price: "$7",
  Description: "Fresh and healthy",
  image: "https://via.placeholder.com/150"
},
{
  Name: "Ice Cream",
  price: "$5",
  Description: "Cool and refreshing",
  image: "https://via.placeholder.com/150"
},
{
  Name: "Fries",
  price: "$4",
  Description: "Crispy and golden",
  image: "https://via.placeholder"
  }
]

const itemDe = listItems.map((item, index) => {
  return (
    <li key={index}>
      <p>{item.Name}, {item.price}</p>
      <img src={item.image} alt={item.Name} />
    </li>
  );
});
return(
      <>
       <h1>HELLO React</h1>
       <ul>{itemDe}</ul>
      </>
  )
}
   
export default App
