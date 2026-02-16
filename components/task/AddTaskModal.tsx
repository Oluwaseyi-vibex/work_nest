import { X, CircleUser, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";

const AddTaskModal = ({
  show,
  close,
  onSubmit,
}: {
  show: boolean;
  close: () => void;
  onSubmit: (data: { title: string; description: string }) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    show && (
      <div className="fixed inset-y-0 right-0 z-50 flex max-w-full">
        <div className="w-screen max-w-xl flex flex-col bg-white shadow-2xl h-full border-l border-slate-200">
          {/* <!-- Drawer Header --> */}
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div>
              <h2 className="text-xl font-bold text-[#121717]">Add New Task</h2>
              <p className="text-sm text-slate-500">
                Define the details for your new project objective.
              </p>
            </div>
            <button
              onClick={close}
              className="btn flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
            >
              <span className="material-symbols-outlined">
                <X />
              </span>
            </button>
          </div>
          {/* <!-- Drawer Content (Scrollable) --> */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <form className="space-y-8">
              {/* <!-- Task Title --> */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#121717]">
                  Task Title
                </label>
                <input
                  className="w-full rounded-lg border border-slate-200 bg-white h-12 px-4 text-base focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none transition-all placeholder:text-slate-400"
                  placeholder="e.g., Design Homepage Hero Section"
                  type="text"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-xs text-red-500">
                    {errors.title.message as string}
                  </p>
                )}
              </div>
              {/* <!-- Description with Toolbar --> */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#121717]">
                  Description
                </label>
                <div className="rounded-lg border border-slate-200 overflow-hidden focus-within:border-primary2 focus-within:ring-1 focus-within:ring-primary2 transition-all">
                  {/* <div className="flex items-center gap-1 p-2 border-b border-slate-100 bg-slate-50">
                    <button
                      className="p-1.5 rounded hover:bg-white hover:shadow-sm text-slate-600 flex items-center justify-center"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xl">
                        format_bold
                      </span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-white hover:shadow-sm text-slate-600 flex items-center justify-center"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xl">
                        format_italic
                      </span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-white hover:shadow-sm text-slate-600 flex items-center justify-center"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xl">
                        format_list_bulleted
                      </span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-white hover:shadow-sm text-slate-600 flex items-center justify-center"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xl">
                        format_list_numbered
                      </span>
                    </button>
                    <div className="w-px h-4 bg-slate-200 mx-1"></div>
                    <button
                      className="p-1.5 rounded hover:bg-white hover:shadow-sm text-slate-600 flex items-center justify-center"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xl">
                        link
                      </span>
                    </button>
                    <div className="flex-1"></div>
                    <button
                      className="flex items-center gap-1 px-3 py-1.5 rounded bg-primary2 text-white text-xs font-bold transition-opacity hover:opacity-90"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">
                        attach_file
                      </span>
                      <span>Attach</span>
                    </button>
                  </div> */}
                  <textarea
                    className="w-full border-none focus:ring-0 p-4 min-h-[160px] text-base placeholder:text-slate-400 resize-none"
                    placeholder="Add some details about this task..."
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className="text-xs text-red-500">
                    {errors.description.message as string}
                  </p>
                )}
              </div>
              {/* <!-- Meta Grid (Assignee & Due Date) --> */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#121717]">
                    Assignee
                  </label>
                  <div className="relative">
                    <div className="flex items-center gap-3 w-full rounded-lg border border-slate-200 bg-white h-12 px-3 cursor-pointer hover:border-slate-300 transition-colors">
                      <div className="size-7 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-slate-400 text-lg">
                          <CircleUser />
                        </span>
                      </div>
                      <span className="text-slate-500 text-sm">
                        Select assignee
                      </span>
                      <span className="material-symbols-outlined ml-auto text-slate-400">
                        <ChevronDown />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#121717]">
                    Due Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white h-12 px-4 text-sm focus:border-primary2 focus:ring-1 focus:ring-primary2 outline-none text-slate-600"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Priority Level --> */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-[#121717]">
                  Priority Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-slate-100 bg-slate-50 text-slate-600 font-bold text-sm hover:border-blue-100 hover:bg-blue-50 transition-all"
                    type="button"
                  >
                    <div className="size-2 rounded-full bg-blue-400"></div>
                    Low
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-orange-100 bg-orange-50 text-orange-700 font-bold text-sm shadow-[0_0_0_1px_rgba(251,146,60,0.1)]"
                    type="button"
                  >
                    <div className="size-2 rounded-full bg-orange-400"></div>
                    Medium
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-slate-100 bg-slate-50 text-slate-600 font-bold text-sm hover:border-red-100 hover:bg-red-50 transition-all"
                    type="button"
                  >
                    <div className="size-2 rounded-full bg-red-400"></div>
                    High
                  </button>
                </div>
              </div>
              {/* <!-- Labels / Tags --> */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-[#121717]">
                    Labels
                  </label>
                  <button
                    className="text-xs font-bold text-primary2 hover:underline"
                    type="button"
                  >
                    + Manage
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 min-h-[48px] p-2 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary2/10 text-primary2 text-xs font-bold">
                    Design
                    <span className="material-symbols-outlined text-xs cursor-pointer">
                      close
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">
                    Feedback
                    <span className="material-symbols-outlined text-xs cursor-pointer">
                      close
                    </span>
                  </span>
                  <button className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-400 text-xs hover:border-slate-400 transition-colors">
                    <span className="material-symbols-outlined text-sm mr-1">
                      add
                    </span>{" "}
                    Add tag
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Drawer Footer (Sticky) --> */}
          <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 bg-white">
            <button
              onClick={close}
              className="btn flex min-w-[100px] h-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 font-bold text-sm transition-all hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit(onSubmit)}
              className="btn flex min-w-[140px] h-11 items-center justify-center rounded-lg bg-primary2 text-white font-bold text-sm transition-all hover:opacity-90 shadow-lg shadow-primary/20"
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddTaskModal;
