import { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "./../utils/shortenAddress";

const NavBarItem = ({ title, classprops, to }) => (
  <Link className={`mx-4 cursor-pointer ${classprops}`} to={to}>
    {title}
  </Link>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="text-white md:flex-[0.5] flex-initial justify-center items-center">
        <NavBarItem title="Dapp" to="/Welcome" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          ["Transfer", "/Welcome"],
          ["Transactions", "/Transactions"],
        ].map(([title, to], index) => (
          <NavBarItem key={title + index} title={title} to={to} />
        ))}
        {currentAccount ? (
          <li className="bg-[#ff52e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#ff0000]">
            {shortenAddress(currentAccount)}
          </li>
        ) : (
          <li
            onClick={connectWallet}
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Connet
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              ["Transfer", "/Welcome"],
              ["Transactions", "/Transactions"],
            ].map(([title, to], index) => (
              <NavBarItem key={title + index} title={title} to={to} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
