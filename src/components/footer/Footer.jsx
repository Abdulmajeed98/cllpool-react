import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import data from "../../data.json";
import QuickLink from "./QuickLink";
import ContactInfo from "../contact/ContactInfo";
import FooterTitle from "./FooterTitle";
import CustomMap from "./../contact/CustomMap";

const icons = [
  {
    id: 1,
    icon: <MdPhone className="h-full w-full" />,
    name: "phone",
  },
  {
    id: 2,
    icon: <MdEmail className="h-full w-full" />,
    name: "email",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactUsData = data.contactInfoData.slice(0, -1);

  return (
    <footer className="px-sides bg-slate-700 pt-16 pb-4 text-white">
      <div className="flex">
        {/* first div */}
        <div className="w-1/3">
          <div className="mb-8">
            <Logo className="fill-white" />
          </div>
          <h3 className="my-2 text-xl">Learn more about us from:</h3>
          <div className="my-2 flex gap-16">
            <a
              href="https://www.facebook.com/CllpoolCompany"
              className="text-3xl transition-all duration-300 hover:scale-125 hover:text-sky-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/cllpool_company/?hl=en"
              className="text-3xl transition-all duration-300 hover:scale-125 hover:text-orange-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCtD6FoJRzZLIh7kd5z0uZEA"
              className="text-3xl transition-all duration-300 hover:scale-125 hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* second div */}
        <div className="flex w-1/3 justify-between gap-8">
          <div className="flex-1">
            <FooterTitle title={data.footerTitles.quickLinks} />
            <div className="mt-4 flex flex-col gap-1">
              {data.navLinks.map((element) => (
                <QuickLink
                  key={element.id}
                  dest={element.destination}
                  content={element.content}
                  type={element.type}
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <FooterTitle title={data.footerTitles.contactUs} />
            <div className="mt-4 flex flex-col gap-4">
              {contactUsData.map((element) => (
                <ContactInfo
                  key={element.id}
                  icon={
                    icons.find(
                      (icon) =>
                        icon.name === element.icon || icon.id === element.icon
                    ).icon
                  }
                  title={element.title}
                  content={element.content}
                  href={element.href}
                  altContent={element.altContent}
                  altHref={element.altHref}
                  animation={""}
                  titleSize={"text-md"}
                />
              ))}
            </div>
          </div>
        </div>

        {/* third div */}
        <div className="w-1/3 px-16">
          <FooterTitle title={data.footerTitles.visitUs} />
          <div className="my-4 mx-auto h-48 w-11/12">
            <CustomMap
              latitude={data.CLLPOOL_COORDINATES.latitude}
              longitude={data.CLLPOOL_COORDINATES.longitude}
              mapStyle="mapbox://styles/mapbox/light-v10"
            />
          </div>
        </div>
      </div>
      <center>
        <p className="mt-10 text-lg font-light uppercase opacity-50">
          {data.CLLPOOL_COPYRIGHT.firstPart} &copy; {currentYear}{" "}
          {data.CLLPOOL_COPYRIGHT.secondPart}
        </p>
      </center>
    </footer>
  );
};

export default Footer;
