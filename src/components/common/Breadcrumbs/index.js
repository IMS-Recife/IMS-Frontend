import React from "react";
import PropTypes from "prop-types";
import BreadcrumbsItem from "./BreadcrumbsItem";

function Breadcrumbs({ label, url, path }) {
  return (
    <nav className="flex z-40 content-center ml-16 mt-8 mb-3">
      <ol className="list-none p-0 inline-flex">
        {path.map((route, i) => {
          if (route === "/") {
            return (
              <BreadcrumbsItem
                url="/"
                label="Home"
                lastItem={false}
                key={route}
              />
            );
          }
          if (i === path.length - 1) {
            return (
              <BreadcrumbsItem url={url} label={label} lastItem key={route} />
            );
          }
          return (
            <BreadcrumbsItem
              url={route}
              label={route}
              lastItem={false}
              key={route}
            />
          );
        })}
      </ol>
    </nav>
  );
}
Breadcrumbs.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Breadcrumbs;
