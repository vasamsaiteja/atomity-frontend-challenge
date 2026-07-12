import "./AnimatedCard.css";
import type { User } from "../../api/api";
import { motion } from "framer-motion";

type AnimatedCardProps = {
  user: User;
};

function AnimatedCard({ user }: AnimatedCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.article
      className="animated-card"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      <img src={user.image} alt={user.firstName} className="avatar" />

      <h3>
        {user.firstName} {user.lastName}
      </h3>

      <p>{user.email}</p>

      <span className="status">Active</span>
    </motion.article>
  );
}

export default AnimatedCard;
