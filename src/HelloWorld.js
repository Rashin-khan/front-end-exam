import React from 'react';
import './navbar.css';

const HelloWorld = () => {
  return (
    <>
    <nav className="navigation">
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">About</a>
          </li>
          <li>
            <a href="/about">News</a>
          </li>
          <li>
            <a href="/contact">Services</a>
          </li>
          <li>
            <a href="/contact">Our Team</a>
          </li>
          <li>
            <a href="/contact">Make Enquiry</a>
          </li>
        </ul>
      </div>
    </nav>
      <img 
        src="https://media.istockphoto.com/id/636208094/photo/tropical-jungle.jpg?s=2048x2048&w=is&k=20&c=MlaHtCKbmmQAzT5d0Z-Hs8gw_yjzEar-jwMoE85Nzj8="
        width={'100%'}
        height={'85%'}
      />
      <h1 className='middle-text'>Quality Products</h1>
      <div className='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore madna aliqua.
        <br/>Ut enmim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className='container'>
        <div className="image">
          <img 
            src="https://media.istockphoto.com/id/1434218035/photo/austin-suburban-aerial.jpg?s=2048x2048&w=is&k=20&c=T5UkskuSf2Ukm3h6aExidkZruaotvn54-Q6QPwIC7Po="
            height="700px"
            width="70%"
          />
        </div>
        <div className="image">
          <img 
            src="https://media.istockphoto.com/id/1434218035/photo/austin-suburban-aerial.jpg?s=2048x2048&w=is&k=20&c=T5UkskuSf2Ukm3h6aExidkZruaotvn54-Q6QPwIC7Po="
            height="700px"
            width="70%"
          />
        </div>
        <div className="image">
          <img 
            src="https://media.istockphoto.com/id/1434218035/photo/austin-suburban-aerial.jpg?s=2048x2048&w=is&k=20&c=T5UkskuSf2Ukm3h6aExidkZruaotvn54-Q6QPwIC7Po="
            height="700px"
            width="70%"
          />
        </div>
      </div>
    </>
  );
};

export default HelloWorld;