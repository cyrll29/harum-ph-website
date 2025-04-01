import { FirebaseAuthContext } from "@/context/FirebaseAuthContext";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(FirebaseAuthContext);
}