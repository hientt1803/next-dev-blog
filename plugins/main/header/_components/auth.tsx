"use client";

import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";

export const MenuAuth = () => {
  return (
    <>
      <Unauthenticated>
        <SignInButton mode="modal" />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </>
  );
};
