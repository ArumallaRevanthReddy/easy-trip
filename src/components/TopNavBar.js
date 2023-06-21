import { useState } from "react";

function TopNavBar() {
  const [showNav, setShowNav] = useState(true);

  const handleNav = () => setShowNav(!showNav)

  return (
    <div className="flex pt-4 h-24">
      <div className="w-full text-3xl font-bold text-[#00d9fa]">EASY TRIP</div>
      <div>
        <span className="pr-4">resources</span>
        <span className="pr-4">about</span>
        <span className="pr-4">login</span>
      </div>
    </div>
  );
}

export default TopNavBar;