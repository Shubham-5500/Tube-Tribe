import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <BasicLayout>
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl font-medium mb-2">Page not found</p>
          <p className="text-foreground/70 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="gradient-bg hover:opacity-90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </BasicLayout>
  );
};

export default NotFound;
