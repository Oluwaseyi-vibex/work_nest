"use client";
import { useState } from "react";
import TaskSkeleton from "@/components/skeleton/TaskSkeleton";
import AddTaskModal from "@/components/task/AddTaskModal";
import TaskCard from "@/components/task/TaskCard";
import FilesView from "@/components/file/Files";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useProjectSocket } from "@/hooks/useProjectSocket";
import {
  createTask,
  fetchMyProjectsTask,
  updateTaskStatus,
} from "@/services/task.service";
import { TasksType, UpdateTaskStatusPayload } from "@/types";
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
  UserPlus,
} from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import ProjectMembers from "@/components/project/ProjectMembers";
import {
  addProjectMembers,
  fetchProjectMembers,
  removeProjectMembers,
} from "@/services/project.service";
import AddProjectMemberModal from "@/components/project/AddProjectModal";
import ChatPanel from "@/components/project/ChatPanel";

export default function ProjectsPage() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showProjectMemberModal, setShowProjectMemberModal] = useState(false);
  const [currentPath, setCurrentPath] = useState("tasks");
  const queryClient = useQueryClient();
  const params = useParams();
  const projectId = params.projectId as string;

  useProjectSocket(projectId);

  const {
    data: todos,
    isLoading: todosLoading,
    isError: todosError,
  } = useQuery({
    queryKey: ["project-todos", projectId],
    queryFn: () => fetchMyProjectsTask(projectId),
    enabled: !!projectId,
  });

  const {
    data: members,
    isLoading: membersLoading,
    isError: membersError,
  } = useQuery({
    queryKey: ["project-members", projectId],
    queryFn: () => fetchProjectMembers(projectId),
    enabled: !!projectId && currentPath === "members",
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

  const updateTaskMutation = useMutation({
    mutationFn: async (payload: UpdateTaskStatusPayload) => {
      updateTaskStatus(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-todos", projectId] });
    },
  });

  const {
    mutate: membersMutation,
    isPending: addMemberLoading,
    variables,
  } = useMutation({
    mutationFn: async (data: {
      projectId: string;
      userEmail: string;
      type: "add" | "remove";
    }) => {
      const payload = { projectId: data.projectId, userEmail: data.userEmail };
      return data.type === "add"
        ? addProjectMembers(payload)
        : removeProjectMembers(payload);
    },
    onSuccess: (_, data) => {
      if (data.type === "add") {
        setShowProjectMemberModal(false);
      }
      toast.success(`Successfully ${data.type}ed member`);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to add member");
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

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    console.log(destination.droppableId, source.droppableId);
    if (destination.droppableId === source.droppableId) return;

    updateTaskMutation.mutate({
      taskId: draggableId,
      status: destination.droppableId,
    });
  };

  const addNewTaskHandler = (data: { title: string; description: string }) => {
    mutation.mutate({ ...data, projectId });
  };
  const addMemberHandler = (data: { email: string }) => {
    membersMutation({ userEmail: data.email, projectId, type: "add" });
  };
  const removeMemberHandler = (email: string) => {
    membersMutation({ userEmail: email, projectId, type: "remove" });
  };

  return todosLoading ? (
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
                  {currentPath === "tasks" && (
                    <button
                      onClick={() => setShowTaskModal(true)}
                      className="btn flex items-center px-4 h-10 rounded-lg bg-primary2 text-white text-sm font-bold shadow-md shadow-primary2/20 hover:brightness-110"
                    >
                      <span className="material-symbols-outlined text-[20px] mr-2">
                        <Plus />
                      </span>
                      <span>New Task</span>
                    </button>
                  )}
                  {currentPath === "members" && (
                    <button
                      onClick={() => setShowProjectMemberModal(true)}
                      className="btn flex items-center px-4 h-10 rounded-lg bg-primary2 text-white text-sm font-bold shadow-md shadow-primary2/20 hover:brightness-110"
                    >
                      <span className="material-symbols-outlined text-[20px] mr-2">
                        <UserPlus />
                      </span>
                      <span>Add Member</span>
                    </button>
                  )}
                </div>
              </div>
              {/* <!-- Tabs --> */}
              <div className="flex gap-8">
                <button
                  onClick={() => setCurrentPath("tasks")}
                  className={` ${currentPath === "tasks" && "border-primary2 text-primary2 border-b-2"} flex cursor-pointer items-center justify-center pb-3 px-1 font-bold text-sm hover:text-primary2 text-[#678383] transition-colors`}
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <BadgeCheck />
                  </span>
                  Tasks
                </button>
                <button
                  onClick={() => setCurrentPath("messages")}
                  className={` ${currentPath === "messages" && "border-primary2 text-primary2 border-b-2"} flex cursor-pointer items-center justify-center pb-3 px-1 font-bold text-sm hover:text-primary2 text-[#678383] transition-colors`}
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <MessagesSquare />
                  </span>
                  Messages
                </button>
                <button
                  onClick={() => setCurrentPath("files")}
                  className={` ${currentPath === "files" && "border-primary2 text-primary2 border-b-2"} flex cursor-pointer items-center justify-center pb-3 px-1 font-bold text-sm hover:text-primary2 text-[#678383] transition-colors`}
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <Folder />
                  </span>
                  Files
                </button>
                <button
                  onClick={() => setCurrentPath("members")}
                  className={` ${currentPath === "members" && "border-primary2 text-primary2 border-b-2"} flex cursor-pointer items-center justify-center pb-3 px-1 font-bold text-sm hover:text-primary2 text-[#678383] transition-colors`}
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">
                    <Users />
                  </span>
                  Members
                </button>
              </div>
            </div>
            {/* <!-- Kanban Board Section --> */}
            {currentPath === "tasks" && (
              <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex-1 p-8 overflow-x-auto overflow-y-visible custom-scrollbar flex gap-6 bg-background-light dark:bg-background-dark">
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
                    <Droppable droppableId="todo">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="flex flex-col gap-4"
                        >
                          {todosData?.map((task: TasksType, index: number) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`${snapshot.isDragging ? "opacity-50" : "opacity-100"}`}
                                >
                                  <TaskCard title={task.title} key={task.id} />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
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
                    <Droppable droppableId="in_progress">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="flex flex-col gap-4 min-h-25"
                        >
                          {inProgressData?.map(
                            (task: TasksType, index: number) => (
                              <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`${snapshot.isDragging ? "opacity-50" : "opacity-100"}`}
                                  >
                                    <TaskCard
                                      title={task.title}
                                      key={task.id}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ),
                          )}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
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
                    <Droppable droppableId="done">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="flex flex-col gap-4 min-h-25"
                        >
                          {doneData?.map((task: TasksType, index: number) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`${snapshot.isDragging ? "opacity-50" : "opacity-100"}`}
                                >
                                  <TaskCard title={task.title} key={task.id} />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
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
              </DragDropContext>
            )}
            {currentPath === "members" && (
              <ProjectMembers
                data={members?.data?.projectMembers}
                isLoading={membersLoading}
                onRemove={removeMemberHandler}
                type={variables?.type}
              />
            )}
            {currentPath === "messages" && <ChatPanel projectId={projectId} />}
            {currentPath === "files" && <FilesView projectId={projectId} />}
          </div>
        </main>
      </div>
      <AddTaskModal
        show={showTaskModal}
        close={() => setShowTaskModal(false)}
        onSubmit={addNewTaskHandler}
      />
      <AddProjectMemberModal
        projectName={todos.data.name}
        show={showProjectMemberModal}
        close={() => setShowProjectMemberModal(false)}
        onSubmit={addMemberHandler}
        isLoading={addMemberLoading}
      />
    </section>
  );
}
