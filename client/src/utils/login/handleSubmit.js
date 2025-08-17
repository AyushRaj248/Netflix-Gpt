import { validateFormData } from "../utils";
import {authenticate} from "../utils";

const handleSubmit = async (isSignInForm, email, password, name) => {
  const errObj = isSignInForm
    ? validateFormData(email.current.value, password.current.value)
    : validateFormData(
        email.current.value,
        password.current.value,
        name.current.value
      );

  if (Object.keys(errObj).length !== 0) {
    return { errObj, user: null };
  }

  const user = await authenticate(isSignInForm, email, password);
  console.log(user);
  
  return { errObj: null, user };
};

export default handleSubmit;
