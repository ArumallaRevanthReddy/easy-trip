import TopNavBar from "../components/TopNavBar";
import MembershipCard from '../components/MembershipCard';
import About from "../components/About";
import EmailSubscription from "../components/EmailSubscription";
import AboutPackages from "../components/AboutPackages";

function Home() {
  const memberships = [
    { membershipType: "Individual", price: 19, validity: 1, personCount: 1 },
    { membershipType: "Family", price: 39, validity: 1, personCount: 5 },
    { membershipType: "Group", price: 69, validity: 1, personCount: 10 }
  ];

  return (
    <div>
      <TopNavBar />
      <About />
      <AboutPackages />
      <EmailSubscription />

      {/* buy membership */}
      <div className="w-full py-40 bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center text-center mx-20 md:mx-32 gap-8">
          { memberships.map( membership => <MembershipCard data={membership} /> )}
        </div>
      </div>

    </div>
  )
}

export default Home;