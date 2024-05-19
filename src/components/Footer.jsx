import React from "react";
import editableData from "@/data/editableData.json";
import Link from "next/link";

const Footer = () => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  // Access the data from JSON
  const { mainBody, footer } = editableData;

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl pb-3 text-center">{`${footer.heading}`}</h2>
        <p className="text-lg text-center pb-">
          {`${footer.message}`},{" "}
          <Link
            className="text-blue-500 underline"
            href={`mailto:${footer.email}`}
          >
            {`${footer.email}`}
          </Link>
          .
        </p>
        <i className="fas fa-code mt-3" /> with <i className="fas fa-heart" />{" "}
        by{" "}
        <Link
          href="https://github.com/Atul9180/portfolio.git"
          aria-label="GitHub"
          className="text-dark"
        >
          <span className="inline-block px-2 py-1 text-xs font-semibold leading-none text-white bg-gray-700 rounded-md">{`${mainBody.firstName} ${mainBody.lastName}`}</span>
        </Link>
        using <i className="fab fa-react" />
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
