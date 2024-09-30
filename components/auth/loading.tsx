import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Loading..."
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
