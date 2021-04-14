import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

const arr=[1,2,3,4,5,6];

const cardItem=arr.map((item,index)=>{
  return(
    <div className="col-12 col-md-4 my-5">
      <div class="card w-100 border border-secondary" style={{backgroundColor: "#e1f5fe"}} key={index}>
        <img src="https://www.howitworksdaily.com/wp-content/uploads/2015/06/daytime-flow-h2o-1295138-1024x576.jpg" class="card-img-top p-1" style={{height: "160px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title" style={{textDecoration: "underline", color: "#616161"}}>Card title</h5>
          <p class="card-text text-justify" style={{color: "grey"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn text-uppercase" style={{backgroundColor: "#81d4fa", color: "white"}}>Go somewhere</a>
        </div>
      </div>
    </div>
  );
})

export default function Products() {
  return(
    <>
     <h1 className='products'>PRODUCTS</h1>
     <div className="container">
       <div className="row">
           {cardItem}
       </div>
     </div>
     </>
  );
  
}
