"use client";

import { TWhyUsListProps } from "@/types/types";
import { motion } from "framer-motion";

const WhyUsList = ({ title, description, index }: TWhyUsListProps) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, translateY: -60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 grid gap-4 w-full">
            <div className="h-10 w-10 rounded-full bg-indigo-600 text-slate-50 grid place-items-center text-xl border-2 border-indigo-500 group">
                {index + 1}
            </div>
            <h3 className="text-xl text-slate-400 font-bold">
                {title}
            </h3>
            <p className="text-slate-400">
                {description}
            </p>
        </motion.div>
    );
};

export default WhyUsList;