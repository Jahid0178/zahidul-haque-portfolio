const PageHeader = ({ title, ...rest }) => {
  return (
    <h2
      className="text-primary text-4xl md:text-6xl font-bold tracking-widest drop-shadow-lg text-center mb-12"
      {...rest}
    >
      {title}
      <span className="text-[#FED9CA]">.</span>
    </h2>
  );
};

export default PageHeader;
