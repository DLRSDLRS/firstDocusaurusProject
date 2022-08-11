import React from "react";
import Layout from "@theme/Layout";

export default function FirstCommit() {
  return (
    <Layout title="FirstCommit" description="first attempt">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/FistCommit.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
