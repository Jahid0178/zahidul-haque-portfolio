import { usePathname } from "next/navigation";

const PageHeader = ({ title, className, ...rest }) => {
  const pathname = usePathname();
  return (
    <h2
      className={`text-primary text-4xl md:text-6xl font-bold tracking-widest drop-shadow-lg ${
        pathname === "/" && "text-center"
      } mb-12 ${className}`}
      {...rest}
    >
      {title}
      <span className="text-[#FED9CA]">.</span>
    </h2>
  );
};

export default PageHeader;
