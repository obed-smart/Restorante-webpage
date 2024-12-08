function Nav() {
  return (
    <div>
      <nav className="flex  py-5 justify-between sticky items-center">
        <h1 className="font-semibold text-2xl">
          <span className="bg-tetiary text-white px-[4px] rounded-md mr-[3px]">
            F
          </span>
          OODI
        </h1>
        <ul className="flex gap-10 text-xl ">
          <li className="hover:text-tetiary transition-colors duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-tetiary  transition-colors duration-300">
            <a href="/" className="flex justify-center items-center gap-2">
              Menu{" "}
              <span>
                <img src="/dropDown.png" alt="" />
              </span>
            </a>
          </li>
          <li className="hover:text-tetiary  transition-colors duration-300">
            <a href="/" className="flex justify-center items-center gap-2">
              Services{" "}
              <span>
                {" "}
                <img src="/dropDown.png" alt="" />
              </span>
            </a>
          </li>
          <li className="hover:text-tetiary  transition-colors duration-300">
            <a href="/">Offers</a>
          </li>
        </ul>
        <div className="flex gap-8 justify-between items-center">
          <div>
            <img
              src="/🦆 icon _search_.png"
              alt="_search_ icon"
              className="w-6"
            />
          </div>
          <div className="relative ">
            <img
              src="\fi-rr-shopping-bag.png"
              alt="shopping bag icon"
              className="w-5"
            />
            <p className="absolute -top-3 rounded-full px-2 -right-3 text-[13px] bg-tetiary text-white">
              8
            </p>
          </div>
          <button className="bg-tetiary pb-2 py-1 cursor-pointer px-6 rounded-3xl text-white text-xl">
        
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
