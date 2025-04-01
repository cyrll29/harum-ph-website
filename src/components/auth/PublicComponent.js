'use client';

import { useAuth } from "@/utils/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import LoadingSpinner from "../Loader";

export const PublicComponent = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/')
      toast({
        title: "You are logged in",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [user, loading, router]);

  if(loading) {
    return <LoadingSpinner message="Loading..." />
  };

  return user ? null : children;
}