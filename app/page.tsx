import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  AtSign,
  Earth,
  Code,
  HeartHandshake,
  ShieldCheck,
  MessageCircle,
  MessagesSquare,
  Video,
  CloudUpload,
  RefreshCcw,
  ClipboardCheck,
} from "lucide-react";

export default function Home() {
  return (
    <section className="bg-landing-page-background-light dark:bg-landing-page-background-dark font-display text-[#111815] dark:text-white transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* <!-- Top Navigation Bar --> */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe6e1] dark:border-[#1e3a2f] bg-white/80 dark:bg-landing-page-background-dark/80 backdrop-blur-md px-10 py-3 lg:px-40">
            <div className="flex items-center gap-3 text-[#111815] dark:text-white">
              <div className="size-8 text-landing-page-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#111815] dark:text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">
                WorkNest
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              {/* <div className="hidden md:flex items-center gap-9">
                <a
                  className="text-[#111815] dark:text-white text-sm font-semibold leading-normal hover text-landing-page-primary transition-colors"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="text-[#111815] dark:text-white text-sm font-semibold leading-normal hover text-landing-page-primary transition-colors"
                  href="#"
                >
                  Pricing
                </a>
                <a
                  className="text-[#111815] dark:text-white text-sm font-semibold leading-normal hover text-landing-page-primary transition-colors"
                  href="#"
                >
                  About
                </a>
              </div> */}
              <Link href={"/login"}>
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-landing-page-primary text-[#111815] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                  <span className="truncate">Login</span>
                </button>
              </Link>
            </div>
          </header>
          <main className="flex-1">
            {/* <!-- Hero Section --> */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 geometric-bg pointer-events-none"></div>
              <div className="px-4 lg:px-40 flex flex-1 justify-center py-12 lg:py-24">
                <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                  <div className="@container">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                      <div className="flex flex-col gap-8 flex-1">
                        <div className="flex flex-col gap-4 text-left">
                          <h1 className="text-[#111815] dark:text-white text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-[-0.04em]">
                            Collaborate better,{" "}
                            <span className="text-landing-page-primary">
                              deliver faster.
                            </span>
                          </h1>
                          <p className="text-[#608a79] dark:text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-[540px]">
                            The all-in-one workspace for modern teams to manage
                            projects, chat in real-time, and share files without
                            the clutter.
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href={"/register"}>
                            <button className="btn flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-landing-page-primary text-[#111815] text-lg font-extrabold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                              <span className="truncate">
                                Get Started for Free
                              </span>
                            </button>
                          </Link>
                          <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 border-2 border-[#dbe6e1] dark:border-[#1e3a2f] bg-white dark:bg-white/5 text-[#111815] dark:text-white text-lg font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                            <span className="truncate">Watch Demo</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-4 text-sm font-medium text-[#608a79]">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 overflow-hidden">
                              <Image
                                className="w-full h-full object-cover"
                                width={100}
                                height={100}
                                alt="Close-up portrait of professional female user"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb7wDyO_8hTjRNXPFtQaBZ7CuMf4Ggl66BooCQjBDoTvuGegAdOYp3qyw7767F8jn0sHC_gS_8Fcr3VGgkgC0a__6ZWKIYCPb3l2zYlwsmhzz31cRmTf1lV9dHHIElB8U96OTK3UVi7vY4IYm5sugHCwuUBGFObtnArAJ-mi9QuNvvfD6cmpJqGqh-O3cjlOoaNQTThlqkco6sF7ye2P0T_4KY1V4SLEnj2uAK3FdOf1CP7pCO_iIzRVn7QpsMjfIRk9Bt68Z7t1du"
                              />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-gray-300 overflow-hidden">
                              <Image
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                                alt="Close-up portrait of smiling male professional"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl479OGR6CaTsz05xzVp94jWWitRdRFyHtm16MwNePPUcBk8ED5p58PX2lcqFvqd5IlTLO-ik0DVg03V2h6y0cZI-ISxUaJYSQVmjRxyrcfmiJ60QQWeQBZPaxRNB_uDXQkDFgjRt_Uk3DTuYBhMF5u8HW3fAVnV8-ecUw_KIZN9GxqJB9KaLHSIJyNFcxuXjqgXbtYRVYPMq5cZ3R76P-oQl2mghmU4cR9ArDhfCtRk-UA3W9FyRkTQjbsnE7UzF0ZFfM4LXccXqa"
                              />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-gray-400 overflow-hidden">
                              <Image
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                                alt="Portrait of a creative project manager"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2Uc1OBb9iVgRGqGGIX2yg9x1GwZ3AFZ18Q4hoUvRK95eBgnWEn8QQ1AX6VMJ4aNuPtk2a7dq7y1hA8ths6qV3Oxxe_uTWe0RQpL78Hsz5z0g28vfykXUGR8GxxYYnYTC-VYKf8F501YvoePjjP9ipP-JVu1f_MP-t4G383da0yOglXbJ5VaEFFzbyx1mCniAY6J8h8bPliue7e6TTWMbyXpmQqXd_-RUqrWIENUE1-nqdNtZzrKpv16nrM-r8npHFs7eXS2htVaK"
                              />
                            </div>
                          </div>
                          <span>Joined by 10,000+ teams worldwide</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full lg:max-w-[600px] relative">
                        <div className="absolute -inset-4 bg-landing-page-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative bg-white dark:bg-[#1e3a2f]/30 p-2 rounded-2xl shadow-2xl border border-[#dbe6e1] dark:border-[#1e3a2f]">
                          <div
                            className="w-full aspect-[4/3] bg-cover bg-center rounded-xl"
                            data-alt="Modern SaaS dashboard showing project management boards and analytics"
                            style={{
                              backgroundImage:
                                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDqUUty4FmlKGJbfeJqZDExq3PqG_0oFHFpdn2B9ZNk16PZ3k9v5m22bHqsWV4cIil5ejR3lQuJ4QaV5bgx2E00c6qpiT6rgZG33wUkl6_M7eBQxIbuS5k5619-nnV7rbH5JYi6sYaqLd7YgrTNGs5WlA1asKfpUPNP7JW5oZFTsUByfCQBOhxXjRFzaGkcxGiVJ8N77tGrh2lMDO9U3Z-ANkhCevUIkYa9oD6Afo9JRUJz826C9aO4D3rkExZCUZ1KQYtBn_2i2wEg)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Feature Section --> */}
            <div className="px-4 lg:px-40 flex flex-1 justify-center py-16 bg-white dark:bg-landing-page-background-dark/50">
              <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                <div className="flex flex-col gap-12 px-4 @container">
                  <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-[#111815] dark:text-white text-3xl lg:text-4xl font-extrabold leading-tight max-w-[720px]">
                      Everything you need to manage your team in one place.
                    </h2>
                    <p className="text-[#608a79] dark:text-gray-400 text-lg font-medium leading-normal max-w-[720px]">
                      Stop jumping between apps. We've built the ultimate tool
                      for transparency and speed.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Feature 1 --> */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbe6e1] dark:border-[#1e3a2f] bg-landing-page-background-light/50 dark:bg-white/5 p-8 flex-col hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 rounded-lg bg-landing-page-primary/10 flex items-center justify-center text-landing-page-primary group-hover:bg-landing-page-primary group-hover:text-background-dark transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-kanban-icon lucide-kanban"
                        >
                          <path d="M5 3v14" />
                          <path d="M12 3v8" />
                          <path d="M19 3v18" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#111815] dark:text-white text-xl font-bold leading-tight">
                          Project Management
                        </h3>
                        <p className="text-[#608a79] dark:text-gray-400 text-base font-medium leading-relaxed">
                          Organize tasks with ease using our intuitive boards,
                          timelines, and automated workflows.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Feature 2 --> */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbe6e1] dark:border-[#1e3a2f] bg-landing-page-background-light/50 dark:bg-white/5 p-8 flex-col hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 rounded-lg bg-landing-page-primary/10 flex items-center justify-center text-landing-page-primary group-hover:bg-landing-page-primary group-hover:text-background-dark transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-message-circle-icon lucide-message-circle"
                        >
                          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#111815] dark:text-white text-xl font-bold leading-tight">
                          Real-time Chat
                        </h3>
                        <p className="text-[#608a79] dark:text-gray-400 text-base font-medium leading-relaxed">
                          Stay connected with your team through integrated
                          messaging, threads, and file annotations.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Feature 3 --> */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbe6e1] dark:border-[#1e3a2f] bg-landing-page-background-light/50 dark:bg-white/5 p-8 flex-col hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 rounded-lg bg-landing-page-primary/10 flex items-center justify-center text-landing-page-primary group-hover:bg-landing-page-primary group-hover:text-background-dark transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-cloud-upload-icon lucide-cloud-upload"
                        >
                          <path d="M12 13v8" />
                          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                          <path d="m8 17 4-4 4 4" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#111815] dark:text-white text-xl font-bold leading-tight">
                          File Sharing
                        </h3>
                        <p className="text-[#608a79] dark:text-gray-400 text-base font-medium leading-relaxed">
                          Keep all your project assets in one secure place with
                          unlimited cloud storage and versioning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="w-full  px-6 md:px-20 lg:px-40 pt-10 text-center">
              <h2 className="text-[#111813] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl mx-auto">
                Everything you need to{" "}
                <span className="text-landing-page-primary">scale</span> your
                production
              </h2>
            </section>
            {/* <!-- Feature 1: Alternating Layout (Text Left, Image Right) --> */}
            <section className="w-full  px-6 md:px-20 lg:px-40 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-landing-page-primary font-bold">
                      <span className="material-symbols-outlined">
                        <ClipboardCheck />
                      </span>
                      <span>Tasks &amp; Collaboration</span>
                    </div>
                    <h1 className="text-[#111813] dark:text-white tracking-tight text-3xl md:text-4xl font-black leading-tight">
                      Manage projects with surgical precision
                    </h1>
                    <p className="text-[#61896f] dark:text-gray-300 text-lg font-normal leading-relaxed">
                      Assign tasks, set deadlines, and track progress in
                      real-time. Our intuitive interface keeps your team focused
                      on what matters most without the overhead.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col gap-2 p-4 rounded-xl border border-[#dbe6df] dark:border-white/10 soft-green-gradient dark:bg-white/5">
                      <span className="material-symbols-outlined text-landing-page-primary">
                        <RefreshCcw />
                      </span>
                      <p className="text-[#111813] dark:text-white text-base font-bold">
                        Real-time sync
                      </p>
                      <p className="text-[#61896f] dark:text-gray-400 text-sm">
                        Updates across all team devices instantly.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-xl border border-[#dbe6df] dark:border-white/10 soft-green-gradient dark:bg-white/5">
                      <span className="material-symbols-outlined text-landing-page-primary">
                        <CloudUpload />
                      </span>
                      <p className="text-[#111813] dark:text-white text-base font-bold">
                        Asset Sharing
                      </p>
                      <p className="text-[#61896f] dark:text-gray-400 text-sm">
                        Centralized cloud storage for project files.
                      </p>
                    </div>
                  </div>
                  <Link href={"/register"}>
                    <button className="btn mt-4 flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-landing-page-primary text-[#111813] text-base font-bold transition-all hover:bg-landing-page-primary/90 hover:shadow-lg w-fit">
                      <span>Get Started Now</span>
                    </button>
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-landing-page-primary/20 rounded-2xl blur-xl transition-all group-hover:bg-landing-page-primary/30"></div>
                  <div
                    className="relative w-full aspect-[4/3] bg-cover bg-center rounded-2xl border border-[#dbe6df] dark:border-white/10 shadow-2xl overflow-hidden"
                    data-alt="UI dashboard mockup showing project task board and progress charts"
                    style={{
                      backgroundImage:
                        'url( "https://lh3.googleusercontent.com/aida-public/AB6AXuAuM8ZjWoTdz5bQPYa4Aih5MwlCsthfxIdJQTXkMTKwmxK5pWKIABZq18CQM36WNy90CWzweEDO8QB3B3pZ9QtVTjVjuhk85q-PLdYEFngxGtHKfKZb1PB9T6yUlpVpS9IV4E5vjxFKVzwpwKIspKl-yQNqpqzYQlIwughIIcoTFGU-eEXR3sSzkBWE7Zjyf0dPucavAbG1Qty1cOULO4DIvEe8TfugExbvT8vKRiw4DnfpIUUFi4TI8xAbSKaB040et8NVpZyfknhr")',
                    }}
                  ></div>
                </div>
              </div>
            </section>
            {/* <!-- Feature 2: Alternating Layout (Image Left, Text Right) --> */}
            <section className="w-full bg-white dark:bg-white/5 py-16 md:py-24">
              <div className=" mx-auto px-6 md:px-20 lg:px-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1 relative group">
                    <div className="absolute -inset-4 bg-landing-page-primary/10 rounded-2xl blur-xl"></div>
                    <div
                      className="relative w-full aspect-[4/3] bg-cover bg-center rounded-2xl border border-[#dbe6df] dark:border-white/10 shadow-2xl overflow-hidden"
                      data-alt="Chat interface illustration with team members commenting on a design file"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBObqP16Gi7e4ikoXaplYdCZcjl5nYywUqJAp9l5UIKWxICUSbpcQzR_KgrkGXFslTPSJsYFSXs4_wus837NfEOOLvdfb_B16CK8loxfqVyuF9-lej3-7zvcuV1OWmnJm2GjVKczFea0qUP5dS9DwmRmF2OR-1UXsAhFxPL2KpZqyJEtSdzQQn5anJHR1zxNvwNGuybgJXP8cMl4tQxzuu-dT4AvZb107c2Zki7FHA71IaKU1Dc4MWPuZMka-opDM-56KCV3rCBQflh")',
                      }}
                    ></div>
                  </div>
                  <div className="order-1 lg:order-2 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-landing-page-primary font-bold">
                        <span className="material-symbols-outlined">
                          <MessagesSquare />
                        </span>
                        <span>Seamless Communication</span>
                      </div>
                      <h1 className="text-[#111813] dark:text-white tracking-tight text-3xl md:text-4xl font-black leading-tight">
                        Keep your team in the loop, always
                      </h1>
                      <p className="text-[#61896f] dark:text-gray-300 text-lg font-normal leading-relaxed">
                        Communication is the lifeblood of great work. Integrated
                        chat and commenting threads ensure context is never
                        lost. Talk where the work happens.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-start p-4 bg-landing-page-background-light dark:bg-landing-page-background-dark rounded-xl border-l-4 border-landing-page-primary">
                        <span className="material-symbols-outlined text-landing-page-primary mt-1">
                          <Video />
                        </span>
                        <div>
                          <h3 className="text-[#111813] dark:text-white font-bold">
                            One-click Video Sync
                          </h3>
                          <p className="text-[#61896f] dark:text-gray-400 text-sm">
                            Instant huddles for when a chat message isn't
                            enough.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start p-4 bg-landing-page-background-light dark:bg-landing-page-background-dark rounded-xl border-l-4 border-landing-page-primary">
                        <span className="material-symbols-outlined text-landing-page-primary mt-1">
                          <MessageCircle />
                        </span>
                        <div>
                          <h3 className="text-[#111813] dark:text-white font-bold">
                            In-context Feedback
                          </h3>
                          <p className="text-[#61896f] dark:text-gray-400 text-sm">
                            Threaded comments directly on your design and code
                            blocks.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href={"/register"}>
                      <button className="mt-4 flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-landing-page-primary text-[#111813] text-base font-bold transition-all hover:bg-landing-page-primary/90 hover:shadow-lg w-fit">
                        <span>Explore Communication</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Final CTA Grid --> */}
            <section className="w-full  px-6 md:px-20 lg:px-40 py-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white dark:bg-white/5 border border-[#dbe6df] dark:border-white/10 text-center">
                  <div className="size-12 rounded-full bg-landing-page-primary/10 flex items-center justify-center mx-auto text-landing-page-primary">
                    <span className="material-symbols-outlined">
                      <ShieldCheck />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">Bank-level Security</h3>
                  <p className="text-[#61896f] dark:text-gray-400">
                    Your data is encrypted end-to-end with the highest industry
                    standards.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white dark:bg-white/5 border border-[#dbe6df] dark:border-white/10 text-center">
                  <div className="size-12 rounded-full bg-landing-page-primary/10 flex items-center justify-center mx-auto text-landing-page-primary">
                    <span className="material-symbols-outlined">
                      <HeartHandshake />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">24/7 Expert Support</h3>
                  <p className="text-[#61896f] dark:text-gray-400">
                    Real people ready to help you optimize your workflow
                    anytime.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white dark:bg-white/5 border border-[#dbe6df] dark:border-white/10 text-center">
                  <div className="size-12 rounded-full bg-landing-page-primary/10 flex items-center justify-center mx-auto text-landing-page-primary">
                    <span className="material-symbols-outlined">
                      <Code />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">Deep Integrations</h3>
                  <p className="text-[#61896f] dark:text-gray-400">
                    Connect with Github, Slack, Stripe, and 500+ other apps.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-landing-page-background-light dark:bg-landing-page-background-dark transition-colors duration-300">
              <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                  {/* <!-- Pricing Section Header --> */}
                  <div className="px-6 md:px-40 flex flex-col items-center justify-center py-12 md:py-20">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full text-center">
                      <span className="text-landing-page-primary font-bold tracking-wider text-sm uppercase mb-3">
                        Pricing Plans
                      </span>
                      <h2 className="text-[#111814] dark:text-white text-[32px] md:text-[42px] font-extrabold leading-tight tracking-[-0.015em] px-4 pb-4">
                        Simple, transparent pricing for teams of all sizes
                      </h2>
                      <p className="text-[#4f6b5a] dark:text-gray-400 text-lg max-w-2xl mx-auto px-4">
                        Choose the plan that fits your current needs and scale
                        as your business grows. No hidden fees.
                      </p>
                    </div>
                    {/* <!-- Pricing Cards Grid --> */}
                    <div className="layout-content-container flex flex-col max-w-[1100px] w-full mt-10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-3">
                        {/* <!-- Basic Card --> */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#dbe6e0] dark:border-[#2a3c31] bg-white dark:bg-[#1a2e23] p-8 transition-all hover:shadow-lg">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-[#111814] dark:text-white text-lg font-bold leading-tight">
                              Basic
                            </h3>
                            <p className="text-[#4f6b5a] dark:text-gray-400 text-sm mb-4">
                              Perfect for side projects and individuals.
                            </p>
                            <p className="flex items-baseline gap-1 text-[#111814] dark:text-white">
                              <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                                $0
                              </span>
                              <span className="text-base font-bold leading-tight">
                                /month
                              </span>
                            </p>
                          </div>
                          <Link href={"/register"}>
                            <button className=" btn flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-landing-page-background-light dark:bg-[#253d2f] text-[#111814] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border border-[#dbe6e0] dark:border-none hover:bg-gray-200 dark:hover:bg-[#2f4d3c] transition-colors">
                              <span className="truncate">Get Started</span>
                            </button>
                          </Link>
                          <div className="flex flex-col gap-4 mt-2">
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              5 Active Projects
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              10 GB Storage
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              Basic Community Support
                            </div>
                          </div>
                        </div>
                        {/* <!-- Pro Card (Highlighted) --> */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border-2 border-solid border-landing-page-primary bg-white dark:bg-[#1a2e23] p-8 shadow-xl relative transform scale-105 z-10">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-[#111814] dark:text-white text-lg font-bold leading-tight">
                                Pro
                              </h3>
                              <span className="text-[#111814] text-[11px] font-bold uppercase leading-normal tracking-[0.05em] rounded-full bg-landing-page-primary px-3 py-1 text-center">
                                Most Popular
                              </span>
                            </div>
                            <p className="text-[#4f6b5a] dark:text-gray-400 text-sm mb-4">
                              Everything you need for growing teams.
                            </p>
                            <p className="flex items-baseline gap-1 text-[#111814] dark:text-white">
                              <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                                $29
                              </span>
                              <span className="text-base font-bold leading-tight">
                                /month
                              </span>
                            </p>
                          </div>
                          <Link href={"/register"}>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-landing-page-primary text-[#111814] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#11d662] transition-colors shadow-md">
                              <span className="truncate">
                                Start 14-Day Free Trial
                              </span>
                            </button>
                          </Link>
                          <div className="flex flex-col gap-4 mt-2">
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              Unlimited Projects
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              100 GB Cloud Storage
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              Priority Email Support
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              Advanced Team Analytics
                            </div>
                          </div>
                        </div>
                        {/* <!-- Enterprise Card --> */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#dbe6e0] dark:border-[#2a3c31] bg-white dark:bg-[#1a2e23] p-8 transition-all hover:shadow-lg">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-[#111814] dark:text-white text-lg font-bold leading-tight">
                              Enterprise
                            </h3>
                            <p className="text-[#4f6b5a] dark:text-gray-400 text-sm mb-4">
                              Advanced security and custom controls.
                            </p>
                            <p className="flex items-baseline gap-1 text-[#111814] dark:text-white">
                              <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                                $99
                              </span>
                              <span className="text-base font-bold leading-tight">
                                /month
                              </span>
                            </p>
                          </div>
                          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-landing-page-background-light dark:bg-[#253d2f] text-[#111814] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border border-[#dbe6e0] dark:border-none hover:bg-gray-200 dark:hover:bg-[#2f4d3c] transition-colors">
                            <span className="truncate">Contact Sales</span>
                          </button>
                          <div className="flex flex-col gap-4 mt-2">
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              Custom Workspace Solutions
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              Unlimited Managed Storage
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              24/7 Dedicated Manager
                            </div>
                            <div className="text-[14px] font-medium leading-normal flex gap-3 text-[#111814] dark:text-gray-300">
                              <span className="material-symbols-outlined text-landing-page-primary text-[20px]">
                                <BadgeCheck />
                              </span>
                              SSO &amp; Advanced Security
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- CTA Section --> */}
                  <div className="px-6 md:px-40 flex flex-1 justify-center py-10">
                    <div className="layout-content-container flex flex-col max-w-[1100px] flex-1">
                      <div className="@container">
                        <div className="flex flex-col justify-center items-center gap-8 rounded-2xl bg-landing-page-primary px-8 py-16 md:px-16 md:py-24 text-center">
                          <div className="flex flex-col gap-4 items-center">
                            <h2 className="text-[#111814] tracking-tight text-3xl font-extrabold leading-tight md:text-5xl md:tracking-[-0.04em] max-w-[800px]">
                              Ready to boost your team's productivity?
                            </h2>
                            <p className="text-[#111814]/80 text-lg md:text-xl font-medium max-w-[600px]">
                              Join 10,000+ teams today and transform how you
                              work together. Start your free trial in seconds.
                            </p>
                          </div>
                          <div className="flex flex-wrap justify-center gap-4">
                            <Link href={"/register"}>
                              <button className="btn flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-[#111814] text-white text-base font-bold leading-normal hover:bg-[#1a2e23] transition-all shadow-xl">
                                <span className="truncate">
                                  Get Started Now
                                </span>
                              </button>
                            </Link>
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/20 text-[#111814] text-base font-bold leading-normal border border-[#111814]/10 backdrop-blur-sm hover:bg-white/30 transition-all">
                              <span className="truncate">Book a Demo</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <!-- Footer --> */}
          <footer className="px-10 lg:px-40 py-16 bg-white dark:bg-landing-page-background-dark border-t border-[#dbe6e1] dark:border-[#1e3a2f]">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="size-6 text-landing-page-primary">
                    <svg
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-[#111815] dark:text-white text-lg font-bold">
                    WorkNest
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  <a
                    className="text-[#608a79] hover text-landing-page-primary transition-colors text-sm font-semibold"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  <a
                    className="text-[#608a79] hover text-landing-page-primary transition-colors text-sm font-semibold"
                    href="#"
                  >
                    Terms of Service
                  </a>
                  <a
                    className="text-[#608a79] hover text-landing-page-primary transition-colors text-sm font-semibold"
                    href="#"
                  >
                    Contact Us
                  </a>
                  <a
                    className="text-[#608a79] hover text-landing-page-primary transition-colors text-sm font-semibold"
                    href="#"
                  >
                    Careers
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    className="w-10 h-10 rounded-full bg-landing-page-background-light dark:bg-white/5 flex items-center justify-center text-[#608a79] hover text-landing-page-primary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      <Earth />
                    </span>
                  </a>
                  <a
                    className="w-10 h-10 rounded-full bg-landing-page-background-light dark:bg-white/5 flex items-center justify-center text-[#608a79] hover text-landing-page-primary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      <AtSign />
                    </span>
                  </a>
                </div>
              </div>
              <div className="border-t border-[#dbe6e1] dark:border-[#1e3a2f] pt-8 text-center">
                <p className="text-[#608a79] text-sm font-medium">
                  © 2025 WorkNest Inc. Empowering teams everywhere.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
