import { Calendar } from "lucide-react";

const TaskCard = ({ title }: { title: string }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-3">
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase tracking-tight">
          Medium
        </span>
        <button className="material-symbols-outlined text-[#678383] opacity-0 group-hover:opacity-100 transition-opacity">
          more_horiz
        </button>
      </div>
      <h4 className="text-[15px] font-bold mb-4 leading-snug">{title}</h4>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-[#678383] text-xs font-medium">
          <span className="material-symbols-outlined text-[16px] mr-1">
            <Calendar />
          </span>
          Oct 24
        </div>
        <div
          className="size-7 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-zinc-900"
          data-alt="Avatar of Sarah designer"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAHWLd4etMBH8ftvhro8reQ5UFZq6Vt5Jk8ukWFg6id1ehkaMOTuxdH8atETvyuscg-Vt1NdLGiXOyP_ciY1usIcXDgESpGJUGTZcPwUeycey5cfgZ2i5KaEtNxa2BQ8healawvVM_a8hzEtCJyK-aisCt2i2Q3IDR-SAMAoBkKTWqf64A0HO3xD7YNAH40yyitMyfKBjvUgt2h6hJ1dIkjoJrTdBoapCmCSpnmAbl4QCywlciR1MJfkPo7okH50YCqgzQz_RcvVkOS)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TaskCard;
