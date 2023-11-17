import { useAptabase } from "@aptabase/react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const { trackEvent } = useAptabase();
  const { liveLink, gitLink, title, image, id, description } = data;
  return (
    <div className="bg-white bg-opacity-10 p-3 rounded border border-black shadow-[-4px_4px_0_0_#111223]">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full rounded-lg"
      />
      <div className="mt-3">
        <h2 className="mb-2 text-2xl">{title}</h2>
        <div className="flex gap-4 mb-2">
          <Link
            href={liveLink}
            target="_blank"
            onClick={() =>
              trackEvent("project_card_live_link", {
                title: title,
                link: liveLink,
              })
            }
          >
            Live Link
          </Link>
          <Link
            href={gitLink}
            target="_blank"
            onClick={() =>
              trackEvent("project_card_git_link", {
                title: title,
                link: gitLink,
              })
            }
          >
            Git Link
          </Link>
        </div>
        <p>
          Click <b>See More Details</b> Button To Get More Details About Project
        </p>
        <Link
          href={`/works/${id}`}
          className="btn-primary shadow-[-4px_4px_0_0_#111223] mt-4"
          onClick={() =>
            trackEvent("project_card_see_more_details_btn", {
              title: title,
            })
          }
        >
          See More Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
