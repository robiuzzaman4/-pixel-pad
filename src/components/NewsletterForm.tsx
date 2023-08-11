// "use client";

// import { toast } from "react-hot-toast";

// const NewsletterForm = () => {

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const form = e.target as HTMLFormElement;
//         const email = form.email.value;
//         if (email) {
//             form.reset();
//             return toast.success("Thanks for your subscription!", {
//                 iconTheme: {
//                     primary: '#6366f1',
//                     secondary: '#f8fafc',
//                 },
//             });
//         } else {
//             return toast.error("Please provide your email!");
//         }
//     }
//     return (
//         <form
//             onSubmit={handleSubmit}
//             className="w-full sm:max-w-md mx-auto relative">
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="example@gmail.com"
//                 className="w-full px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-900 focus:border-indigo-500 focus:outline-none" />
//             <button className="absolute right-0 top-0 bottom-0 px-3 rounded-xl bg-indigo-500 text-slate-50 transition">
//                 <i className="ri-send-plane-fill text-xl"></i>
//             </button>
//         </form>
//     );
// };

// export default NewsletterForm;

"use client";

import { TSpotlightProps } from "@/types/types";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion"
import { toast } from "react-hot-toast";

const NewsletterForm = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: TSpotlightProps) => {
        let bounds = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - bounds.left);
        mouseY.set(clientY - bounds.top);

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        if (email) {
            form.reset();
            return toast.success("Thanks for your subscription!", {
                iconTheme: {
                    primary: '#6366f1',
                    secondary: '#f8fafc',
                },
            });
        } else {
            return toast.error("Please provide your email!");
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove} className="h-full w-full sm:max-w-xl mx-auto bg-slate-900 text-slate-50 grid place-items-center relative group rounded-xl cursor-pointer z-10">
            <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-slate-950 z-30 rounded-xl p-8 flex flex-col items-center gap-4">
                    <p className="text-slate-400 text-center pb-4">
                        To stay up to date with Web Trands, Subscribe our newsletter!
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-900 focus:border-indigo-500 focus:outline-none" />
                        <button className="absolute right-0 top-0 bottom-0 px-3 rounded-xl bg-indigo-500 text-slate-50 transition">
                            <i className="ri-send-plane-fill text-xl"></i>
                        </button>
                    </form>
                    <p className="text-xs text-slate-400 text-center">
                        No concerns, only one email monthly.
                    </p>

            </div>

            {/* spotlight hover */}
            <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition rounded-xl z-40"
                style={{
                    background: useMotionTemplate`radial-gradient(
                    400px circle at ${mouseX}px ${mouseY}px,
                    rgba(99, 102, 241, 0.15),
                    transparent 80%
                  )`
                }}>
            </motion.div>
            {/* 300px */}

            {/* border div hover */}
            <motion.div className="absolute -inset-0 pointer-events-none opacity-0 group-hover:opacity-100 rounded-xl transition z-20"
                style={{
                    background: useMotionTemplate`radial-gradient(
                    400px circle at ${mouseX}px ${mouseY}px,
                    rgb(99, 102, 241),
                    transparent 80%
                  )`
                }}>
            </motion.div>
            {/* 200px */}
        </motion.div >
    );
};

export default NewsletterForm;