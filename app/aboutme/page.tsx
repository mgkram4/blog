import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex-col justify-center items-center space-y-8">
      <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-pink-600 rounded dark:text-pink-500 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
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

      <div className="space-y-4 text-center mx-4 md:mx-12">
        <p className="font-bold md:text-lg">
          Hi, my name is Bella! I enjoy anything outdoors, like hiking, camping,
          and going to the beach. I love my pets and all animals. My hobbies
          include going to raves/festivals, tanning on the beach, and spending
          time with my friends. I'm currently a student at Cal Poly Pomona
          studying psychology and early childhood studies.
        </p>
      </div>
    </div>
  );
}
