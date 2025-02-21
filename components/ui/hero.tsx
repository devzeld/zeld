import React from "react";
import { motion } from "framer-motion";

export default function Hero({ children }: { children: React.ReactNode }) {
  return <div className="hero">{children}</div>;
}
