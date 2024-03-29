import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import { Link } from 'react-router-dom';

export const Navigation: FC = observer(() => {

    return (
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
        <h3 className="font-bold">Strive</h3>
  
        <span>
          <Link to={"/"} className="mr-2">
            Home
          </Link>
          <Link to={"/favorites"}>Favorites</Link>
        </span>
      </nav>
    );
});