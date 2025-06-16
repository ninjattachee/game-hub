import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GameDetailSkeleton = () => {
  return (
    <>
      <Skeleton height="40px" marginBottom={4} />
      <SkeletonText noOfLines={8} spacing={3} />
    </>
  );
};

export default GameDetailSkeleton;
