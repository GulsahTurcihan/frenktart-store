import HeaderCartButton from "./HeaderCartButton";

const Header = () => {

  return (
    <header className=" bg-white flex justify-between items-center px-10 border-b border-solid z-10 ">
      <img className="py-4 px-4 mx-10 h-36" src="logo.svg" alt="" />
      <div className="flex justify-between items-center gap-10 mx-40">
        <button className="text-blue-400 hover:text-blue-500 text-xl">Login</button>
        <HeaderCartButton />
      </div>
    </header>
  );
};

export default Header;
