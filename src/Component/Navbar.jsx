import { IoCartOutline } from "react-icons/io5";

const Navbar = ({carts}) => {
    return (
  <div className="navbar bg-base-100 px-4">

  {/* Left */}
  <div className="navbar-start">

    {/* Mobile + Tablet Menu */}
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost">
        ☰
      </label>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>

    {/* Logo */}
  <div class="flex items-center justify-center">
    <h1 class="text-2xl md:text-2xl font-black
               bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 
               bg-clip-text text-transparent 
               ">
      DigiTools
    </h1>
  </div>
  </div>

  {/* Desktop Menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-6 px-1 text-lg">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>

  {/* Right */}
  <div className="navbar-end gap-3">

    {/* Cart */}
    <div className="relative">
      <IoCartOutline className="text-2xl" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
        {carts.length}
      </span>
    </div>

    {/* Login */}
    <button className="hidden md:block">Login</button>

    {/* Button */}
    <button className="btn bg-red-500 text-white rounded-full hidden md:block">
      Get in Touch
    </button>

  </div>
</div>
    );
};

export default Navbar;