import React, { useState, useRef } from "react";
import Header from "./Header";
import backgroundImage from "../utils/images/netflix-background.jpeg";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import usericon from "../utils/images/userlogo.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    //check the data for validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //SignUp logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
              photoURL: usericon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code; //eslint-disable-line
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
    //SignIn logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code; //eslint-disable-line
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen w-screen"
          src={backgroundImage}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 mx-auto right-0 left-0  p-12 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <p className="text-red-500 font-bold text-lg flex align-middle justify-center ">
          {errorMessage}
        </p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg font-semibold "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex items-center justify-evenly">
          <p>{isSignInForm ? "New to Netflix ?" : "Already Registered ?"} </p>
          <p
            className="py-4 cursor-pointer hover:underline "
            onClick={toggleSignInForm}
          >
            {" "}
            {isSignInForm ? "Sign up now" : "Sign In"}{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
