/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import breadcrumbArrow from "../../../assets/breadcrumbArrow.svg";

function BreadcrumbsItem({ url, label, lastItem }) {
  return (
    <li className="flex items-center">
      <Link href={url}>
        <a className="mr-2 text-lg text-primary-dark capitalize font-bold mb-0 hover:no-underline hover:text-primary-text">
          {/* eslint-disable-next-line no-useless-escape */}
          {label.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")}
        </a>
      </Link>
      {lastItem ? null : (
        <img className="mr-2" src={breadcrumbArrow} alt="Voltar" width="8px" />
      )}
    </li>
  );
}

BreadcrumbsItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  lastItem: PropTypes.bool.isRequired,
};

export default BreadcrumbsItem;
