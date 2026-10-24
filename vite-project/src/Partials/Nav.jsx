import { useState } from 'react'

function Nav() {
  return (
    <>
    <div className="max-lg:collapse lg:mb-48  w-full rounded-md ">
  
        <div className="collapse-title flex justify-around">
            
            <div className="">
              <button className="btn btn-ghost text-xl">PHOTOGRAPHY</button>
            </div>
            
            <div className="">
              <button className="btn btn-ghost text-xl">BIO</button>
            </div>           

            <div className="">
              <button className="btn btn-ghost text-xl">CONTACT</button>
            </div>
        </div>

    
    </div>
    </>
  )
}

export default Nav