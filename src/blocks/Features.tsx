import FeaturedCard from "@/components/FeaturedCard";
import { features } from "@/constants";
import Image from "next/image";

const Features = () => {
    const icons = [
        "ri-magic-fill", "ri-award-fill", "ri-layout-2-fill", "ri-contrast-2-line", "ri-book-fill", "ri-slideshow-fill"
    ];
    return (
        <section className="border-b border-slate-900 scroll-mt-20" id="features">
            <div className="overflow-hidden h-full w-full">
                <div className="pp-container py-20 grid gap-8 relative">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower.svg" alt="flower" height={32} width={32} className="animate-spin-slow" />
                    </div>
                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-12">
                        Key <span className="text-indigo-500">Features</span>
                    </h3>

                    {/* all featured cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
                        {
                            features.map((feature, index) => (
                                <FeaturedCard
                                    key={index}
                                    {...feature}
                                    iconSrc={icons[index]} />
                            ))
                        }
                    </div>

                    {/* grdient */}
                    <div className="absolute bottom-0 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;