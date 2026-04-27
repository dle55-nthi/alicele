"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingFavorites() {
  const words = [
    "sushi",
    "matcha latte",
    "banhmi",
    "beef noodle soup",
    "chicken curry",
    "popeyes",
    "spicy salmon",
    "rice",
    "oolong tea",
    "pistachio ice cream",
    "blueberry pie",
    "vanilla long john",
    "sunny side egg w bacon",
    "honey greek yogurt",
    "banana smoothie",
    "nuttella crepe",
    "skincare girlie",
  ];

  const images = [
    "/sticker button/balletshoes.png",
    "/sticker button/home.png",
    "/sticker button/pearl.png",
    "/sticker button/phone.png",
    "/sticker button/pie.png",
    "/sticker button/rose.png",
  ];

  const [wordItems, setWordItems] = useState([]);
  const [imageItems, setImageItems] = useState([]);

  useEffect(() => {
    const allItems = [
      ...words.map((text, i) => ({
        type: "word",
        id: `w-${i}`,
        content: text,
      })),
      ...images.map((src, i) => ({
        type: "image",
        id: `i-${i}`,
        content: src,
      })),
    ];

    const lanes = 10;
    const laneWidth = 100 / lanes;

    const shuffled = allItems.sort(() => Math.random() - 0.5);

    const generated = shuffled.map((item, i) => {
      const lane = i % lanes;

      return {
        id: item.id,
        type: item.type,
        content: item.content,
        left: lane * laneWidth + laneWidth / 2,
        size: Math.random() * 50 + 40,
        duration: 18 + (i % 5),
        delay: i * 0.4,
      };
    });

    setWordItems(generated.filter((i) => i.type === "word"));
    setImageItems(generated.filter((i) => i.type === "image"));
  }, []);

  const floatAnimation = {
    y: ["100vh", "-120vh"],
    opacity: [0, 1, 1, 0],
  };

  const floatTransition = (item) => ({
    duration: item.duration,
    repeat: Infinity,
    delay: item.delay,
    ease: "easeInOut",
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {wordItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute flex items-center justify-center"
          style={{
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={floatAnimation}
          transition={floatTransition(item)}
        >
          <div className="px-4 py-2 rounded-full bg-pink-100/40 backdrop-blur-md text-sm">
            {item.content}
          </div>
        </motion.div>
      ))}

      {imageItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute flex items-center justify-center"
          style={{
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={floatAnimation}
          transition={floatTransition(item)}
        >
          <img
            src={item.content}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}