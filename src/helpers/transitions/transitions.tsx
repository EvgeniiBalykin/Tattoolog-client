import { motion } from 'framer-motion';

const transition = (OgComponent: any) => {
  return () => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.3, 1, 0.3, 1] }}
      >
        <OgComponent />
      </motion.div>
    </>
  );
};

export default transition;
