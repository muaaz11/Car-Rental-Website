import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  // Function to format text: Convert "exploreCars" → "Explore Cars"
  const formatText = (text) => {
    return text
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
      .replace(/-/g, " ") // Replace hyphens with space (optional)
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter
  };

  return (
    <div className="text-gray-500 flex items-center gap-2 text-sm">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      {paths.map((path, index) => {
        const route = "/" + paths.slice(0, index + 1).join("/");

        return (
          <span key={index} className="flex items-center">
            <span className="mx-2">»</span>
            <Link to={route} className="hover:text-blue-500">
              {formatText(path)}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
