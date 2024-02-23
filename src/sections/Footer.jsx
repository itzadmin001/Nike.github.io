import { footerLogo } from "../assets/images";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { footerLinks } from "../contants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  const whatsappLink = "https://wa.me/9828887630"; 
  const githubLink = "https://github.com/itzadmin001"; 
  const instagramLink = "https://www.instagram.com/itz__admin__01"; 

  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Whether for yourself or a loved one, [Shoe Brand/Model Name] makes for an exquisite gift. Wrap someone's feet in luxury and style, expressing your appreciation with a touch of footwear finesse.</p>
          <div className="flex items-center gap-5 mt-8 ">
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub width={24} height={24} />
              </a>
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp width={24} height={24} />
              </a>
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20">
          {footerLinks.map((section) => {
            return (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">{section.title}</h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                        <a>{link.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:item-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
