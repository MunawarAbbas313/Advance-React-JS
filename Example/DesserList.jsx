function DessertsList(props) {
    return (
      <>
        <ul>
          {
            props.data.map((item, index) => (
              <li key={item.id || index}>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Calories:</strong> {item.calories}</p>
                <p><strong>Created At:</strong> {item.createdAt}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
export default DessertsList;  

// here its returning all the list items 

// Here now we will access the low calaory items only by using filter() method 
/*
function DessertsList(props){
    return(
        <>
           <ul>
            {props.data.filter((item) => item.calories < 300).map((items , index)=>
                <li key={ index}>
                    <p>{items.name}</p>
                    <p>{items.calories}</p>
                    <p>{items.createdAt}</p>
                </li>
            )}
          
           </ul>
        
        </>
    )
}
export default DessertsList;

*/



// Now here in 3rd example we will use sort() method to sort the list from smaller calories to larger 

/* 

---

## 🔹 What is `sort()`?

The `sort()` method is used to **sort the elements of an array in place**, and it **returns the same array** after sorting.

---

## 🔹 Syntax

```js
array.sort(compareFunction)
```

- **compareFunction (optional):** A function that defines the **sort order**.

---

## 🔹 How `compareFunction` Works

`compareFunction(a, b)` returns:
- **`< 0`** → a comes **before** b
- **`0`** → a and b are **equal** (no change in order)
- **`> 0`** → a comes **after** b

---

## 🔹 Examples of `sort()`

### ✅ 1. Sorting numbers (ascending):
```js
const nums = [40, 10, 30, 20];
nums.sort((a, b) => a - b);
console.log(nums); // [10, 20, 30, 40]
```

### ✅ 2. Sorting numbers (descending):
```js
nums.sort((a, b) => b - a); 
console.log(nums); // [40, 30, 20, 10]
```

---

### ✅ 3. Sorting strings alphabetically:
```js
const fruits = ['Banana', 'Apple', 'Orange'];
fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Orange']
```

---

### ✅ 4. Sorting objects by a field:
```js
const items = [
  { name: 'Cake', calories: 400 },
  { name: 'Ice Cream', calories: 200 },
  { name: 'Tiramisu', calories: 300 }
];

items.sort((a, b) => a.calories - b.calories);
```

Result (sorted by `calories` in ascending order):

```js
[
  { name: 'Ice Cream', calories: 200 },
  { name: 'Tiramisu', calories: 300 },
  { name: 'Cake', calories: 400 }
]
```

---

## 🔹 Use of `sort()` in React

Used to **display sorted lists** of data in components like:

- Product listings (by price, rating)
- Tables (by column value)
- Posts (by date)

```jsx
{items.sort((a, b) => a.price - b.price).map((item) => (
  <div>{item.name} - {item.price}</div>
))}
```

---

## 🔹 Advantages

✅ Easy to use  
✅ Works with numbers, strings, or custom object fields  
✅ Great for real-time UI sorting

---

*/

