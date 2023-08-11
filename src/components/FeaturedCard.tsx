"use client";

import { TFeaturedCardProps } from "@/types/types";
import { motion } from "framer-motion";

const FeaturedCard = ({ feature_title, feature_description, iconSrc }: TFeaturedCardProps) => {


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 p-8 bg-slate-900/40 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-indigo-600 text-slate-50 grid place-items-center text-xl border-2 border-indigo-500">
                {<i className={iconSrc}></i>}
            </div>
            <h3 className="text-xl text-slate-400 font-bold">
                {feature_title}
            </h3>
            <p className="text-slate-400">
                {feature_description}
            </p>
        </motion.div>
    );
};

export default FeaturedCard;