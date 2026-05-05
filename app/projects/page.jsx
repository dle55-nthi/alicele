"use client"
import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import PinkContainer from "@/app/container"
import SmallBox from "@/app/skills/component";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const projectData = [
    {
      title: "Funding System Simulation",
      desc: "Planned and scoped a cloud-based funding management solution using Microsoft Azure, including system architecture, technical roadmap, and phased implementation strategy. Developed Excel-based tracking models to monitor progress, resource allocation, and performance metrics, while collaborating with QA to evaluate risks, streamline processes, and ensure alignment with measurable business outcomes."
    },
    {
      title: "Database System Design - Restaurant Simulation",
      desc: "Designed and implemented a relational database system to solve restaurant operations tracking challenges, including ERP and CRM data modeling, schema design, and normalization to ensure data integrity. Built the system using Microsoft Access and Excel, developing complex queries to support efficient data retrieval, reporting, and operational analysis."
    },
    {
      title: "Customer Loyalty Program - UrbanPlate",
      desc: "Case study of a restaurant facing low customer engagement and inconsistent retention. This project proposes a data-driven loyalty system supported by a Figma prototype and an Excel dashboard to track customer behavior, visit frequency, and reward usage. The solution focuses on improving customer engagement by 10% and enhancing data quality through 12% more effective data cleaning and standardization."
    },
    {
      title: "Inventory Ordering System",
      desc: "Designed a role-based inventory management system with separate Staff and Manager logins to streamline ordering and reduce operational waste. The system was prototyped in Figma and supported by an Access database connected to an Excel backend for structured data handling and query processing. It features an interactive dashboard with time-period reporting for tracking inventory trends, ordering patterns, and waste levels. A defined ordering workflow (flow chart–based process) was implemented to improve decision-making and standardize restocking procedures, resulting in a 30% reduction in waste and more efficient inventory control.",
    }
  ];
  return (
    <main className="min-h-50 flex flex-col items-center justify-center">
      <section id = "projects" className="flex flex-col justify-center text-center">
        <h1 className="text-6xl font-serif text-black/80 tracking-wide">projects</h1>
        <PinkContainer>
        <div className="flex gap-4 flex-wrap justify-center ">

          {projectData.map((project, index) => (
            <div key={index} onClick={() => toggle(index)} className="cursor-pointer">
                <SmallBox>
                  <h1><b>{project.title}</b></h1>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        {project.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </SmallBox>
              </div>
            ))}
        </div>
        </PinkContainer>
      </section>
    </main>
  )
}

export default Projects