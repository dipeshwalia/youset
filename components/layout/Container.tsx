import React from "react";

const Pattern = () => {
  return (
    <div
      className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div className="relative h-full max-w-7xl mx-auto">
        <svg
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="square"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={2}
                height={4}
                className="text-blue-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#square)" />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="square1"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                 x={0}
                 y={0}
                 width={2}
                 height={4}
                className="text-blue-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#square1)" />
        </svg>
      </div>
    </div>
  );
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-200  h-full ">
      <div className="mx-auto px-4 sm:px-6lg:px-8 ">
        <div className="relative bg-gray-50 h-screenoverflow-hidden">
          <Pattern />
          <div className="relative pt-6 pb-16 sm:pb-24">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
