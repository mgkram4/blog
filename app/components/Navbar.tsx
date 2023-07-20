import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-medium ">
              Bella&apos;s{" "}
              <span className="text-pink-600 rounded dark:text-pink-500">
                Blog
              </span>
            </h1>
          </Link>
        </div>
        <div className=" flex space-x-6">
          {" "}
          <Link href="/aboutme">
            <h1 className="text-2xl font-medium mt-4">
              <span className="">About</span>
            </h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
