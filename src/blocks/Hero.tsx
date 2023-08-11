import Button from "@/components/Button";
import { worksThumbnails } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-pattern  border-b border-slate-900 flex items-center justify-center overflow-hidden">
            <div className="pp-container pt-40 pb-20 grid lg:grid-cols-2 gap-8 h-full w-full relative">
                {/* left part */}
                <div className="flex flex-col items-center lg:items-start justify-center gap-4 z-10">
                    <span className="text-center lg:text-start text-indigo-500 font-medium">
                        Make Your Brand!
                    </span>
                    <h1 className="text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl tracking-tight font-bold">
                        Shifting Ideas into Web Realities.
                    </h1>
                    <p className="text-center lg:text-start text-slate-400">
                        Transforming visionary concepts into captivating web experiences, bringing your ideas to life with innovative design and development.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
                        <Link href="/#pricing" className="w-full sm:w-fit">
                            <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-slate-50 transition">
                                Choose Your Plan
                            </Button>
                        </Link>
                        <Link href="/#works" className="w-full sm:w-fit">
                            <Button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-50 transition">
                                Our Latest Works
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* right part */}
                <div className="w-full h-full bg-slate-950/10 backdrop-blur-2xl p-4 border border-slate-900 rounded-xl relative group overflow-hidden z-10 cursor-pointer">
                    {/* https://cdn.dribbble.com/userupload/7021163/file/original-2572958505200cdd2f0add82e8568000.png */}
                    <Image
                        src={worksThumbnails[0].imgSrc}
                        alt="Image"
                        width={720}
                        height={720}
                        className="rounded-xl w-full" />

                    {/* border */}
                    <div className="-z-10 absolute bottom-0 left-0 right-0 h-10 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-56 mx-auto bg-gradient-to-tr from-pink-500 to-blue-800 filter blur-3xl opacity-30 group-hover:opacity-80 transition"></div>
                </div>


                {/* gradients */}
                <div className="absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-800 filter blur-3xl opacity-20">
                </div>
                <div className="absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                </div>
            </div>
        </section>
    );
};

export default Hero;