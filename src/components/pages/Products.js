import React from 'react';
import '../../App.css';
import Footer from '../Footer';


const arr=[0];

const cardItem=arr.map((item,index)=>{
  return(
    <div class="card-deck">
      <div class="card">
           <img src="https://www.thelostpassport.com/wp-content/uploads/2020/04/Nadi-Handicraft-Market.jpg" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>NADI HANDICRAFT</u></h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
    
    </div>
  <div class="card">
    <img src="https://www.aljazeera.com/wp-content/uploads/2020/12/India-small-business-Manohar-Wagle-by-Tish-Sanghera.jpg?w=770&resize=770%2C578" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>MAHALAXMI SPORTS</u></h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    
  </div>
  <div class="card">
    <img src="https://media.istockphoto.com/photos/young-man-selling-shoes-at-a-shopping-mall-picture-id471204312?k=6&m=471204312&s=612x612&w=0&h=L1NCa0_Fr6D_2i5iLr8Lf0EMJVId5tWyTJHZ6ZwFBg8=" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>FILZE SHOES</u></h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
  );
})



const cardItem1=arr.map((item,index)=>{
  return(
    <div class="card-deck">
      <div class="card">
           <img src="https://analyticsindiamag.com/wp-content/uploads/2019/12/How-SMBs-In-India-Can-Unlock-Their-Potential-With-Analytics.jpg" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>POTTERY US</u></h5>
      <p class="card-text">It is one of the oldest and most widespread of the decorative arts, consisting of objects made of clay and hardened with heat.
       The objects made are commonly useful ones, such as vessels for holding liquids or plates or bowls from which food can be served.</p>
           </div>
    
    </div>
  <div class="card">
    <img src="https://i.pinimg.com/originals/a6/82/23/a68223a7225e0acbd950e6eb29bc7691.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>SARIKA SARI</u></h5>
      <p class="card-text">Sarika Fashion deals in full variety of Indian Sarees, Lehenga, Odhani, Western dresses, Wedding dresses, etc...</p>
    </div>
    
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1574705477102-1ff256153d63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGluZGlhbiUyMG1hcmtldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>STYLE WAREHOUSE</u></h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
  );
})

export default function Products() {
  return(
    <>
     <h1 className='products'>VENDORS</h1>;
     <div className="container">
       <div className="row">
           {cardItem}
           <br></br>
           {cardItem1}
       </div>
       
     </div>
     
     </>
  );
  
}
