import Header from "@/components/Header";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Home = ({ products }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="bg-gray-100 h-screen ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
