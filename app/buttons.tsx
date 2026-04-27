"use client"
import React, { useState, useEffect } from "react";

const items = [
  { label: "Intro", id: "top" },
  { label: "Statement", id: "statement" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Org", id: "orgs" },
];

const SideMenu = () => {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id : string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3 bg-white/40 backdrop-blur-md border border-black/10 rounded-2xl px-3 py-4 shadow-md">

        {items.map((item) => (
          <button key={item.id} onClick={() => {
                scrollTo(item.id);
            }}
            className={
                "text-sm px-3 py-2 rounded-xl transition-all duration-300 text-left " +
                (active === item.id
                ? "bg-[#EDE3E7] text-black"
                : "text-black/60 hover:bg-[#EDE3E7]/30")
            }
            >
            {item.label}
          </button>
        ))}

      </div>
    </div>
  );
};

export default SideMenu;