import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "./components/Hero/Hero";
import SearchBar from "./components/SearchBar/SearchBar";
import AnimatedCard from "./components/AnimatedCard/AnimatedCard";
import SkeletonCard from "./components/SkeletonCard/SkeletonCard";
import EmptyState from "./components/EmptyState/EmptyState";
import ErrorState from "./components/ErrorState/ErrorState";

import { useProviders } from "./hooks/userProviders";

import "./App.css";
import Footer from "./Footer/Footer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function App() {
  const { data = [], isLoading, error } = useProviders();

  const [search, setSearch] = useState("");

  const filteredUsers = data.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <main className="container">
      <Hero />

      <SearchBar value={search} onChange={setSearch} />

      {isLoading && (
        <div className="card-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}

      {!isLoading && error && <ErrorState />}

      {!isLoading && !error && filteredUsers.length === 0 && <EmptyState />}

      {!isLoading && !error && filteredUsers.length > 0 && (
        <motion.div
          key={search}
          className="card-grid"
          id="providers"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredUsers.map((user) => (
              <AnimatedCard key={user.id} user={user} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      <Footer />
    </main>
  );
}

export default App;
