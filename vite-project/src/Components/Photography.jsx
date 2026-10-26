function Photography() {
  return (
    <>
    <main className="flex">
      
      {/* Sidebar with images*/}
        <div className="drawer lg:drawer-open lg:drawer-end w-1/3">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center w-1/3">
            {/* Page content here */}
            <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
              Open drawer
            </label>
          </div>

          <div className="drawer-side pl-5 pr-5 w-1/7">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu grid grid-cols-2 content-start bg-base-200 min-h-full ">
              {/* Sidebar content here */}

              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../_MG_1846.jpg" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../_mg_5771.jpg" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../011_1.JPG" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../img_6835.jpg" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../img_9081.jpg" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../IMG_9380.JPG" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../SA Trip-86.JPG" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../SA Trip-105.JPG" alt="Croc in water" /></a></li>
              <li className="w-full p-1"><a><img className="block w-full h-auto" src="../SA Trip-122.JPG" alt="Croc in water" /></a></li>
            </ul>
          </div>
        </div>

      {/* Main Image */}  
        <div className="hero bg-base-200 min-h-screen mr-5">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      </main>
  </>
  )
  }

  export default Photography