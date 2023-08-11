import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    return (
        <section className="bg-slate-900/40 border-b border-slate-900 scroll-mt-20" id="reviews">
            <div className="overflow-hidden">
                <div className="pp-container py-20 grid gap-8 relative">
                    {/* flower animation */}
                    <div className="w-12 h-12 rounded-xl grid place-items-center border border-slate-900 mx-auto">
                        <Image src="/flower6.svg" alt="flower" height={36} width={36} className="animate-spin-slow" />
                    </div>

                    {/* title */}
                    <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight pb-12">
                        Satisfied  <span className="text-indigo-500">Clients</span>
                    </h3>

                    {/* all reviews */}
                    <Marquee>
                        {
                            reviews.map((review) => (
                                <ReviewCard key={review.id} {...review} />
                            ))
                        }
                    </Marquee>

                    {/* grdient */}
                    <div className="absolute bottom-0 -right-4 h-80 w-56 lg:h-96  -rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;