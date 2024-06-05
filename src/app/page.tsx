"use client";
import "./globals.css";
import { inter } from "../../public/fonts/font";
import { useEffect, useState } from "react";
import SphereComponent from "../components/Sphere";
export default function Home() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorXY({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
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
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-8xl font-semibold text-slate-900 ${inter.className}`}
          >
            Hey, I&apos;m Iana{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm opacity-50 text-slate-900 ${inter.className}`}
          >
            I&apos;m a passionate creative developer dedicated to turning ideas
            into immersive digital experiences. From elegant websites to
            interactive applications.
          </p>
        </a>
        <a></a>

        <a></a>

        <div
          className="flex lg:col-span-2 flex-col overflow-y-auto space-y-2"
          style={{ height: "400px" }}
        >
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-stone-50">
              Portfolio{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-stone-50">
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
          </a>
        </div>
      </div>
    </main>
  );
}
