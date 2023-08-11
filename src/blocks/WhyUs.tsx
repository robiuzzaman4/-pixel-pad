import Button from "@/components/Button";
import WhyUsList from "@/components/WhyUsList";
import { whyChooseUsContent } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const WhyUs = () => {
    return (
        <section className="bg-slate-900/40 border-b border-slate-900 scroll-mt-20" id="whyus">
            <div className="overflow-hidden">
                <div className="pp-container py-20 grid gap-8 relative">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower4.svg" alt="flower" height={32} width={32} className="animate-spin-slow" />
                    </div>

                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-12">
                        Why <span className="text-indigo-500">Choose</span> Us
                    </h3>

                    {/* content */}
                    <div className="grid lg:grid-cols-3 gap-4">
                        {/* left part */}
                        <div className="h-full w-full bg-slate-900 p-8 flex flex-col items-center justify-center gap-4 rounded-xl">
                            <div className="text-2xl font-bold flex flex-col items-center gap-4 w-fit">
                                <span className="text-indigo-500">
                                    <i className="ri-shape-2-fill"></i>
                                </span>
                                <span className="text-center">Read the benefits and say goodbye to your confusion!</span>
                            </div>
                            <Link href="/#pricing" className="w-full">
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-slate-50">
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                        {/* right part */}
                        <div className="grid gap-0 lg:col-span-2 divide-y-2 divide-slate-900 group-hover:divide-y-0">
                            {
                                whyChooseUsContent.map((content, index) => (
                                    <WhyUsList key={index} {...content} index={index}/>
                                ))
                            }
                        </div>
                    </div>

                    {/* grdient */}
                    <div className="absolute bottom-0 -right-4 h-80 w-56 lg:h-96  -rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;