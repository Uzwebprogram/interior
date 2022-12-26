import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const SkeletonCommon = ({ width, height, variant, bgColor, cricular }) => {
  return (
    <>
      <Skeleton
        sx={{ bgcolor: bgColor }}
        variant={variant}
        width={width}
        height={height}
      />
    </>
  );
};

export default SkeletonCommon;
