'use client'

import { useAuth } from "@/utils/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

import LoadingSpinner from "../Loader";

export const ProtectedComponent = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
      toast({
        title: "You are not logged in",
        description: 'You are not logged in',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [user, loading, router]);

  if(loading) {
    return <LoadingSpinner message="Authenticating..." />
  };

  return user ? children : null;
}