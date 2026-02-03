const TaskSkeleton = () => {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark font-display text-[#121717] dark:text-white transition-colors duration-200">
        <div className="flex h-screen overflow-hidden">
          {/* <!-- Main Content Area --> */}
          <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
              {/* <!-- PageHeading & Tabs --> */}
              <div className="bg-white dark:bg-zinc-950 pt-8 px-8 border-b border-[#dde4e4] dark:border-zinc-800">
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-3xl font-black tracking-tight dark:text-white skeleton w-80 h-5"></h2>
                    </div>
                    <p className="text-[#678383] text-sm skeleton w-96 h-4 mt-2"></p>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex skeleton items-center px-4 h-10 w-28 rounded-lg border border-[#dde4e4] dark:border-zinc-700 text-[#121717] dark:text-white"></button>
                    <button className="flex skeleton w-28 items-center px-4 h-10 rounded-lg  text-white text-sm"></button>
                  </div>
                </div>
                {/* <!-- Tabs --> */}
                <div className="flex gap-8">
                  <a
                    className="flex items-center justify-center border-b-2 border-primary2 text-primary2 pb-3 px-1 font-bold text-sm"
                    href="#"
                  >
                    <div className="material-symbols-outlined text-[20px] mr-2 skeleton h-5 w-5 rounded-full"></div>
                    <p className="skeleton h-5 w-11"> </p>
                  </a>
                  <a
                    className="flex items-center justify-center text-primary2 pb-3 px-1 font-bold text-sm"
                    href="#"
                  >
                    <div className="material-symbols-outlined text-[20px] mr-2 skeleton h-5 w-5 rounded-full"></div>
                    <p className="skeleton h-5 w-11"> </p>
                  </a>
                  <a
                    className="flex items-center justify-center text-primary2 pb-3 px-1 font-bold text-sm"
                    href="#"
                  >
                    <div className="material-symbols-outlined text-[20px] mr-2 skeleton h-5 w-5 rounded-full"></div>
                    <p className="skeleton h-5 w-11"> </p>
                  </a>
                </div>
              </div>
              {/* <!-- Kanban Board Section --> */}
              <div className="flex-1 p-8 overflow-x-auto custom-scrollbar flex gap-6 bg-background-light dark:bg-background-dark">
                {/* <!-- Todo Column --> */}
                <div className="kanban-column flex flex-col gap-4">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <h3 className="skeleton h-7 w-12"></h3>
                      <span className="bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white text-[10px] font-bold px-1.5 py-0.5 rounded skeleton h-5 w-5"></span>
                    </div>
                    <button className="skeleton h-5 w-5"></button>
                  </div>
                  {/* <!-- Task Card 1 --> */}
                  {[1, 2, 3].map((data) => (
                    <div
                      key={data}
                      className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="skeleton px-2 py-0.5 rounded h-7 w-[76px]  dark:bg-orange-900/30  uppercase tracking-tight"></span>
                      </div>
                      <h4 className="skeleton w-42 h-6.25 mb-4 leading-snug"></h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#678383] text-xs font-medium">
                          <div className="material-symbols-outlined text-[20px] mr-2 skeleton h-5 w-5 rounded-full"></div>
                          <p className="skeleton h-5 w-11"> </p>
                        </div>
                        <div className="ring-white dark:ring-zinc-900 skeleton h-5 w-5 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <!-- In Progress Column --> */}
                <div className="kanban-column flex flex-col gap-4">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <h3 className="skeleton h-7 w-12"></h3>
                      <span className="bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white text-[10px] font-bold px-1.5 py-0.5 rounded skeleton h-5 w-5"></span>
                    </div>
                    <button className="skeleton h-5 w-5"></button>
                  </div>
                  {/* <!-- Task Card 3 --> */}
                  {[1, 2].map((data) => (
                    <div
                      key={data}
                      className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="skeleton px-2 py-0.5 rounded h-7 w-[76px]  dark:bg-orange-900/30  uppercase tracking-tight"></span>
                      </div>
                      <h4 className="skeleton w-42 h-6.25 mb-4 leading-snug"></h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#678383] text-xs font-medium">
                          <div className="material-symbols-outlined text-[20px] mr-2 skeleton h-5 w-5 rounded-full"></div>
                          <p className="skeleton h-5 w-11"> </p>
                        </div>
                        <div className="ring-white dark:ring-zinc-900 skeleton h-5 w-5 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <!-- Done Column --> */}
                <div className="kanban-column flex flex-col gap-4">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <h3 className="skeleton h-7 w-12"></h3>
                      <span className="bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white text-[10px] font-bold px-1.5 py-0.5 rounded skeleton h-5 w-5"></span>
                    </div>
                    <button className="skeleton h-5 w-5"></button>
                  </div>
                  {[1].map((data) => (
                    <div
                      key={data}
                      className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="skeleton px-2 py-0.5 rounded h-7 w-[76px]  dark:bg-orange-900/30  uppercase tracking-tight"></span>
                      </div>
                      <h4 className="skeleton w-42 h-6.25 mb-4 leading-snug"></h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#678383] text-xs font-medium">
                          <div className="material-symbols-outlined text-[20px] mr-2 skeleton h-5 w-5 rounded-full"></div>
                          <p className="skeleton h-5 w-11"> </p>
                        </div>
                        <div className="ring-white dark:ring-zinc-900 skeleton h-5 w-5 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default TaskSkeleton;
