
import { useState } from 'react'
import Banner from './Component/Banner'
import Card from './Component/Card'
import Cart from './Component/Cart'
import NavBar from './Component/Navbar'
import Star from './Component/Star'
import Tools from './Component/Tools'
import Footer from './Component/Footer'

const getTools = async ()=> {
const res = await  fetch("/Tools.json")
return res.json()
}
const ToolsPromise = getTools()


function App() {

  const [activeTab,setActiveTab] = useState("Products")
  // console.log(activeTab)

  const [carts,setCarts] = useState([])

  // console.log(carts)



  return (
    <>
      <NavBar carts = {carts}/>
      <Banner/>
      <Star/>

      {/* name of each tab group should be unique */}
 <div className="tabs tabs-box justify-center bg-transparent mt-10">
  <input type="radio" name="my_tabs_1" className= {`${activeTab === "Products" ? "tab-active !bg-purple-500 !text-white" : "tab-active !bg-white-500 text-black!"} tab w-40 rounded-full`}   aria-label="Products"onClick={() => setActiveTab("Products")}  defaultChecked />
  <input type="radio" name="my_tabs_1" className={`${activeTab === "Cart" ? "tab-active !bg-purple-500 !text-white" : "tab-active !bg-white-500 text-black!"} tab w-40 rounded-full`} aria-label= {`Cart (${carts.length})` }onClick={() => setActiveTab("Cart")} checked = {activeTab === "Cart"}/>
 
</div>

    { activeTab === "Products" && <Tools ToolsPromise={ToolsPromise} carts={carts} setCarts={setCarts}/>}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}/>}
      <Card/>
      <Footer/>
    </>
  )
}

export default App
