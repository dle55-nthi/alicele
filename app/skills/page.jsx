"use client"
import React from "react";
import Link from 'next/link';
import PinkContainer from "@/app/container";
import SmallBox from "@/app/skills/component";
import { motion, useAnimation } from "framer-motion";
export default function Skills() {
  const list = [
    {id: 1, name: 'sql'},
    {id: 2, name: 'python'},
    {id: 3, name: 'c/c++'},
    {id: 4, name: 'power query'},
    {id: 5, name: 'powerbi'},
    {id: 6, name: 'access'},
    {id: 7, name: 'figma'},
    {id: 8, name: 'erp & crm'},
    {id: 9, name: 'copilot'},
    {id: 10, name: 'a/b testing'},
    {id: 11, name: 'kpi tracking'},
    {id: 12, name: 'forecasting analysis'},
    {id: 13, name: 'ui/ux'},
    {id: 14, name: 'power pivot'},
    {id: 15, name: 'risk assesment'},
    {id: 16, name: 'sas'},
    {id: 17, name: 'statistical analytics'},
    {id: 18, name: 'time series'},
    {id: 19, name: 'system design'},
    {id: 20, name: 'react'},
    {id: 21, name: 'css'},
    {id: 22, name: 'dashboard design'}
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <section id = "skills">
        <h1 className="text-6xl font-serif text-black/80 tracking-wide text-center">skills</h1>
        <PinkContainer>
          <div className="flex gap-4 flex-wrap">
            {list.map((item) => (
              <DraggableBox key={item.id} name={item.name} />
            ))}
          </div>
        </PinkContainer>
      </section>
    </div>
  );
}

function DraggableBox({ name }) {
  const controls = useAnimation();

  const handleDragEnd = () => {
    setTimeout(() => {
      controls.start({ x: 0, y: 0, transition: { type: "spring" } });
    }, 1000);
  };

  return (
    <motion.div
      drag
      animate={controls}
      onDragEnd={handleDragEnd}
      dragElastic={0.2}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <SmallBox>
        <h1><b>{name}</b></h1>
      </SmallBox>
    </motion.div>
  );
}