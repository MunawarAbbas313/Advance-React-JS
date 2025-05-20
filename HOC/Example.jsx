
// 1. Define the HOC
import React, { useState, useEffect } from 'react';

function withLoading(WrappedComponent, fetchDataFunction) {
  return function HOC(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const result = await fetchDataFunction();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [fetchDataFunction]); // Re-fetch if the fetchDataFunction changes

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    // Pass the fetched data and other props to the wrapped component
    return <WrappedComponent data={data} {...props} />;
  };
}

// 2. Define a simple component that will receive data
function UserList({ data }) {
  if (!data || data.length === 0) {
    return <p>No users found.</p>;
  }
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 3. Define another component that will receive data
function ProductList({ data }) {
  if (!data || data.length === 0) {
    return <p>No products found.</p>;
  }
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

// Mock data fetching functions
const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]);
    }, 1000);
  });
};

const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, name: 'Laptop', price: 1200 },
        { id: 102, name: 'Mouse', price: 25 },
      ]);
    }, 1500);
  });
};

// 4. Use the HOC to enhance the components
const UserListWithLoading = withLoading(UserList, fetchUsers);
const ProductListWithLoading = withLoading(ProductList, fetchProducts);

// 5. Render the enhanced components
function App() {
  return (
    <div>
      <h1>Application Data</h1>
      <UserListWithLoading />
      <hr />
      <ProductListWithLoading />
    </div>
  );
}

export default App;
