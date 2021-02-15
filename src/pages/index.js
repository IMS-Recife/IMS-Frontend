import Head from "next/head";
import React from "react";
import Navbar from "../patterns/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
