import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Loading({ size }) {
  const displayStack = (s) => {
    const skeletonItems = Array.from({ length: s }, (_, index) => (
      <Stack spacing={1} key={index}>
        <Skeleton variant="text" width={710} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" width={710} height={100} />
      </Stack>
    ));

    return skeletonItems;
  };

  return (
    <div className="flex justify-center items-center flex-col mt-6">
      {displayStack(size)}
    </div>
  );
}

Loading.propTypes;
