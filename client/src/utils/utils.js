import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";


export const validateFormData = (email, password, name = "ayush") => {
  const errors = {};
  if (name.length <= 4 || name.length >= 50) {
    errors.name = "Name should be between 4 to 50 characters";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = "Invalid Email";
  }
  if (password.length < 6 || password.length >= 12) {
    errors.password = "Password should be in between 6 to 12 Characters";
  }
  return errors;
};


export const authenticate = async (isSignInForm, emailInp, password) => {
  try {
    const userCredential = isSignInForm
      ? await signInWithEmailAndPassword(
          auth,
          emailInp.current.value,
          password.current.value
        )
      : await createUserWithEmailAndPassword(
          auth,
          emailInp.current.value,
          password.current.value
        );

    console.log(userCredential);

    const { uid, email, displayName, photoURL } = userCredential.user;
    return { uid, email, displayName, photoURL };
  } catch (error) {
    console.log(error);
  }
};


