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
