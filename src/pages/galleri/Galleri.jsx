import { useState, useEffect } from "react";
import styles from "./galleri.module.css";
import galleryImages from "../../assets/galleryImages";
import Rollespil01 from "../../assets/Rollespil01.MP4";
import Rollespil02 from "../../assets/Rollespil02.MP4"; 


const Galleri = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scrolling functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % galleryImages.length
      );
    }, 3000); // Change images every 3 seconds (3000ms)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getPreviousIndex = () => {
    return (
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const getNextIndex = () => {
    return (currentImageIndex + 1) % galleryImages.length;
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Media Galleri</h1>
      </div>

      <div className={styles.frameContainer}>
        <div className={styles.imagesContainer}>
          <img
            src={galleryImages[getPreviousIndex()]}
            alt="Previous"
            className={styles.sideImage}
          />

          <img
            src={galleryImages[currentImageIndex]}
            alt="Current"
            className={styles.mainImage}
          />

          <img
            src={galleryImages[getNextIndex()]}
            alt="Next"
            className={styles.sideImage}
          />
        </div>
      </div>

      <div className={styles.imageCounter}>
        {currentImageIndex + 1} / {galleryImages.length}
      </div>

      <div className={styles.customerExperienceSection}>
        <h2 className={styles.sectionTitle}>Kundernes Oplevelse</h2>
        <div className={styles.gridContainer}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.gridItem}>
              <img
                src={image}
                alt={`Customer experience ${index + 1}`}
                className={styles.gridImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.customerVideoSection}>
        <h2 className={styles.sectionTitleVideo}>Rollespil Video</h2>
        <div className={styles.videoContainer}>
          <video className={styles.video} controls>
            <source src={Rollespil01} type="video/mp4" />
          </video>

          <video className={styles.video} controls>
            <source src={Rollespil02} type="video/mp4" />
          </video> 
        </div>
      </div>


    </div>
  );
};

export default Galleri;
