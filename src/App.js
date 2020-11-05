import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductContext }from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const uniqueItem = {...item, id: item.id * Math.random()}
		setCart([...cart, uniqueItem]);
	};

	const removeItem = id => {
		const updatedCart = cart.filter(item => item.id !== id);
		setCart(updatedCart);
	};


	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
