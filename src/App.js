import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import ProductItem from './Components/ProductItem';
function App() {
  return (
    <>
        <Header />
        <ProductList />
        <Footer />
        <ProductItem /> 
    </>
  );
}
export default App;
