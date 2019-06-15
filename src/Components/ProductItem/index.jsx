import React from 'react';
export default function (){
    return (
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
    )
}