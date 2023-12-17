import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebase_authentication } from "../Firebase/Firebase_Connection";

export async function Authenticate_User(email, password) {
  try {
    await signInWithEmailAndPassword(firebase_authentication, email, password);
    window.location.pathname = "/";
    return "Logged in";
  } catch (error) {
    return error.message;
  }
}

export async function DeAuthenticate_User() {
  try {
    await signOut(firebase_authentication);
  } catch {
    // UI ERROR MESSAGE
  }
}
