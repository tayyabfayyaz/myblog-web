import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { MdMenu } from "react-icons/md";
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header () {
    return(
        <>
        {/* Header */}
              <header className="bg-gray-800 text-white p-4 justify-between items-center hidden md:hidden lg:flex xl:flex">
                {/* Logo */}
                <div className="text-xl font-bold">MyBlog</div>
        
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                  <Link href="/" className="hover:text-blue-400">Home</Link>
                  <Link href="/blogPage" className="hover:text-blue-400">Blogs</Link>
                  <Link href="/about" className="hover:text-blue-400">About</Link>
                  <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                </nav>
        
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href="https://github.com/tayyabfayyaz" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/tayyab-fayyaz-25757b277/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="https://tayyab-web.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                    <FaGlobe />
                  </a>
                </div>
              </header>


              <header className="flex md:flex lg:hidden xl:hidden h-[66px] bg-gray-800 text-white px-4 justify-between items-center">
              <div className="text-xl font-bold">MyBlog</div>
              <Sheet>
                <SheetTrigger><MdMenu className="text-2xl" /></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle><div className="text-xl font-bold">MyBlog</div></SheetTitle>
                    <SheetDescription>
                      {/* Navigation Links */}
                      <ul className="leading-10 space-y-4 text-lg font-semibold">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/blogPage" className="hover:text-blue-400">Blogs</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                      </ul>

                      {/* Social Links */}
                      <div className="flex space-x-4 justify-center items-center mt-5">
                        <a href="https://github.com/tayyabfayyaz" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                          <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/tayyab-fayyaz-25757b277/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                          <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                          <FaTwitter />
                        </a>
                        <a href="https://tayyab-web.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                          <FaGlobe />
                        </a>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              </header>
        </>
    )
}

export default Header;