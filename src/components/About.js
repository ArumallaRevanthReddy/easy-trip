import { useNavigate } from 'react-router';
import Typed from 'react-typed';

function About() {
    const navigate = useNavigate();
    const startBookingHandler = () => navigate('/booking');

    return (
        <div className="w-full mx-auto text-center pb-52">
            <p className="text-[#00d9fa] font-bold text-lg pb-4">PLAN WITH EASE</p>
            <h1 className="text-4xl font-bold pb-12">Trip Planning made easy with EASY TRIP</h1>
            <div className="text-lg font-bold pb-4">
                <span>simple, fast booking for </span>
                <span className="text-gray-500"><Typed strings={['Trains', 'Flights', 'Hotels', 'Homestays', 'Buses']} typeSpeed={120} backSpeed={140} loop /></span>
            </div>
            <p className="text-lg font-bold pb-4 text-gray-500">Easy Trip is World's leading player for travel bookings. With the cheapest fare guarantee,<br></br> experience great value at the lowest price.</p>
            <div className="bg-[#00d9fa] w-[200px] mx-auto rounded-md py-3 text-black font-medium cursor-pointer" onClick={startBookingHandler}>Start Booking</div>
        </div>
    )
}

export default About