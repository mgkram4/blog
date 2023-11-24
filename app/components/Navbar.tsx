import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-medium ">
              Stay
              <span className="text-slate-600 rounded dark:text-slate-500">
                Stoic
              </span>
            </h1>
          </Link>
        </div>
        <div className=" flex space-x-6">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
