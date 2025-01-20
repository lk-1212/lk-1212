import React from "react";
import { SOCIALS } from "./constants";
import Link from "next/link";
import Image from "next/image";

const Contacts = () => {
  const renderSocials = () => {
    const getSocials = SOCIALS.map((contactItem, index) => {
      return (
        <div className="p-4" key={index}>
          <Link href={contactItem.link}>
            <Image
              src={contactItem.icon}
              alt={`${contactItem.platform} icon`}
              width={50}
              height={50}
            />
          </Link>
        </div>
      );
    });
    return getSocials;
  };
  return (
    <div className="flex items-center justify-center">{renderSocials()}</div>
  );
};

export default Contacts;
