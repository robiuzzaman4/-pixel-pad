import { navLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="bg-slate-900/40 scroll-mt-20">
            <div className="overflow-hidden">
                <div className="pp-container py-20 relative">
                    <div className="flex flex-col items-start gap-4 w-full">
                        {/* brand */}
                        <Link href="/" className="text-2xl font-bold flex items-center gap-1 w-fit">
                            <span className="text-indigo-500">
                                <i className="ri-shape-2-fill"></i>
                            </span>
                            <span>Pixel Pad</span>
                        </Link>
                        <div className="flex flex-wrap md:items-center justify-between gap-4 w-full">
                            {/* navlist */}
                            <div className="flex flex-wrap md:items-center gap-4">
                                {
                                    navLinks.map((link) => {
                                        return (
                                            <Link
                                                key={link.linkName}
                                                href={link.linkRef}
                                                className={`text-slate-300 hover:text-indigo-500 transition `}>
                                                {link.linkName}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            {/* social */}
                            <div className="flex flex-wrap md:items-center gap-4">
                                <i className="ri-facebook-circle-fill text-slate-300 hover:text-indigo-500 transition cursor-pointer"></i>
                                <i className="ri-twitter-fill text-slate-300 hover:text-indigo-500 transition cursor-pointer"></i>
                                <i className="ri-slack-fill text-slate-300 hover:text-indigo-500 transition cursor-pointer"></i>
                            </div>
                        </div>

                        <p className="w-fit mx-auto text-center text-sm text-slate-400 pt-12">
                            All right reserved @pixelpad. Copyright & Ⓒ2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;