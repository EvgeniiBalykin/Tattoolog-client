import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { IProfilePost } from '@interfaces/index';
import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Box, Container } from '@mui/system';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import theme from '@ui/theme/theme';

const variants = {
  enter: {
    x: 0,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 0,
    opacity: 0,
  },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const PortfolioPost = ({ data }: { data?: IProfilePost }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, data?.photo_post.length || 0, page);
  const showButtons = useMediaQuery(theme.breakpoints.up('sm'));

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" maxWidth={370} height={450}>
              {showButtons && (
                <IconButton>
                  <ArrowCircleLeft onClick={() => paginate(-1)} />
                </IconButton>
              )}
              <motion.img
                key={page}
                src={data?.photo_post[imageIndex].photo}
                custom={direction}
                variants={variants}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
              {showButtons && (
                <IconButton onClick={() => paginate(1)}>
                  <ArrowCircleRight />
                </IconButton>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" marginBottom={5} color="pink">
              {' '}
              {data?.work_type?.name}
            </Typography>
            <Typography variant="h5" textAlign="justify">
              {data?.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AnimatePresence>
  );
};

export default PortfolioPost;
