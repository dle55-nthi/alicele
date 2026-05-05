"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  url: string;
  alt: string;
}

export default function PhotoDeck({ photos }: { photos: Photo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function getIndex(i: number) {
    var length = photos.length;

    if (length === 0) {
      return 0;
    }

    var result = i % length;

    if (result < 0) {
      return result + length;
    }

    return result;
  }

  function goNext() {
    setCurrentIndex(function (prev) {
      return getIndex(prev + 1);
    });
  }

  function goPrev() {
    setCurrentIndex(function (prev) {
      return getIndex(prev - 1);
    });
  }

  useEffect(function () {
    if (!photos || photos.length === 0) {
      return;
    }

    var interval = setInterval(function () {
      goNext();
    }, 4000);

    return function () {
      clearInterval(interval);
    };
  }, [photos.length]);

  function getStack() {
    var left = getIndex(currentIndex - 1);
    var middle = getIndex(currentIndex);
    var right = getIndex(currentIndex + 1);

    return [
      { photo: photos[left], position: "left", key: left },
      { photo: photos[middle], position: "middle", key: middle },
      { photo: photos[right], position: "right", key: right }
    ];
  }

  if (!photos || photos.length === 0) {
    return null;
  }

  var stack = getStack();

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div onClick={goPrev} className="absolute left-0 top-0 w-1/2 h-full z-30" />
      <div onClick={goNext} className="absolute right-0 top-0 w-1/2 h-full z-30" />
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1200px" }}>

        <AnimatePresence initial={false}>
        {stack.map(function (item) {
          var isLeft = item.position === "left";
          var isRight = item.position === "right";
          var isMiddle = item.position === "middle";
          var x = 0;

          if (isLeft === true) {
            x = -260;
          }

          if (isRight === true) {
            x = 260;
          }

          var scaleValue = 0.8;
          var opacityValue = 1;
          var rotationValue = 0;

          if (isMiddle === true) {
            scaleValue = 1;
            // opacityValue = 1;
          }

          if (isLeft === true) {
            rotationValue = -10;
          }

          if (isRight === true) {
            rotationValue = 10;
          }

          var zIndexValue = 0;

          if (isMiddle === true) {
            zIndexValue = 30;
          }

          if (isLeft === true) {
            zIndexValue = 20;
          }

          if (isRight === true) {
            zIndexValue = 10;
          }

          return (
            <motion.div
                key={item.key + "-" + item.position}
                className="absolute"
                initial={{ opacity: 0, scale: 0.8, x: 0 }}
                animate={{ x: x, scale: scaleValue, opacity: opacityValue, rotateZ: rotationValue, zIndex: zIndexValue }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
              <img
                src={item.photo.url}
                alt={item.photo.alt}
                className="w-[420px] h-[520px] object-cover rounded-2xl shadow-2xl"
                draggable={false}
              />
            </motion.div>
          );
        })}
        </AnimatePresence>

        <div className="absolute bottom-6 flex flex-col items-center gap-4 z-40">

          {/* BUTTONS */}
          <div className="flex gap-6">
            <button onClick={goPrev} className="px-4 py-2 bg-black/30 text-white rounded-full">previous</button>
            <button onClick={goNext} className="px-4 py-2 bg-black/30 text-white rounded-full">next</button>
          </div>

          {/* DOTS */}
          <div className="flex gap-2 mt-2">
            {photos.map(function (photo, i) {

              var isActive = i === currentIndex;

              var dotStyle =
                "w-2 h-2 rounded-full transition-all duration-150";

              if (isActive === true) {
                dotStyle = "w-6 h-2 rounded-full bg-black";
              }

              if (isActive === false) {
                dotStyle = "w-2 h-2 rounded-full bg-black/30";
              }

              return (
                <div
                  key={photo.url + "-dot"}
                  className={dotStyle}
                  onClick={function () {
                    setCurrentIndex(i);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}