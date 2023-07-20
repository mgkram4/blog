import Link from "next/link";
import Image from "next/image";

export default function aboutme() {
  return (
    <div className="flex-col justify-center space-y-8 md:space-y-5">
      <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-pink-600 rounded dark:text-pink-500  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        About Me
      </h1>

      <div className="flex justify-center">
        <Image
          src="/bella.png" // Replace with the actual path to your image
          alt="bella"
          width={400} // Set the desired width of the image
          height={250}
          className="rounded-lg" // Set the desired height of the image
        />
      </div>
      <div className="flex justify-center items-center space-y-8 font-bold text-center mx-12">
        Hi, my name is Bella! I enjoy anything outdoors, like hiking, camping,
        and going to the beach. I love my pets and all animals. My hobbies
        include going to raves/festivals, tanning on the beach, and spending
        time with my friends. Im currently a student at Cal Poly Pomona studying
        psychology and early childhood studies.
      </div>
    </div>
  );
}
