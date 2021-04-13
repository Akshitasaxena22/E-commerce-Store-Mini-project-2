import React from 'react';
import '../../App.css';


const arr=[1,2,3,4,5,6];

const cardItem=arr.map((item,index)=>{
  return(
    <div className="col-12 col-md-4 my-5">
      <div class="card" key={index} style={{width:"18rem"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
})

export default function Products() {
  return(
    <>
     <h1 className='products'>PRODUCTS</h1>;
     <div className="container">
       <div className="row">
           {cardItem}
       </div>
     </div>
     </>
  );
  
}
