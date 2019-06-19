import React from 'react';
import result from '../../data.json';
export default function ProductItem(props){
    return (
            <>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="product-wrapper mb-50">
                                            <div className="product-img mb-25">
                                                <a href="#">
                                                    <img src={props.img_url} calt=''/>
                                                    <img className="secondary-img" src={props.img_url} calt=""/>
                                                </a>
                                                <div className="product-action text-center">
                                                    <a href="#" title="Shoppingb Cart">
                                                        <i className="fas fa-shopping-cart"></i>
                                                    </a>
                                                    <a href="#" title="Quick View">
                                                        <i className="fas fa-search"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content pr-0">
                                                <div className="pro-cat mb-10">
                                                    <a href="#">furniture</a>
                                                </div>
                                                <h4>
                                                    <a href="#">{props.name}</a>
                                                </h4>
                                                <div className="product-meta">
                                                    <div className="pro-price">
                                                        <span>{props.final_price}</span>
                                                        <span className="old-price">{props.price} VND</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
          </>                                                  
    )
}