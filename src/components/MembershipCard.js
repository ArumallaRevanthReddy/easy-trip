import Person from '../assets/person.png';
import Family from '../assets/family.png';
import Group from '../assets/group.png';

function MembershipCard(props) {
    const data = props.data;
    const membershipType = (data.membershipType === 'individual' ? Person : data.membershipType === 'Family' ? Family : Group)
    return (
        <span className="bg-slate-100 flex xl:mx-4 flex-col justify-center py-12 text-center shadow-xl hover:scale-105 duration-300">
            <img src={membershipType} alt='/' className="sm:mx-40 md:mx-20 px-12" />
            <h1 className="text-2xl text-bold">{data.membershipType}</h1>
            <p className="text-xl font-bold my-4">${data.price}</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Granted for {data.personCount} person</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">All Easy One Benefits</p>
            <p className="py-2 border-b border-b-gray-300 mx-8">Upto {data.validity} year</p>
            <div className="bg-[#00d9fa] w-[150px] mx-auto mt-8 rounded-md py-2 text-black font-medium cursor-pointer">Buy Now</div>
        </span>
    )
}

export default MembershipCard;