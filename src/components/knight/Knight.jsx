import React, { useState, useEffect } from "react";
import styles from "./knight.module.css";

const Knight = () => {
  const [frame, setFrame] = useState(0);
  const [animationState, setAnimationState] = useState("standing");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [dragonState, setDragonState] = useState("alive");

  const animations = {
    standing: ["./src/assets/knight/knight1.png"],
    walking: [
      "./src/assets/knight/knight2.png",
      "./src/assets/knight/knight3.png",
    ],
    slashing: [
      "./src/assets/knight/slash1.png",
      "./src/assets/knight/slash2.png",
      "./src/assets/knight/slash3.png",
      "./src/assets/knight/slash4.png",
      "./src/assets/knight/slash5.png",
      "./src/assets/knight/slash6.png",
      "./src/assets/knight/slash7.png",
      "./src/assets/knight/slash8.png",
      "./src/assets/knight/slash9.png",
      "./src/assets/knight/slash10.png",
      "./src/assets/knight/slash11.png",
      "./src/assets/knight/slash12.png",
      "./src/assets/knight/slash13.png",
    ],
    dragon: [
      "./src/assets/knight/dragon1.png",
      "./src/assets/knight/dragon2.png",
      "./src/assets/knight/dragon3.png",
      "./src/assets/knight/dragon4.png",
      "./src/assets/knight/dragon5.png",
    
   
    ],
  };

  const images = animations[animationState];

  // Handle scroll-based animation state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Update animation state based on scroll position
      if (scrollTop < 200) {
        setAnimationState("standing");
      } else if (scrollTop >= 200) {
        setAnimationState("walking");
      }

      // Reset animation to standing if scrolling stops
      if (scrollTop !== lastScrollY) {
        setLastScrollY(scrollTop);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        setScrollTimeout(
          setTimeout(() => {
            if (scrollTop === lastScrollY) {
              setAnimationState("standing");
            }
          }, 200)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  // Handle walking frame cycling
  useEffect(() => {
    let walkingInterval;
    if (animationState === "walking") {
      walkingInterval = setInterval(() => {
        setFrame((prevFrame) => (prevFrame + 1) % animations.walking.length);
      }, 200); // Adjust interval timing for animation speed
    } else if (animationState === "standing") {
      setFrame(0); // Reset to the first frame when standing
    }

    return () => {
      if (walkingInterval) {
        clearInterval(walkingInterval);
      }
    };
  }, [animationState]);

  // Handle slashing animation
  const triggerSlash = () => {
    setAnimationState("slashing");
    setDragonState("alive");

    const totalFrames = animations.slashing.length;
    let currentFrame = 0;

    const interval = setInterval(() => {
      setFrame(currentFrame);
      currentFrame += 1;

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
        setAnimationState("walking");
        setDragonState("dead");
        setFrame(0);
      }
    }, 20);
  };

  // Handle "S" key press for slashing
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "s") {
        triggerSlash();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={
          dragonState === "alive"
            ? "./src/assets/dragon1.png"
            : "./src/assets/dragonDead.png"
        }
        alt="Dragon"
        className={styles.dragonImage}
      />
      <img
        src={images[frame]}
        alt="Knight animation"
        className={styles.knightImage}
      />
    </div>
  );
};

export default Knight;
