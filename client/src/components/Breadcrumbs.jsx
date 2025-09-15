import React from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-1">
        {/* Home link */}
        <li className="flex items-center">
          <Link to="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          {pathnames.length > 0 && (
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          )}
        </li>

        {/* Dynamic parts */}
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center">
              {isLast ? (
                <span className="text-gray-700 font-medium capitalize">
                  {name.replace(/-/g, " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-gray-900 transition-colors capitalize"
                >
                  {name.replace(/-/g, " ")}
                </Link>
              )}
              {!isLast && (
                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
