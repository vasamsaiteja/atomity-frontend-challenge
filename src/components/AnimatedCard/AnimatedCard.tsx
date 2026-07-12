import { motion, type Variants } from "framer-motion";
import "./AnimatedCard.css";
import type { User } from "../../api/api";

type AnimatedCardProps = {
  user: User;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

function AnimatedCard({ user }: AnimatedCardProps) {
  const progress = (user.id * 17) % 100;

  const status =
    progress > 75 ? "Excellent" : progress > 55 ? "Healthy" : "Needs Review";

  return (
    <motion.article
      layout
      className="animated-card"
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="card-header">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="avatar"
        />

        <span
          className={`status-badge ${
            status === "Excellent"
              ? "excellent"
              : status === "Healthy"
                ? "healthy"
                : "review"
          }`}
        >
          {status}
        </span>
      </div>

      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p className="role">{user.company.title}</p>
      <p className="email">{user.email}</p>
      <div className="progress-wrapper">
        <div className="progress-info">
          <span>Profile Score</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      <div className="card-footer">
        <div className="info">
          <small>Department</small>
          <strong>{user.company.department}</strong>
        </div>
        <div className="info">
          <small>Age</small>
          <strong>{user.age}</strong>
        </div>
      </div>
      <a href={`mailto:${user.email}`} className="contact-button">
        Contact
      </a>
    </motion.article>
  );
}

export default AnimatedCard;
