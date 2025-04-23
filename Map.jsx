
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
