import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
//import ProductItem from './Components/ProductItem';
function App() {
  return (
    <>
        <Header />
        <ProductList />
        <Footer />
        <div className="search-wrap">
            <div className="search-inner">
                <i className="fas fa-times search-close" id="search-close"></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search Entire Store..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}
export default App;
