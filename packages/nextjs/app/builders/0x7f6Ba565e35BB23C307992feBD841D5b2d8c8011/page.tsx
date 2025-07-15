import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaRunning } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

const KongPage: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="pt-10 pb-10 px-5 justify-center items-center flex flex-col bg-base-100 w-full max-w-3xl rounded-3xl">
          <Image
            src="https://avatars.githubusercontent.com/u/18190481?s=400&u=43a299844e466375bb4fe2235125925bff43b9ff&v=4"
            alt="Avatar"
            width={144}
            height={144}
            className="rounded-full mb-4"
          />
          <span className="text-2xl font-bold mb-2">My name is Kong</span>
          {/* Add a welcome message and address */}
          <span className="text-2xl font-bold mb-2">Welcome to my page!</span>
          <span className="text-lg mb-4">This is my personal page on Batch #18.</span>
          {/* Use the Address component to display the address */}
          <span className="text-lg font-bold">My Ethereum Address:</span>
          <Address address="0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011" onlyEnsOrAddress />
          {/* Add information about me and contact details */}
          <div className="text-2xl font-bold mt-3 mb-3">About Me</div>
          <span className="text-xl max-w-fit font-bold mb-4 mt-2 pr-20 pl-20">
            I am a backend development engineer with 5 years of work experience, specializing in Java and Python for web
            development.
          </span>
          <span className="text-xl max-w-fit font-bold mb-4 mt-2 pr-20 pl-20">
            My passion lies in delving deep into development technologies, constantly exploring new solutions to enhance
            system performance and functionality.
          </span>
          <div className="text-2xl font-bold mt-3 mb-3">Contact Me</div>
          <div className="flex">
            {/* Add social media links */}
            <span className="text-lg font-bold pl-20 pr-20">
              <Link href="https://github.com/fjkang" target="_blank">
                <SiGithub className="w-10 h-10" />
              </Link>
            </span>
            <span className="text-lg font-bold pl-20 pr-20">
              <Link
                href="https://speedrunethereum.com/builders/0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011"
                target="_blank"
              >
                <FaRunning className="w-10 h-10" />
              </Link>
            </span>
            <span className="text-lg font-bold pl-20 pr-20">
              <Link href="mailto:fjkang1991@gmail.com">
                <MdOutgoingMail className="w-10 h-10" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default KongPage;
