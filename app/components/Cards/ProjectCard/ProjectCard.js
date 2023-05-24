import Image from "next/image";
import demo from "/public/images/demo.jpg";

const ProjectCard = () => {
  return (
    <div>
      <Image
        src={demo}
        alt=""
        width={500}
        height={500}
        className="w-full rounded-lg"
      />
      <div className="mt-3">
        <h2 className="mb-2 text-2xl">
          Creating an Immersive Gaming Experience with Nebula
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
