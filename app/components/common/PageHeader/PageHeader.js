const PageHeader = ({ title }) => {
  return (
    <h2 className="text-primary text-8xl md:text-[260px] font-bold tracking-widest mb-4 drop-shadow-lg">
      {title}
      <span className="text-[#FED9CA]">.</span>
    </h2>
  );
};

export default PageHeader;
