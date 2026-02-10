export interface LoginFormInput {
  email: string;
  password: string;
}

export interface RegisterFormInput {
  name: string;
  email: string;
  password: string;
}

export interface ProjectsType {
  project: {
    id: string;
    name: string;
    ownerId: string;
    description: string;
    createdAt: string;
  };
}

export interface TasksType {
  assignedToId: string | null;
  createdAt: string;
  description: string | null;
  id: string;
  projectId: string;
  status: string;
  title: string;
}

export interface Message {
  id: string;
  content: string;
  projectId: string;
  senderId: string;
  createdAt: Date;
  sender: {
    name: string;
  };
}

export interface UpdateTaskStatusPayload {
  taskId: string;
  status: string;
}

export interface GetFileHistorry {
  id: string;
  name: string;
  url: string;
  size: number;
  projectId: string;
  uploaderId: string;
  createdAt: string;
  uploader: {
    name: string;
  };
}
