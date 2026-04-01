import { FaUser, FaBox, FaRocket } from "react-icons/fa";
import UserImage from "../assets/user.png";
import PackageImage from "../assets/package.png";
import RocketImage from "../assets/rocket.png";

const Card = () => {
    return (


        <div className="bg-gray-100">
            
      {/* 🔹 Steps Section */}
      <div class="bg-gray-100 p-10">

  <div class="grid md:grid-cols-3 gap-6">

    {/* <!-- Card 1 --> */}
    <div class="card bg-white shadow-md p-6 text-center relative">
      
      {/* <!-- Step Number --> */}
      <div class="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
        01
      </div>

      {/* <!-- Icon -->  */}
      <div class="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
      <img src={UserImage}/>
      </div>

      <h2 class="text-lg font-semibold">Create Account</h2>
      <p class="text-gray-500 text-sm mt-2">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>


    {/* <!-- Card 2 --> */}
    <div class="card bg-white shadow-md p-6 text-center relative">
      
      <div class="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
        02
      </div>

      <div class="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
     <img src={PackageImage}/>
      </div>

      <h2 class="text-lg font-semibold">Choose Products</h2>
      <p class="text-gray-500 text-sm mt-2">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>


    {/* <!-- Card 3 --> */}
    <div class="card bg-white shadow-md p-6 text-center relative">
      
      <div class="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
        03
      </div>

      <div class="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
      <img src={RocketImage}/>
      </div>

      <h2 class="text-lg font-semibold">Start Creating</h2>
      <p class="text-gray-500 text-sm mt-2">
        Download and start using your premium tools immediately.
      </p>
    </div>

  </div>

</div>

      {/* 🔹 Pricing Section */}
      <section className="bg-gray-100 py-16 text-center">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">

        {/* card-1 */}
        <div className="card shadow-lg rounded-2xl bg-white-500  text-black  relative">
          <div className="card-body text-left">
            <h3 className="font-semibold text-lg">Starter</h3>
            <p className="text-sm text-gray-500">Perfect for getting started</p>

            <h1 className="text-4xl font-bold mt-3">$0
              <span className="text-sm font-normal text-gray-500"> /Month</span>
            </h1>

            <ul className="mt-4 space-y-2 text-sm">
              <li> <a className="text-green-500">✔</a> Access to free tools</li>
              <li> <a className="text-green-500">✔</a> Basic templates</li>
              <li> <a className="text-green-500">✔</a> Community support</li>
              <li> <a className="text-green-500">✔</a> 1 project per month</li>
            </ul>

            <button className="btn mt-6  text-white bg-gradient-to-r from-purple-500 to-indigo-500 border-none rounded-full">
              Get Started Free
            </button>
          </div>
        </div>

        {/* card-2 (Highlighted) */}
        <div className="card shadow-lg rounded-2xl  text-white bg-gradient-to-b from-purple-600 to-indigo-600 relative ">

          {/* Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="badge bg-yellow-400 text-black px-4 py-2">
              Most Popular
            </span>
          </div>

          <div className="card-body text-left">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h1 className="text-4xl font-bold mt-3">$29
              <span className="text-sm font-normal opacity-80"> /Month</span>
            </h1>

            <ul className="mt-4 space-y-2 text-sm">
              <li> <a className="text-white-500">✔</a> Access to all premium tools</li>
              <li> <a className="text-white-500">✔</a> Unlimited templates</li>
              <li> <a className="text-white-500">✔</a> Priority support</li>
              <li> <a className="text-white-500">✔</a> Unlimited projects</li>
              <li> <a className="text-white-500">✔</a> Cloud sync</li>
              <li> <a className="text-white-500">✔</a> Advanced analytics</li>
            </ul>

            <button className="btn mt-6  text-white bg-gradient-to-r from-purple-500 to-indigo-500 border-none rounded-full">
              Start Pro Trial
            </button>
          </div>
        </div>

        {/* card-3 */}
        <div className="card shadow-lg rounded-2xl bg-white-500  text-black  relative">
          <div className="card-body text-left">
            <h3 className="font-semibold text-lg">Enterprise</h3>
            <p className="text-sm text-gray-500">For teams and businesses</p>

            <h1 className="text-4xl font-bold mt-3">$99
              <span className="text-sm font-normal text-gray-500"> /Month</span>
            </h1>

            <ul className="mt-4 space-y-2 text-sm">
              <li> <a className="text-green-500">✔</a> Everything in Pro</li>
              <li> <a className="text-green-500">✔</a> Team collaboration</li>
              <li> <a className="text-green-500">✔</a> Custom integrations</li>
              <li> <a className="text-green-500">✔</a> Dedicated support</li>
              <li> <a className="text-green-500">✔</a> SLA guarantee</li>
              <li> <a className="text-green-500">✔</a> Custom branding</li>
            </ul>

            <button className="btn mt-6  text-white bg-gradient-to-r from-purple-500 to-indigo-500 border-none rounded-full">
              Contact Sales
            </button>
          </div>
        </div>

      </div>
    </section>

      {/* 🔹 CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mb-6">
          Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
        </p>

        <button className="btn bg-white text-purple-600 mr-3 rounded-full">
          Explore Products
        </button>
        <button className="btn btn-outline rounded-full">
          View Pricing
        </button>
        <p className="mt-6">14-day free trial • No credit card required • Cancel anytime</p>
      </section>

  
    </div>
    );
};

export default Card;