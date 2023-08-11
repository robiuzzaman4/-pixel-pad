"use client";

import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="pp-container py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
            {/* brand */}
            <Link href="/" className="text-2xl font-bold flex items-center gap-1 w-fit">
                <span className="text-indigo-500">
                    <i className="ri-shape-2-fill"></i>
                </span>
                <span>Pixel Pad</span>
            </Link>

            {/* navlist */}
            <div className={`w-full lg:w-auto lg:flex flex-col lg:flex-row items-start lg:items-center gap-3 ${isOpen ? "flex" : "hidden"}`}>
                {
                    navLinks.map((link) => {
                        return (
                            <Link
                                onClick={() => setIsOpen(!isOpen)}
                                key={link.linkName}
                                href={link.linkRef}
                                className={`text-slate-300 hover:text-indigo-500 transition `}>
                                {link.linkName}
                            </Link>
                        )
                    })
                }
                {/* pricing button */}
                <Link onClick={() => setIsOpen(!isOpen)} href="/#pricing" className="block lg:hidden w-full">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-slate-50 transition">Get Started</Button>
                </Link>
            </div>


            {/* pricing button */}
            <Link href="/#newsletter" className="hidden lg:block">
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-slate-50 transition">
                    Subscribe
                </Button>
            </Link>

            {/* humburger button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-[1.26rem] h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/40 hover:bg-slate-900/80 text-slate-50 text-2xl transition">
                <i className={`ri-equal-fill ${isOpen ? "hidden" : "block"}`}></i>
                <i className={`ri-close-fill ${isOpen ? "block" : "hidden"}`}></i>
            </Button>
        </nav >
    );
};

export default Navbar;

