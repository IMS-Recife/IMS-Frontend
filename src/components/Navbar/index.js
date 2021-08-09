import React from "react";
import { injectIntl } from "react-intl";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav
      className="grid grid-cols-2 w-100 shadow-md bg-white z-30 relative"
      style={{ height: "76px" }}
    >
      <div className="flex items-center justify-start">
        {router.asPath !== "/" && (
          <Link href="/">
            <p className="text-xl font-md text-secondary-green hover:text-secondary-green-darker font-raleway ml-2 cursor-pointer mb-0">
              Integrated Management System - IMS
            </p>
          </Link>
        )}
      </div>
      <div className="flex items-center justify-end mr-3">
        <Link href="/">
          <p
            className="text-lg font-semibold text-primary-text hover:text-primary-dark cursor-pointer mb-0"
            style={{ marginRight: "150px" }}
          >
            Cadastre-se
          </p>
        </Link>
        <Link href="/">
          <p className="text-lg font-semibold text-primary-text hover:text-primary-dark mr-5 cursor-pointer mb-0">
            Login
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default injectIntl(Navbar);
