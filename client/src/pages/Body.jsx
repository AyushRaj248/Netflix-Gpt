import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user.slice";
import Footer from "../components/others/Footer";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const storedUser = localStorage.getItem("user");
  

  // useEffect(() => {
  //   if (!user && !storedUser) {
  //     navigate("/login");
  //   } else {
  //     const parsedUser = JSON.parse(storedUser);
  //     dispatch(addUser(parsedUser));
  //     navigate("/browse");
  //   }
  // }, []);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
