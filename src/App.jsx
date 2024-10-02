import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import store from './store';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import Cart from './Cart'; // Import your Cart component
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link> {/* Link to Cart */}
            <Link to="/about">About Us</Link>
          </nav>

          <Switch>
            <Route path="/" exact>
              <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
                <div className="background-image"></div>
                <div className="content">
                  <div className="landing_content">
                    <h1>Welcome To Paradise Nursery</h1>
                    <div className="divider"></div>
                    <p>Where Green Meets Serenity</p>
                    <button className="get-started-button" onClick={handleGetStartedClick}>
                      Get Started
                    </button>
                  </div>
                  <div className="aboutus_container">
                    <AboutUs />
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/cart">
              <Cart /> {/* Render Cart component */}
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
