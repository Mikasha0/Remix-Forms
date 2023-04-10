import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main
      id="content"
      className="min-h-screen bg-gray-100 flex justify-center items-center"
    >
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">
          Why not use an app to manage your blogs better?
        </h1>

        <p className="text-lg mb-6">
          Try our early beta and never lose track of your blogs.
        </p>
        <p className="">
          <Link
            to="/blog"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Getting Started!
          </Link>
        </p>
      </div>
    </main>
  );
}
