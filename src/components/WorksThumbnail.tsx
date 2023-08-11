"use client";

import { TWorksThumbnailProps } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";

const WorksThumbnail = ({ imgSrc }: TWorksThumbnailProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full bg-slate-950/10 backdrop-blur-2xl p-4 border border-slate-900 rounded-xl relative group overflow-hidden z-10 cursor-pointer">
            <Image
                src={imgSrc}
                alt="Image"
                width={720}
                height={720}
                className="rounded-xl w-full h-full aspect-video object-cover" />

            {/* border */}
            <div className="-z-10 absolute bottom-0 left-0 right-0 h-10 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-56 mx-auto bg-gradient-to-tr from-pink-500 to-blue-800 filter blur-3xl opacity-30 group-hover:opacity-80 transition"></div>
        </motion.div>
    );
};

export default WorksThumbnail;