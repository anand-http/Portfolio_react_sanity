import React from 'react'
import { SocialMedia} from '../components';

const AppWrap2 = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`${classNames}`}>
      <SocialMedia/>
      <div className='app__flex'>
        <Component />
      </div>
      
    </div>
  )
}

export default AppWrap2;