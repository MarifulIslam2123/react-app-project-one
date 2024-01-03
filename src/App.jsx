
import './App.css'

function App() {

  return (
    <>
        <div className="navbar bg-orange-300">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>



        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a> 
          <a href="#item2" className="btn btn-xs">2</a> 
          <a href="#item3" className="btn btn-xs">3</a> 
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
        
        <h1>hello react</h1>
    </>
  )
}

export default App
