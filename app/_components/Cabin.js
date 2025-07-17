import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-10 md:gap-20 border border-primary-800 py-5 px-6 sm:px-10 mb-24">
      {/* Image */}
      <div className="relative w-full h-64 sm:h-96 md:h-auto md:scale-[1.15] md:-translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover rounded"
          alt={`Cabin ${name}`}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 bg-primary-950 py-3 md:p-6 pb-1 md:translate-x-[-254px] md:w-[150%] w-full text-accent-100">
          Cabin {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center text-sm sm:text-base">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span>
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center text-sm sm:text-base">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span>
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center text-sm sm:text-base">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span>
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
