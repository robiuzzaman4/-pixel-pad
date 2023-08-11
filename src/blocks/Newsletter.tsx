import NewsletterForm from "@/components/NewsletterForm";
import Image from "next/image";

const Newsletter = () => {
    return (
        <section className="bg-slate-950 border-b border-slate-900 scroll-mt-20" id="newsletter">
            <div className="overflow-hidden">
                <div className="pp-container py-20 grid gap-8 relative">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower7.svg" alt="flower" height={32} width={32} className="animate-spin-slow" />
                    </div>

                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-8">
                        Newsletter <span className="text-indigo-500">Subscription</span>
                    </h3>
                    
                    <NewsletterForm />

                    {/* grdient */}
                    <div className="absolute bottom-0 -left-4 md:left-64 h-80 w-56 lg:h-96  -rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;