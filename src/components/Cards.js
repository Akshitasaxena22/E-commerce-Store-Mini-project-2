import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://analyticsindiamag.com/wp-content/uploads/2019/12/How-SMBs-In-India-Can-Unlock-Their-Potential-With-Analytics.jpg'
              text=''
              path=''
            />
            <CardItem
              src='https://images.unsplash.com/photo-1587127964224-ee5b0a61933d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhemFhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text=''
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i2.wp.com/ttim.photo/wp-content/uploads/2016/12/Closeup-of-Young-Woman-at-Fortress-Gate-Jodhpur-India-Copyright-2016-Ralph-Velasco.jpg?resize=750%2C500'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Review 1'
              path=''
             />
            <CardItem
              src='https://miro.medium.com/max/625/1*ltUNWd5KLkaZB8bIrUxQ1Q.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Review 2'
              path=''
            />
            <CardItem
              src='https://media.gettyimages.com/photos/young-woman-selling-clothes-at-a-shopping-mall-picture-id471760764?s=612x612'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Review 3'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
