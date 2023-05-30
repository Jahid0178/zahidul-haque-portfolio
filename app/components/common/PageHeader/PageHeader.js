const PageHeader = ({ title }) => {
  return (
    <h2 className="text-primary text-8xl md:text-[260px] font-bold tracking-widest mb-4">
      {title}
      <span className="text-[#FED9CA]">.</span>
    </h2>
  );
};

export default PageHeader;
