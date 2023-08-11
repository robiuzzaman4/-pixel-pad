"use client";

import { TPricingProps, TSpotlightProps } from "@/types/types";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion"
import Button from "./Button";

const PricingCard = ({ plan_name, description, price, features, index }: TPricingProps) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: TSpotlightProps) => {
        let bounds = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - bounds.left);
        mouseY.set(clientY - bounds.top);

    }
    //  [#0A141F]
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove} className="h-full w-full bg-slate-900 text-slate-50 grid place-items-center relative group rounded-xl cursor-pointer z-10">
            <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-slate-950 z-30 rounded-xl p-8 flex flex-col items-start gap-4">
                {/* title and price*/}
                <h5 className="text-xl text-indigo-500 font-bold">
                    {plan_name}
                </h5>
                <p className="text-slate-400">
                    {description}
                </p>
                <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight">
                    {price}
                </h3>

                {/* features */}
                <div className="grid gap-2">
                    {features.map((feature, index) => (
                        <div key={index}
                            className="flex items-center gap-2">
                            <i className="ri-check-fill text-indigo-500"></i>
                            <p className="text-slate-400">{feature}</p>
                        </div>
                    ))}
                </div>

                <Button className={`mt-auto w-full text-slate-50 transition ${index === 1 ? "bg-indigo-600 hover:bg-indigo-500" : "bg-slate-900 hover:bg-slate-800"}`}>
                    Buy Plan
                </Button>
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

export default PricingCard;