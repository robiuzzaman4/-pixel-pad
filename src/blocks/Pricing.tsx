import PricingCard from "@/components/PricingCard";
import { pricingPlans } from "@/constants";
import Image from "next/image";

const Pricing = () => {
    return (
        <section className="bg-slate-950 border-b border-slate-900 scroll-mt-20" id="pricing">
            <div className="overflow-hidden">
                <div className="pp-container py-20 relative grid gap-8">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower5.svg" alt="flower" height={24} width={24} className="animate-spin-slow" />
                    </div>

                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-12">
                        Choose Your <span className="text-indigo-500">Plan</span>
                    </h3>

                    {/* pricing cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            pricingPlans.map((pricing, index) => (
                                <PricingCard key={pricing.plan_name} {...pricing} index={index} />
                            ))
                        }
                    </div>

                    {/* grdient */}
                    <div className="absolute bottom-0 -left-4 h-80 w-56 lg:h-96  -rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;