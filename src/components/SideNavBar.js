function SideNavBar() {
  return (
    <div className="container w-auto sm:w-auto md:w-40 border-r border-r-gray-900 h-full fixed">
      <ul className="text-white">
        <li className="p-4 mr-4 border-b border-b-gray-600">Hotels</li>
        <li className="p-4 mr-4 border-b border-b-gray-600">Homestays</li>
        <li className="p-4 mr-4 border-b border-b-gray-600">Train</li>
        <li className="p-4 mr-4 border-b border-b-gray-600">Flights</li>
        <li className="p-4 mr-4 border-b border-b-gray-600">Bus</li>
        <li className="p-4 mr-4 border-b border-b-gray-600">Cab</li>
      </ul>
    </div>
  );
}

export default SideNavBar;