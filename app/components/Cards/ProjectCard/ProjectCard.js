import Image from "next/image";
import demo from "/public/images/demo.jpg";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const { liveLink, gitLink, title, technologies } = data;
  return (
    <div className="bg-[#8566FF] bg-opacity-10 p-3 rounded-lg border border-indigo-500">
      <Image
        src={demo}
        alt=""
        width={500}
        height={500}
        className="w-full rounded-lg"
      />
      <div className="mt-3">
        <h2 className="mb-2 text-2xl">{title}</h2>
        <div className="flex gap-4 mb-2">
          <Link href={liveLink} target="_blank">
            Live Link
          </Link>
          <Link href={gitLink} target="_blank">
            Git Link
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
        <div className="mt-2">
          <h4 className="text-lg font-bold">Technology used</h4>
          <ul className="flex gap-4 mt-2 overflow-x-auto whitespace-nowrap snap-x-mandatory">
            {technologies.map((technologi, ind) => (
              <li
                className="border p-1 rounded whitespace-nowrap snap-child cursor-pointer"
                key={ind}
              >
                {technologi}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
