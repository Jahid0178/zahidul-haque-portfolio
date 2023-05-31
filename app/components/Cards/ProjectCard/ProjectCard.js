import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const { liveLink, gitLink, title, image, id } = data;
  return (
    <div className="bg-white bg-opacity-10 p-3 rounded-lg border border-black">
      <Image
        src={image}
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
        <Link href={`/works/${id}`} className="btn-primary mt-4">
          See More Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
