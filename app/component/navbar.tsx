import { NavLink } from "@remix-run/react";
export default function Navbar() {
  return (
    <main>
      <nav className="bg-black fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <NavLink to="/" className="text-white font-bold text-xl">
                  Monthly DevBlog
                </NavLink>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/monthlyReport"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Monthly Report
                  </NavLink>
                  <NavLink
                    to="/blogsReject"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs Rejected
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
