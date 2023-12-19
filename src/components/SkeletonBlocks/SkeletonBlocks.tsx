import { Grid, Skeleton } from '@mui/material';

const SkeletonBlocks = () => {
  const blocks = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {blocks.map((el) => (
        <Grid item lg={4} md={5} mb={2} key={el}>
          <Skeleton variant="rectangular" width={370} height={370} />
        </Grid>
      ))}
    </>
  );
};

export default SkeletonBlocks;
