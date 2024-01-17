import React from 'react';
import { imagesSection, navBarMenu } from './constants/ConstantsToUse';
import './navbar.css';

const HelloWorld = () => {
  return (
    <>
    <nav className="navigation">
      <div
        className="navigation-menu">
        <ul>
          {
            navBarMenu.length ? 
            navBarMenu.map((items, index) => (
              <li key={index}>
                {items.name}
              </li>
            )) : null
          }
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
          {
            imagesSection.length ? 
              imagesSection.map((items, index) => (
                <div className={items.class} key={index}>
                  <img 
                    src={items.url}
                    alt={items.alt}
                    height="700px"
                    width="70%"
                  />
                </div>
              )) : null
          }
      </div>
      <div className='bottom-center'>
        <h1>Client 1</h1>
        Dubai, United Arab Emirates
      </div>
    </>
  );
};

export default HelloWorld;