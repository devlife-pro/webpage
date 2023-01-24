function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 items-center">
      <div>
        <h1 className="text-7xl">Devlife - A blog for developers</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-purple-400">
            Every developer's
          </span>{" "}
          favorite blog!
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Latest webdev technologies | Example projects | Tutorials & More!
      </p>
    </div>
  );
}

export default Banner;
