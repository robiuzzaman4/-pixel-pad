import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants";
import Image from "next/image";

const Services = () => {
    const icons = [
        "ri-code-s-slash-fill", "ri-quill-pen-fill", "ri-fire-fill"
    ];
    return (
        <section className="bg-slate-900/40 border-b border-slate-900 scroll-mt-20" id="services">
            <div className="overflow-hidden h-full w-full">
                <div className="pp-container py-20 grid gap-8 relative">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower3.svg" alt="flower" height={32} width={32} className="animate-spin-slow" />
                    </div>

                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-12">
                        Top <span className="text-indigo-500">Services</span>
                    </h3>

                    {/* all service cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
                        {
                            services.map((service, index) => (
                                <ServiceCard key={index} {...service} iconSrc={icons[index]} />
                            ))
                        }
                    </div>

                    {/* grdient */}
                    <div className="absolute bottom-0 -right-4 h-80 w-56 lg:h-96  -rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;