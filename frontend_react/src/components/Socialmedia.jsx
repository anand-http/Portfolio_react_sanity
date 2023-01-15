import React from 'react';
import { BsTwitter, BsInstagram,BsYoutube} from 'react-icons/bs';
import { FaFacebookF,FaLinkedinIn,FaGithub} from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className='app__social'>
      <div className='app__socialmedia'>

       <a href="https://twitter.com/Rishu_singh9695" 
       target="_blank" rel="noreferrer"><BsTwitter/></a> 

      </div>

      <div className='app__socialmedia'>

       <a href="https://github.com/rishu-singh9695" 
       target="_blank" rel="noreferrer"><FaGithub/></a> 

      </div>

      <div className='app__socialmedia'>

       <a href="https://www.linkedin.com/in/anand-pratap-singh-5223291a6/" 
       target="_blank" rel="noreferrer"><FaLinkedinIn/></a> 

      </div>

      <div className='app__socialmedia'>
      <a href="https://www.facebook.com/profile.php?id=100043289796336" 
       target="_blank" rel="noreferrer"><FaFacebookF /></a> 
        
      </div>
      <div className='app__socialmedia'>
      <a href="https://www.youtube.com/channel/UCe5mJ3Lv97C6xWn4aU-YXQg" 
       target="_blank" rel="noreferrer"><BsYoutube /></a> 
        
      </div>
      <div className='app__socialmedia'>
      <a href="https://www.instagram.com/its_rishu.singh/?next=%2F" 
       target="_blank" rel="noreferrer"><BsInstagram /></a> 
        
      </div>
     
    </div>
  )
}

export default Socialmedia;