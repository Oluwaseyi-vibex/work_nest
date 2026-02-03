"use client";
import { useState } from "react";
import TaskSkeleton from "@/components/skeleton/TaskSkeleton";
import AddTaskModal from "@/components/task/AddTaskModal";
import TaskCard from "@/components/task/TaskCard";
import { useProjectSocket } from "@/hooks/useProjectSocket";
import { createTask, fetchMyProjectsTask } from "@/services/task.service";
import { TasksType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BadgeCheck,
  MessagesSquare,
  Folder,
  Plus,
  CopyPlus,
  ListFilter,
  X,
  CircleUser,
  ChevronDown,
  Users,
} from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function ProjectsPage() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const queryClient = useQueryClient();
  const params = useParams();
  const projectId = params.projectId as string;

  useProjectSocket(projectId as string);

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["project-todos", projectId],
    queryFn: () => fetchMyProjectsTask(projectId),
    enabled: !!projectId,
  });

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      setShowTaskModal(false);
      toast.success("Task created!");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to create task");
    },
  });

  const todosData = todos?.data?.tasks?.filter(
    (task: TasksType) => task.status === "todo",
  );
  const inProgressData = todos?.data?.tasks?.filter(
    (task: TasksType) => task.status === "in_progress",
  );
  const doneData = todos?.data?.tasks?.filter(
    (task: TasksType) => task.status === "done",
  );
  // console.log(todosData);

  const addNewTaskHandler = (data: { title: string; description: string }) => {
    mutation.mutate({ ...data, projectId });
  };

  return isLoading ? (
    <TaskSkeleton />
  ) : (
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
                    <h2 className="text-3xl font-black tracking-tight dark:text-white">
                      {todos.data.name}
                    </h2>
                  </div>
                  <p className="text-[#678383] text-sm">
                    {todos.data.description
                      ? todos.data.description
                      : "Add a description to this project. don't get people confused will ya?"}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center px-4 h-10 rounded-lg border border-[#dde4e4] dark:border-zinc-700 text-[#121717] dark:text-white text-sm font-bold hover:bg-background-light dark:hover:bg-zinc-900">
                    <span className="material-symbols-outlined text-[20px] mr-2">
                      <ListFilter />
                    </span>
                    <span>Filter</span>
                  </button>
                  <button
                    onClick={() => setShowTaskModal(true)}
                    className="btn flex items-center px-4 h-10 rounded-lg bg-primary2 text-white text-sm font-bold shadow-md shadow-primary2/20 hover:brightness-110"
                  >
                    <span className="material-symbols-outlined text-[20px] mr-2">
                      <Plus />
                    </span>
                    <span>New Task</span>
                  </button>
                </div>
              </div>
              {/* <!-- Tabs --> */}
              <div className="flex gap-8">
                <a
                  className="flex items-center justify-center border-b-2 border-primary2 text-primary2 pb-3 px-1 font-bold text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <BadgeCheck />
                  </span>
                  Tasks
                </a>
                <a
                  className="flex items-center justify-center border-b-2 border-transparent text-[#678383] pb-3 px-1 font-bold text-sm hover:text-primary2 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <MessagesSquare />
                  </span>
                  Messages
                </a>
                <a
                  className="flex items-center justify-center border-b-2 border-transparent text-[#678383] pb-3 px-1 font-bold text-sm hover:text-primary2 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <Folder />
                  </span>
                  Files
                </a>
                <a
                  className="flex items-center justify-center border-b-2 border-transparent text-[#678383] pb-3 px-1 font-bold text-sm hover:text-primary2 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <Users />
                  </span>
                  Members
                </a>
              </div>
            </div>
            {/* <!-- Kanban Board Section --> */}
            <div className="flex-1 p-8 overflow-x-auto custom-scrollbar flex gap-6 bg-background-light dark:bg-background-dark">
              {/* <!-- Todo Column --> */}
              <div className="kanban-column flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-sm uppercase tracking-widest text-[#678383]">
                      To Do
                    </h3>
                    <span className="bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {todosData.length}
                    </span>
                  </div>
                  <button className="material-symbols-outlined text-[#678383] hover:text-primary2">
                    <CopyPlus />
                  </button>
                </div>
                {/* <!-- Task Card 1 --> */}
                {todosData?.map((task: TasksType) => (
                  <TaskCard title={task.title} key={task.id} />
                ))}
                {/* <!-- Task Card 2 --> */}
                {/* <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 uppercase tracking-tight">
                      High
                    </span>
                    <button className="material-symbols-outlined text-[#678383] opacity-0 group-hover:opacity-100 transition-opacity">
                      more_horiz
                    </button>
                  </div>
                  <h4 className="text-[15px] font-bold mb-4 leading-snug">
                    Client Feedback Review
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-red-500 text-xs font-bold">
                      <span className="material-symbols-outlined text-[16px] mr-1">
                        alarm
                      </span>
                      Due Today
                    </div>
                    <div
                      className="size-7 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-zinc-900"
                      data-alt="Avatar of Mike developer"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsSyy4ejpzPLEKBuNrw3GUdVs3taREb34DS1U1JKt_xNKpShEimIOi7rOPJgZ9O0v-XMt_IRkE2--LUoq2nlIGauU6Lpbt_VA-yJ_ydDLcqwnz1HVtXlAPoos5sORqIz-ORNiIZ-jcnY8Ds_CfsGK3gQgGqArJiwGOAWfiWT8w5KsTs4eC6v1uZ5iySWc_xfV0MLst2Ghgn-lOnB7ArrH-pgLZm-gGa4EXNc04qfZNtDcFZwImcFGqv2N4QsACH92mipg04DvS-Knn');",
                      }}
                    ></div>
                  </div>
                </div> */}
                {/* <!-- Quick Add Task --> */}
                {/* <button className="flex items-center justify-center p-4 border-2 border-dashed border-[#dde4e4] dark:border-zinc-800 rounded-xl text-[#678383] hover:border-primary2/40 hover:text-primary2 transition-all group">
                  <span className="material-symbols-outlined mr-2">add</span>
                  <span className="text-sm font-bold">Add another card</span>
                </button> */}
              </div>
              {/* <!-- In Progress Column --> */}
              <div className="kanban-column flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-sm uppercase tracking-widest text-[#678383]">
                      In Progress
                    </h3>
                    <span className="bg-primary2/10 text-primary2 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {inProgressData?.length}
                    </span>
                  </div>
                  <button className="material-symbols-outlined text-[#678383] hover:text-primary2">
                    <CopyPlus />
                  </button>
                </div>
                {/* <!-- Task Card 3 --> */}
                {inProgressData?.map((task: TasksType) => (
                  <TaskCard title={task.title} key={task.id} />
                ))}
                {/* <!-- Task Card 4 --> */}
                {/* <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase tracking-tight">
                      Medium
                    </span>
                    <button className="material-symbols-outlined text-[#678383] opacity-0 group-hover:opacity-100 transition-opacity">
                      more_horiz
                    </button>
                  </div>
                  <h4 className="text-[15px] font-bold mb-4 leading-snug">
                    Database Schema Design
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#678383] text-xs font-medium">
                      <span className="material-symbols-outlined text-[16px] mr-1">
                        link
                      </span>
                      2 Attachments
                    </div>
                    <div
                      className="size-7 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-zinc-900"
                      data-alt="Avatar of developer"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoOnnFPLllBk6irPlSI4Z3p1T5ng3zbh7db03YQ1rPX5kmWNia_CAzKvhDBuK_guZ2aGjxXvGy3vrWIXWq2ftgEuqYEm-GIU-pWRtv8v0wSvG3oIl8DzXrU5CInly-dVInkhrKFDKoRWYDoO4DIxMfiewKW8BMUVnV-ZqVEvGL2kzXCHYXSnFyUJZIi6XYmtcs0bGlfgP1Ckgn9hSB8X1_C1db9Xqlpb0bPb4b4jJnoL30iO7zNL5EOdFKhx01bhSV_PS5E7WhrXSi');",
                      }}
                    ></div>
                  </div>
                </div> */}
              </div>
              {/* <!-- Done Column --> */}
              <div className="kanban-column flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-sm uppercase tracking-widest text-[#678383]">
                      Done
                    </h3>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {doneData.length}
                    </span>
                  </div>
                  <button className="material-symbols-outlined text-[#678383] hover:text-primary2">
                    <CopyPlus />
                  </button>
                </div>
                {/* <!-- Task Card 5 --> */}
                {doneData.map((task: TasksType) => (
                  <TaskCard title={task.title} key={task.id} />
                ))}
              </div>
              {/* <!-- Add New Column --> */}
              {/* <div className="kanban-column flex flex-col gap-4">
                <div className="flex items-center px-1 mb-2">
                  <h3 className="font-black text-sm uppercase tracking-widest text-[#678383] opacity-50">
                    Add Column
                  </h3>
                </div>
                <div className="flex-1 border-2 border-dashed border-[#dde4e4] dark:border-zinc-800 rounded-2xl flex items-center justify-center hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer group">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-4xl text-[#678383] group-hover:text-primary2 transition-colors">
                      post_add
                    </span>
                    <p className="text-xs font-bold mt-2 text-[#678383]">
                      Create Custom Status
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
      <AddTaskModal
        show={showTaskModal}
        close={() => setShowTaskModal(false)}
        onSubmit={addNewTaskHandler}
      />
    </section>
  );
}
