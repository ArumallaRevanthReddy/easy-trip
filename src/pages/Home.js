import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";
import Typed from 'react-typed';
import Travel from '../assets/travel.jpg';
import Person from '../assets/person.png';
import Family from '../assets/family.png';
import Group from '../assets/group.png';

function Home() {
  return (
    <div>
      <TopNavBar />
      {/* <SideNavBar/> */}
      <div className="w-full mx-auto text-center pb-52">
        <p className="text-[#00d9fa] font-bold text-lg pb-4">PLAN WITH EASE</p>
        <h1 className="text-4xl font-bold pb-12">Trip Planning made easy with EASY TRIP</h1>
        <div className="text-lg font-bold pb-4">
          <span>simple, fast booking for </span>
          <span className="text-gray-500"><Typed strings={['Trains', 'Flights', 'Hotels', 'Homestays', 'Buses']} typeSpeed={120} backSpeed={140} loop /></span>
        </div>
        <p className="text-lg font-bold pb-4 text-gray-500">Easy Trip is World's leading player for travel bookings. With the cheapest fare guarantee,<br></br> experience great value at the lowest price.</p>
        <div className="bg-[#00d9fa] w-[200px] mx-auto rounded-md py-3 text-black font-medium">Start Booking</div>
      </div>

      {/* trip packages */}
      <div className="bg-white px-4 py-16 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img className="mx-8 px-32" src={Travel} />
          <div className="flex flex-col justify-center text-center mx-12 py-4">
            <h1 className="font-bold text-lg pb-4">TRAVEL PACKAGES</h1>
            <p className="pb-16">
              Welcome to Easy Trip, Our curated range of options suits various budgets and preferences,
              ensuring travel is accessible to all. We stand out by delivering exceptional adventures,
              going beyond the ordinary to create lasting memories. Our team of experts negotiates the best deals,
              guaranteeing competitive prices without compromising quality. With Easy Trip,
              you can confidently invest in your travel aspirations,
              knowing you'll receive unparalleled value.
              Join us on a journey where affordability meets uniqueness and
              book your next adventure with Easy Trip today!
            </p>
            <div className="bg-[#00d9fa] w-[200px] mx-auto rounded-md py-3 text-black font-medium">Explore</div>
          </div>
        </div>
      </div>

      {/* get notified */}
      <div className="bg-black grid grid-cols-1 lg:grid-cols-2 py-16">
        <span className="mx-12 md:pr-16 md:pl-24 pb-12">
          <p className="text-bold text-3xl">Want to get notified on Best Offers?</p>
          <p>Subscribe to our Email to get latest updates</p>
        </span>
        <span className="md:px-16">
          <span className="text-center flex pb-4">
            <input type="email" placeholder="Enter Email" className="rounded-md w-[300px] px-8 text-black" />
            <div className="bg-[#00d9fa] w-[200px] ml-6 rounded-md py-2 text-black font-medium">Notify me</div>
          </span>
          <span>
            <p>We care about the protection of your data. Read our <p className="text-[#00d9fa]">Privacy Policy</p></p>
          </span>
        </span>
      </div>

      {/* buy membership */}
      <div className="w-full py-40 bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center text-center md:mx-32 gap-8">
          <span className="bg-slate-100 flex mx-4 flex-col justify-center py-12 text-center shadow-xl hover:scale-105 duration-300">
            <img src={Person} alt='/' className="mx-20 px-12" />
            <h1 className="text-2xl text-bold">Individual</h1>
            <p className="text-xl font-bold my-4">$19</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Granted for 1 person</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">All Easy One Benefits</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Upto 1 year</p>
            <div className="bg-[#00d9fa] w-[150px] mx-auto mt-8 rounded-md py-2 text-black font-medium">Buy Now</div>
          </span>
          <span className="bg-slate-100 flex mx-4 flex-col justify-center py-12 text-center shadow-xl hover:scale-105 duration-200">
            <img src={Family} alt='/' className="mx-20 px-12" />
            <h1 className="text-2xl text-bold">Family</h1>
            <p className="text-xl font-bold my-4">$39</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Granted for upto 5 persons</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">All Easy One Benefits</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Upto 1 year</p>
            <div className="bg-[#00d9fa] w-[150px] mx-auto mt-8 rounded-md py-2 text-black font-medium">Buy Now</div>
          </span>
          <span className="bg-slate-100 flex mx-4 flex-col justify-center py-12 text-center shadow-xl hover:scale-105 duration-300">
            <img src={Group} alt='/' className="mx-20 px-12" />
            <h1 className="text-2xl text-bold">Group</h1>
            <p className="text-xl font-bold my-4">$69</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Granted for upto 10 persons</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">All Easy One Benefits</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Upto 1 year</p>
            <div className="bg-[#00d9fa] w-[150px] mx-auto mt-8 rounded-md py-2 text-black font-medium">Buy Now</div>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Home;