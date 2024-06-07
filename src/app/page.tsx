"use client";
import "./globals.css";
import { inter } from "../../public/fonts/font";
import { useEffect, useState } from "react";
import SphereComponent from "../components/Sphere";
import NavBar from "@/components/NavBar";
export default function Home() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading process.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Adjust time based on your load time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorXY({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="text-2xl font-semibold">Loading...</div>
  //     </div>
  //   );
  // }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary_bg">
        <div className="relative w-40 h-40">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-spin-slow"
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="none" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="none" />
            <path
              fill="none"
              id="circlePath"
              d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
            />
            <text>
              <textPath
                xlinkHref="#circlePath"
                startOffset="50%"
                textAnchor="middle"
                className="text-xl font-bold"
              >
                Loading Loading Loading
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <main
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const cursorElement = document.querySelector(".cursor") as HTMLElement;
        cursorElement.style.left = `${e.clientX}px`;
        cursorElement.style.top = `${e.clientY}px`;

        if (target.tagName === "A") {
          cursorElement.style.transform = "translate(-50%, -50%) scale(3)";
          cursorElement.style.backgroundColor = "#ff0000"; // Red for dramatic effect
        } else {
          cursorElement.style.transform = "translate(-50%, -50%) scale(1)";
          cursorElement.style.backgroundColor = "white";
        }
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary_bg film-grain"
    >
      <NavBar siteName="Portfolio 2024 " />
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left space-x-1">
        {/* <div className="lg:col-span-1">
        </div> */}

        <div
          className="cursor"
          style={{
            left: `${cursorXY.x}px`,
            top: `${cursorXY.y}px`,
            position: "fixed",
            pointerEvents: "none",
            zIndex: 1000,
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            backgroundColor: "white",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.2s, background-color 0.2s",
          }}
        />
        {/* <SphereComponent /> */}
        <a
          className="group rounded-lg px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-8xl font-semibold text-slate-900 ${inter.className}`}
          >
            Hey, I&apos;m Iana{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-slate-900">
              -&gt;
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm opacity-50 text-slate-900 ${inter.className}`}
          >
            I&apos;m an enthusiastic developer committed to transforming
            concepts into engaging digital experiences, ranging from
            sophisticated websites to dynamic applications.
          </p>
        </a>
        <a></a>

        <a></a>

        <div
          className="flex lg:col-span-2 flex-col overflow-y-auto space-y-2"
          style={{ height: "400px" }}
        >
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-stone-50">
              Portfolio{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 text-stone-50">
              Explore my projects.
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-stone-50">
              Resume{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 text-stone-50">
              Take a look at my resume.
            </p>
          </a>
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-stone-50">
              Connect{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 text-stone-50">
              Let&apos;s keep in touch.
            </p>
          </a>
          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-stone-50">
              Contact{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 text-stone-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-stone-50">
              Contact{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 text-stone-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a> */}
        </div>
      </div>
    </main>
  );
}
