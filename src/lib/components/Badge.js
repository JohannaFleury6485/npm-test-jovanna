import React , { useState }  from 'react';
import './badge.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function Badge(){
   const [isVisible, setIsVisible] = useState(true);

   const handleClose = () => {
      setIsVisible(false)
      
   }
   return (
      <>
      {isVisible && (
         <div className='badge-container'>
            <FontAwesomeIcon icon={faTimes} onClick={handleClose} className='close-icon' />
            <p className='validation'>Congrats, your answers have been validated!</p>
         </div>
      )}
   </>
);
}

export default Badge;