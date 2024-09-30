import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">Welcome to the App</h1>
      <UserButton />
    </div>
  );
}
