import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className='app__social'>
      <div>

       <a href="https://twitter.com/Rishu_singh9695" 
       target="_blank" rel="noreferrer"><BsTwitter/></a> 

      </div>
      <div>
      <a href="https://twitter.com/Rishu_singh9695" 
       target="_blank" rel="noreferrer"><FaFacebookF /></a> 
        
      </div>
      <div>
      <a href="https://twitter.com/Rishu_singh9695" 
       target="_blank" rel="noreferrer"><BsInstagram /></a> 
        
      </div>

    </div>
  )
}

export default Socialmedia;