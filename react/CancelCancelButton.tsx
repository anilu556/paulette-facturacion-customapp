import React, { useEffect } from 'react';

const CancelCancelButton = () => {
  useEffect(()=>{
    // while(true)
    remove();
  })
  const remove = () =>{
    setInterval(() => {

      let name = document.getElementsByClassName("vtex-my-orders-app-3-x-cancelBtn");
      if(name.length > 0){
        name[0].remove();
      }

      let name2 = document.getElementsByClassName("dib-ns");
      if(name2[1]){
        name2[1].remove();
      }
    }, 100)
  }
  return(
    <>
    </>
  );
}

export default CancelCancelButton;