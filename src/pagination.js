import React, { Component } from 'react'
import { render } from '@testing-library/react';
import ReactPaginate from 'react-paginate'

const pagination =({postPerpage,totalPosts,paginate,currentPage})=>{
    

        const pageNumbers=[];
        
    for(let i=1;i<=Math.ceil(totalPosts/postPerpage);i++){
        pageNumbers.push(i);
        
    }
    
    
    return (
        <nav>
            <ul className="pagination">
            {currentPage > 1?<li className="page-item " ><a className="page-link" href="#" onClick={()=>paginate(currentPage-1)}>Prev</a></li>:""}
                {pageNumbers.map(number=>(
                <li key={number} className="page-item ">
                    
                    <a onClick={()=>paginate(number)} href="#" className='page-link '>
                    {number}
                    </a>
                </li>))}
            {currentPage< totalPosts/postPerpage?<li className="page-item"><a className="page-link"  href="#" onClick={()=>paginate(currentPage+1)}>Next</a></li>:""}


            </ul>
        </nav>
        
        
    )
    
}

export default pagination
