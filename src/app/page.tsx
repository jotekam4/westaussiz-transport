import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex justify-center p-auto p-12 gap-10 min-w-2 flex-wrap">
      <h1 className="space-grotesk text-5xl">
        WestAussiz Transport PTY LTD
      </h1>

      <p className="text-lg">
        Sorry, This website is under production. Hope to see you soon.
      </p>

    </main>
  );
}
