import WorksThumbnail from "@/components/WorksThumbnail";
import { worksThumbnails } from "@/constants";
import Image from "next/image";

const Works = () => {
    return (
        <section className="bg-slate-950 border-b border-slate-900 scroll-mt-20" id="works">
            <div className="overflow-hidden h-full w-full">
                <div className="pp-container py-20 grid gap-8 relative">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower2.svg" alt="flower" height={32} width={32} className="animate-spin-slow" />
                    </div>

                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-12">
                        Latest <span className="text-indigo-500">Works</span>
                    </h3>

                    {/* work gellary */}
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        {/* left side */}
                        <WorksThumbnail imgSrc={worksThumbnails[0].imgSrc} />
                        
                        {/* right side */}
                        <div className="grid grid-cols-2 gap-4">
                            {
                                worksThumbnails.slice(1, 5).map(({ id, imgSrc }) => (
                                    <WorksThumbnail key={id} imgSrc={imgSrc} />
                                ))
                            }
                        </div>
                    </div>

                    {/* grdient */}
                    <div className="absolute bottom-0 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;