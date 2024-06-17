import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import Eyes from "./Eyes";

function Eyepage() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-ful h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <Eyes />
      </div>
    </div>
  );
}

export default Eyepage;
