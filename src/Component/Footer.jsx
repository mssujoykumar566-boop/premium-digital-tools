import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="px-6">
   <div className=" text-white px-6 md:px-12 lg:px-20 py-12">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center sm:text-left">

    {/* Logo & Description */}
    <div className="flex flex-col items-center sm:items-start">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        DigiTools
      </h2>

      <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xs">
        Premium digital tools for creators, professionals, and businesses.
        Work smarter with our powerful tools.
      </p>
    </div>

    {/* Product */}
    <div>
      <h3 className="text-white-400 font-semibold mb-4">Product</h3>
      <ul className="space-y-2 text-zinc-400 text-sm">
        <li><a href="#" className="hover:text-white">Features</a></li>
        <li><a href="#" className="hover:text-white">Pricing</a></li>
        <li><a href="#" className="hover:text-white">Templates</a></li>
        <li><a href="#" className="hover:text-white">Integrations</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-white-400 font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-zinc-400 text-sm">
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Blog</a></li>
        <li><a href="#" className="hover:text-white">Careers</a></li>
        <li><a href="#" className="hover:text-white">Press</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-white-400 font-semibold mb-4">Resources</h3>
      <ul className="space-y-2 text-zinc-400 text-sm">
        <li><a href="#" className="hover:text-white">Documentation</a></li>
        <li><a href="#" className="hover:text-white">Help Center</a></li>
        <li><a href="#" className="hover:text-white">Community</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Social */}
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-white-400 font-semibold mb-4">Social</h3>

      <div className="flex gap-4 text-xl justify-center sm:justify-start">
        <FaFacebook />
        <FaYoutube />
        <FaXTwitter />
      </div>
    </div>

  </div>

 

</div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
           <p>Privacy Policy </p>
           <p> Terms of Service  </p>
           <p> Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;