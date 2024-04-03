import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../src/icons/facebook.png";
import instagram from "../../src/icons/instagram.png";
import youtube from "../../src/icons/youtube.png";
import linkedin from "../../src/icons/linkedin.png";

const Notifications = () => {
  return (
    <div className="h-12 bg-fuchsia-50 text-orange-400 px-4 flex items-center justify-between text-center text-sm md:text-base">
      <div>+880 1626885465</div>
      <div className="flex items-center justify-between gap-4">
        <Link href="">
          <img width={35} height={35} src={facebook} alt="" />
        </Link>
        <Link href="">
          <img width={35} height={35} src={instagram} alt="" />
        </Link>
        <Link href="">
          <img width={35} height={35} src={youtube} alt="" />
        </Link>
        <Link href="">
          <img width={35} height={35} src={linkedin} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
