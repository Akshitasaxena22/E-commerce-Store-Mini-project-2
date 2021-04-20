import React from 'react';
import { Link } from 'react-router-dom';

function Details(props) {
    return (
        <div className="p-2">
            <h1>Place Your Order here!</h1>
            <br/>
            <h3 className="text-center">We'll connect you to the store soon!</h3>
            <div className="border border-secondary rounded p-2" style={{backgroundColor: "#ffebee"}}>
                <form className="p-2">
                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter Full Name"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Address"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPhone1">Phone Number</label>
                        <input type="tel" class="form-control" id="exampleInputPhone1" placeholder="Enter Phone Number"></input>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Want to receive email also along with phone call from the shop owner?</label>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Item Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <Link to="/products" class="btn text-uppercase btn-primary">Submit</Link>
                </form>
            </div>
        </div>
    );
}

export default Details;