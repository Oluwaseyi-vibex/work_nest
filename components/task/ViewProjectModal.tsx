import {
  X,
  CircleUser,
  ChevronDown,
  LayoutGrid,
  Minimize2,
  RefreshCcw,
  Share2,
  Ellipsis,
  TimerReset,
  Calendar,
  Trash2,
} from "lucide-react";
import { useForm } from "react-hook-form";

const ViewProjectTask = ({
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
    true && (
      <div className="absolute inset-0 z-20 glass-overlay flex justify-end">
        {/* <!-- Slide-over Panel --> */}
        <div className="w-full max-w-2xl bg-white h-full soft-shadow flex flex-col border-l border-[#dde4e4]">
          {/* <!-- Panel Header --> */}
          <div className="px-8 py-6 border-b border-[#dde4e4] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="size-8 flex items-center justify-center rounded-lg hover:bg-background-light text-[#6A717B]">
                <span className="material-symbols-outlined">
                  <Minimize2 />
                </span>
              </button>
              <div className="flex items-center gap-2 text-sm font-medium text-[#6A717B]">
                <span className="material-symbols-outlined text-sm">
                  <LayoutGrid />
                </span>
                Project Alpha / Sprint 4
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-[#6A717B] hover:bg-background-light rounded-lg">
                <span className="material-symbols-outlined text-xl">
                  <Share2 />
                </span>
              </button>
              <button className="p-2 text-[#6A717B] hover:bg-background-light rounded-lg">
                <span className="material-symbols-outlined text-xl">
                  <Ellipsis />
                </span>
              </button>
              <button className="p-2 text-[#6A717B] hover:bg-background-light rounded-lg">
                <span className="material-symbols-outlined text-xl">
                  <X />
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Scrollable Content --> */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-10 py-8">
            {/* <!-- Title & Main Meta --> */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-primary2/10 text-primary2 px-3 py-1.5 rounded-lg border border-primary2/20">
                  <span className="material-symbols-outlined text-[16px]">
                    <RefreshCcw />
                  </span>
                  <span className="text-xs font-bold uppercase">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg border border-red-100">
                  <span className="material-symbols-outlined text-[16px]">
                    <TimerReset />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide">
                    High Priority
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-extrabold text-[#313742] leading-tight mb-6">
                Develop Homepage Prototype
              </h1>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12 border-y border-[#f1f4f4] py-6">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#6A717B] tracking-wider">
                    Assignee
                  </span>
                  <div className="flex items-center gap-3">
                    <div
                      className="size-9 rounded-full bg-teal-100 border-2 border-white soft-shadow flex items-center justify-center text-primary2 font-bold text-xs"
                      data-alt="Alex Rivera avatar"
                    >
                      AR
                    </div>
                    <span className="text-sm font-semibold">Alex Rivera</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#6A717B] tracking-wider">
                    Due Date
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-lg bg-background-light flex items-center justify-center text-[#6A717B]">
                      <span className="material-symbols-outlined text-[20px]">
                        <Calendar />
                      </span>
                    </div>
                    <span className="text-sm font-semibold">Oct 24, 2023</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Description --> */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-[#313742]">
                  Description
                </h3>
                <button className="text-xs font-bold text-primary2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>{" "}
                  Edit
                </button>
              </div>
              <div className="text-[#313742] text-sm leading-relaxed space-y-4">
                <p>
                  Design the initial wireframes and interactive prototype for
                  the main landing page. Focus on conversion-oriented layouts
                  and the new brand aesthetic.
                </p>
                <p>Key requirements:</p>
                <ul className="list-disc pl-5 space-y-1 text-[#6A717B]">
                  <li>Sticky header with mobile-responsive menu</li>
                  <li>Hero section with dynamic product illustration</li>
                  <li>Integrated Figma links for review</li>
                </ul>
              </div>
            </section>
            {/* <!-- Subtasks --> */}
            {/* <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-[#313742]">
                  Subtasks{" "}
                  <span className="text-[#6A717B] font-normal ml-1">2/3</span>
                </h3>
                <div className="flex-1 mx-4 h-1.5 bg-background-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary2"
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background-light/50 border border-transparent hover:border-[#dde4e4] transition-all group">
                  <input
                    // checked=""
                    className="rounded border-[#dde4e4] text-primary2 focus:ring-primary2 size-4"
                    type="checkbox"
                  />
                  <span className="text-sm text-[#6A717B] line-through flex-1">
                    Wireframe initial layout
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 text-[#6A717B]">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background-light/50 border border-transparent hover:border-[#dde4e4] transition-all group">
                  <input
                    // checked=""
                    className="rounded border-[#dde4e4] text-primary2 focus:ring-primary2 size-4"
                    type="checkbox"
                  />
                  <span className="text-sm text-[#6A717B] line-through flex-1">
                    Define core color palette
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 text-[#6A717B]">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[#dde4e4] bg-white transition-all group">
                  <input
                    className="rounded border-[#dde4e4] text-primary2 focus:ring-primary2 size-4"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-[#313742] flex-1">
                    Finalize typography system
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 text-[#6A717B]">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-2 pl-3 mt-4">
                  <span className="material-symbols-outlined text-primary2 text-[20px]">
                    add
                  </span>
                  <input
                    className="border-none bg-transparent p-0 text-sm focus:ring-0 placeholder:text-[#6A717B] w-full"
                    placeholder="Add a subtask..."
                    type="text"
                  />
                </div>
              </div>
            </section> */}
            {/* <!-- Attachments --> */}
            {/* <section className="mb-10">
              <h3 className="text-sm font-bold text-[#313742] mb-4">
                Attachments
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[#dde4e4] hover:bg-background-light transition-colors cursor-pointer">
                  <div className="size-10 bg-red-100 text-red-600 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined">
                      picture_as_pdf
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">
                      brand_guidelines.pdf
                    </p>
                    <p className="text-[10px] text-[#6A717B]">2.4 MB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[#dde4e4] hover:bg-background-light transition-colors cursor-pointer">
                  <div className="size-10 bg-primary2/10 text-primary2 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined">image</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">
                      homepage_v1.fig
                    </p>
                    <p className="text-[10px] text-[#6A717B]">Figma Link</p>
                  </div>
                </div>
                <div className="col-span-2 border-2 border-dashed border-[#dde4e4] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-primary2 transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-primary2/50 group-hover:text-primary2">
                    upload_file
                  </span>
                  <p className="text-xs font-bold text-[#6A717B] group-hover:text-primary2">
                    Click or drag to upload files
                  </p>
                </div>
              </div>
            </section> */}
            {/* <!-- Activity Feed --> */}
            {/* <section>
              <h3 className="text-sm font-bold text-[#313742] mb-6">
                Activity
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-px before:bg-[#dde4e4]">
                <!-- Comment -->
                <div className="relative flex gap-4">
                  <div
                    className="z-10 size-9 rounded-full bg-amber-100 border-2 border-white soft-shadow flex items-center justify-center text-amber-700 font-bold text-xs"
                    data-alt="Sarah Chen avatar"
                  >
                    SC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold">Sarah Chen</span>
                      <span className="text-[10px] text-[#6A717B]">
                        2 hours ago
                      </span>
                    </div>
                    <div className="bg-background-light p-3 rounded-lg rounded-tl-none border border-[#dde4e4]">
                      <p className="text-sm text-[#313742]">
                        I've reviewed the wireframes. Can we try a more compact
                        hero section for mobile users?
                      </p>
                    </div>
                  </div>
                </div>
                <!-- System Event --> 
                <div className="relative flex gap-4">
                  <div className="z-10 size-9 rounded-full bg-white border border-[#dde4e4] flex items-center justify-center text-[#6A717B]">
                    <span className="material-symbols-outlined text-sm">
                      history
                    </span>
                  </div>
                  <div className="flex-1 flex items-center gap-2 py-1">
                    <span className="text-sm font-semibold">Alex Rivera</span>
                    <span className="text-sm text-[#6A717B]">
                      changed status to
                    </span>
                    <span className="text-xs font-bold text-primary2 bg-primary2/10 px-2 py-0.5 rounded uppercase">
                      In Progress
                    </span>
                    <span className="text-[10px] text-[#6A717B]">
                      • 5 hours ago
                    </span>
                  </div>
                </div>
                <!-- Post a Comment -->
                <div className="relative flex gap-4">
                  <div
                    className="z-10 size-9 rounded-full bg-primary2 text-white flex items-center justify-center font-bold text-xs"
                    data-alt="Current user avatar"
                  >
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="border border-[#dde4e4] rounded-lg p-1 bg-white focus-within:ring-2 focus-within:ring-primary2/20 transition-all">
                      <textarea
                        className="w-full border-none focus:ring-0 text-sm p-3 min-h-[80px] resize-none placeholder:text-[#6A717B]"
                        placeholder="Write a comment..."
                      ></textarea>
                      <div className="flex items-center justify-between p-2 border-t border-[#f1f4f4]">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 text-[#6A717B] hover:bg-background-light rounded">
                            <span className="material-symbols-outlined text-lg">
                              attach_file
                            </span>
                          </button>
                          <button className="p-1.5 text-[#6A717B] hover:bg-background-light rounded">
                            <span className="material-symbols-outlined text-lg">
                              alternate_email
                            </span>
                          </button>
                          <button className="p-1.5 text-[#6A717B] hover:bg-background-light rounded">
                            <span className="material-symbols-outlined text-lg">
                              mood
                            </span>
                          </button>
                        </div>
                        <button className="bg-primary2 text-white px-4 py-1.5 rounded font-bold text-xs">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>  */}
          </div>
          {/* <!-- Sticky Footer Actions --> */}
          <div className="p-6 border-t border-[#dde4e4] bg-white flex items-center justify-between">
            <button className="text-sm font-bold text-red-500 flex items-center gap-1.5 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-lg">
                {" "}
                <Trash2 />
              </span>{" "}
              Delete Task
            </button>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 text-sm font-bold text-[#6A717B] hover:bg-background-light rounded-lg transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 text-sm font-bold bg-primary2 text-white rounded-lg soft-shadow">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ViewProjectTask;
