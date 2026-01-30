import ProjectCard from "@/components/ProjectCard";
import { ArrowDown, LayoutGrid, List, Plus, Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      {/* <!-- Page Heading --> */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">
            Project Directory
          </h2>
          <p className="text-[#678383]">
            Overview of all current engagements, status, and team performance.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary2 text-white rounded-lg font-bold shadow-lg shadow-primary2/20 hover:bg-primary2/90 transition-all active:scale-95">
          <span className="material-symbols-outlined">
            <Plus />
          </span>
          New Project
        </button>
      </div>
      {/* <!-- Filters & Search --> */}
      <div className="bg-white dark:bg-background-dark p-3 rounded-xl shadow-soft border border-[#f1f4f4] dark:border-[#2d3238] mb-8 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#678383]">
            <Search />
          </span>
          <input
            className="w-full pl-10 pr-4 py-2.5 bg-[#f5f7f9] dark:bg-[#2d3238] border-none rounded-lg focus:ring-2 focus:ring-primary2/50"
            placeholder="Search projects by name or client..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f7f9] dark:bg-[#2d3238] rounded-lg text-sm font-medium border border-transparent hover:border-primary2/20">
            <span>Status: All</span>
            <span className="material-symbols-outlined text-sm">
              <ArrowDown />
            </span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f7f9] dark:bg-[#2d3238] rounded-lg text-sm font-medium border border-transparent hover:border-primary2/20">
            <span>Team: Everyone</span>
            <span className="material-symbols-outlined text-sm">
              <ArrowDown />
            </span>
          </button>
          <div className="h-8 w-px bg-[#f1f4f4] dark:bg-[#2d3238] mx-2"></div>
          <div className="flex bg-[#f5f7f9] dark:bg-[#2d3238] p-1 rounded-lg">
            <button className="p-1.5 bg-white dark:bg-background-dark shadow-sm rounded text-primary2">
              <span className="material-symbols-outlined">
                <LayoutGrid />
              </span>
            </button>
            <button className="p-1.5 text-[#678383]">
              <span className="material-symbols-outlined">
                <List />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Project Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Project Card 2 --> */}
        <ProjectCard />

        {/* <!-- New Project Placeholder Card --> */}
        <button className="group border-2 border-dashed border-[#f1f4f4] dark:border-[#2d3238] rounded-xl flex flex-col items-center justify-center p-6 hover:border-primary2/50 hover:bg-white dark:hover:bg-background-dark transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#f1f4f4] dark:bg-[#2d3238] flex items-center justify-center text-[#678383] group-hover:bg-primary2/10 group-hover:text-primary2 mb-4 transition-colors">
            <span className="material-symbols-outlined text-3xl">
              <Plus />
            </span>
          </div>
          <h3 className="text-base font-bold text-[#678383] group-hover:text-primary2 transition-colors">
            Create Project
          </h3>
          <p className="text-xs text-[#678383] mt-1">Start a new engagement</p>
        </button>
      </div>
      {/* <!-- Pagination/Load More --> */}
      <div className="mt-12 flex items-center justify-center">
        <button className="px-8 py-3 bg-white dark:bg-background-dark border border-[#f1f4f4] dark:border-[#2d3238] rounded-lg text-sm font-bold hover:bg-[#f1f4f4] dark:hover:bg-[#2d3238] transition-colors shadow-soft">
          Load More Projects
        </button>
      </div>
    </>
  );
}
