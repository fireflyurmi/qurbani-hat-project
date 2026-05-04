"use client";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const LottieAnimation = ({ animationPath, width = "160px" }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie loading error:", err));
  }, [animationPath]);

  if (!animationData) return <div style={{ width, height: "100px" }} />;

  return (
    <div style={{ width }} className="mx-auto flex justify-center items-center">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
