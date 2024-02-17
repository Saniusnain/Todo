import { useNavigate } from "react-router-dom";
import { TiWavesOutline } from "react-icons/ti";
import { MaleAvatars } from "../../assets/MaleAvatars";
import { FemaleAvatars } from "../../assets/FemaleAvatars";
import { TbLogout2 } from "react-icons/tb";
import { clearStorage, getUserGender } from "../../utils/utilFunctions";

const Header = () => {
  const navigate = useNavigate();
  const gender = getUserGender();

  const logOut = () => {
    clearStorage();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between h-20 px-4 shadow max-sm:px-2 shadow-gray-100">
      <TiWavesOutline className="text-6xl text-white max-sm:text-5xl" />
      <div className="flex items-center justify-center">
        <TbLogout2
          title="Logout"
          className="mr-5 text-2xl text-white cursor-pointer"
          onClick={() => logOut()}
        />
        <img
          loading="lazy"
          src={
            gender === "male"
              ? MaleAvatars[Math.floor(Math.random() * 4)]
              : FemaleAvatars[Math.floor(Math.random() * 3)]
          }
          alt="avatar"
          className="bg-white rounded-full max-sm:w-10 max-sm:h-10 sm:w-12 sm:h-12"
        />
      </div>
    </div>
  );
};

export default Header;
