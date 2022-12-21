import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ x: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            exit={{ x: [null, -100, 0], opacity: 0 }}
            layout
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
