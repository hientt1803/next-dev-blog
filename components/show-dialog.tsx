import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "./switch-theme-btn";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

export function ShowDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "text-5xl")}
        >
          Settings
        </NavigationMenuLink>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-start">Settings</DialogTitle>
          <DialogDescription className="text-start">
            Change your appearance here
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-start space-x-2">
          <ModeToggle />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
