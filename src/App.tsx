import { useState } from "react";
import AnimatedCard from "./components/AnimatedCard/AnimatedCard";
import Hero from "./components/Hero/Hero";
import SkeletonCard from "./components/SkeletonCard/SkeletonCard";
import { useProviders } from "./hooks/userProviders";
import { motion } from "framer-motion";
import SearchBar from "./components/SearchBar/SearchBar";
import EmptyState from "./components/EmptyState/EmptyState";
import ErrorState from "./components/ErrorState/ErrorState";

function App() {
  const { data, isLoading, error } = useProviders();
  const [search, setSearch] = useState("");

  const filteredUsers =
    data?.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    ) ?? [];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  if (!filteredUsers.length) {
    return (
      <main className="container">
        <EmptyState />
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container">
        <div className="card-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <ErrorState />
      </main>
    );
  }

  return (
    <main className="container">
      <Hero />
      <SearchBar value={search} onChange={setSearch} />
      <motion.div
        className="card-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredUsers?.map((user) => (
          <AnimatedCard key={user.id} user={user} />
        ))}
      </motion.div>
    </main>
  );
}

export default App;
