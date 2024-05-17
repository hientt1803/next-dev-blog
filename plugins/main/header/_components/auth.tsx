import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";

export const MenuAuth = () => {
  return (
    <>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button>
            Sign In
          </Button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </>
  );
};
