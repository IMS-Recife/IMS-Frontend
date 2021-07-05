import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import breadcrumbArrow from "../../assets/breadcrumbArrow.svg";

function Breadcrumbs() {
  const router = useRouter();
  const pathArray = router.asPath.split("/");

  const getPreviousPath = (currentPath) => {
    const currentPathArr = currentPath.split("/");
    currentPathArr.pop();
    return currentPathArr.join("/");
  };

  return (
    <>
      <div className="flex z-40 content-center ml-16 mt-8 mb-3">
        {pathArray.map((path, i) => (
          <div className="flex justify-center content-center">
            <Link href={`/${getPreviousPath(path)}`} className="cursor-pointer">
              <p
                className={
                  i < pathArray.length - 1
                    ? "mr-2 text-lg text-primary-dark capitalize font-bold mb-0 cursor-pointer"
                    : "mr-2 text-lg text-primary-text capitalize font-bold mb-0 cursor-pointer"
                }
              >
                {path === "" ? "Home" : path}
              </p>
            </Link>
            {i < pathArray.length - 1 && (
              <img
                className="mr-2"
                src={breadcrumbArrow}
                alt="Voltar"
                width="8px"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Breadcrumbs;
