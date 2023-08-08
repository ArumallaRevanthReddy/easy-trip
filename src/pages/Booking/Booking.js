import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import BusBooking from "../Bus/Bus";

function Booking() {
    return (
        <>
            <TopNavBar />
            <div className="flex">
                <SideNavBar />
                <BusBooking />
            </div>
        </>
    )
}

export default Booking;