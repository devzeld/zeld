import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CustomMotionDivProps extends HTMLMotionProps<"div"> {
    initial: "initial" | "final";
  }

export default function Hero ({ children }: { children: React.ReactNode }) {
    return (
        <div className="hero">
            <motion.div animate={{ scale: 2, transition: { duration: 2 } }}>
                {children}
            </motion.div>
        </div>
    );
}
