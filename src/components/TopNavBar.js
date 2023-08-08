import { useNavigate } from "react-router";

function TopNavBar() {
  const navigate = useNavigate();
  const homePageHandler = () => navigate('/');

  return (
    <div className="flex justify-between mt-4 h-24">
      <div className="text-3xl font-bold text-[#00d9fa] cursor-pointer" onClick={homePageHandler}>EASY TRIP</div>
      <div>
        <span className="mr-4 cursor-pointer">resources</span>
        <span className="mr-4 cursor-pointer">about</span>
        <span className="mr-4 cursor-pointer">login</span>
      </div>
    </div>
  );
}

export default TopNavBar;