"use client";

import { TServiceCardProps } from "@/types/types";
import { motion } from "framer-motion";

const ServiceCard = ({ service_title, description, iconSrc }: TServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950 rounded-tl-3xl rounded-br-3xl p-8 flex flex-col gap-4 group cursor-pointer border border-slate-900 hover:border-indigo-500 relative">

            {/* top section */}
            <div className="bg-pattern h-40 w-full rounded-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-slate-900">
                <div className="h-10 w-10 rounded-full bg-indigo-600 text-slate-50 grid place-items-center text-xl border-2 border-indigo-500">
                    {<i className={iconSrc}></i>}
                </div>
                <h3 className="text-center text-indigo-500 text-xl sm:text-2xl font-medium z-10">
                    {service_title}
                </h3>
                <div className="absolute inset-12 bg-gradient-to-r from-violet-500 to-indigo-800 rounded-full filter blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            </div>

            {/* description */}
            <p className="text-slate-400">
                {description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;