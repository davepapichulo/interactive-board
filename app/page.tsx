import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
   <div className="flex flex-col gap-y-4">
      <div>
        this is only for only for authenticated users
      </div>
      <div>
        <UserButton
      </div>
   </div>
  );
}
  