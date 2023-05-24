const Header = ({ name, img }) => {
  const image = img ? img : "bg-gradient-to-r from-[#0f1f47] to-[#5f6984]";
  return (
    <div className="h-96 overflow-hidden">
      <div
        className={`w-full  bg-cover bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center  h-full flex justify-center items-center`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 className="text-4xl  md:text-7xl text-white captitalize text-shadow text-center">
          {name ? name : ""}
        </h1>
      </div>
    </div>
  );
};

export default Header;
//bg-gradient-to-r from-[#0f1f47] to-[#5f6984]
