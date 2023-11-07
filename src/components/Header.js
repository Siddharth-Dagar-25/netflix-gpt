import React, { useEffect } from "react";
import logo from "../utils/images/Netflix_Logo_PMS.png";
import usericon from "../utils/images/userlogo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />

      {user && (
        <div className="flex p-2 ">
          <img
            className="w-12 h-12 rounded-md object-cover "
            src={usericon}
            alt="user"
          />
          <button
            onClick={handleSignout}
            className="mx-2 text-white bg-red-500 p-2 rounded-md h-12 w-18 cursor-pointer hover:underline font-bold "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
