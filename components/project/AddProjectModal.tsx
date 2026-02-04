import { X, Mail, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

const AddProjectMemberModal = ({
  projectName,
  show,
  close,
  onSubmit,
  isLoading,
}: {
  projectName: string;
  show: boolean;
  close: () => void;
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    show && (
      <section className="bg-background-light dark:bg-background-dark font-display text-[#121717] dark:text-white transition-colors duration-200">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/40 backdrop-blur-md px-4">
          <div className="bg-white dark:bg-zinc-950 w-full max-w-lg rounded-2xl shadow-2xl border border-[#dde4e4] dark:border-zinc-800 overflow-hidden">
            <div className="px-6 py-5 border-b border-[#dde4e4] dark:border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black tracking-tight">
                  Add Project Member
                </h3>
                <p className="text-xs text-[#678383] font-medium">
                  Inviting people to{" "}
                  <span className="text-primary2 font-bold">{projectName}</span>
                </p>
              </div>
              <button
                onClick={close}
                disabled={isLoading}
                className="text-[#678383]  hover:text-[#121717] dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">
                  <X />
                </span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label
                    className="block text-xs font-black uppercase tracking-widest text-[#678383] mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#678383] text-[20px]">
                      <Mail />
                    </span>
                    <input
                      className="w-full h-11 pl-10 pr-4 bg-background-light dark:bg-zinc-900 border-none rounded-xl text-sm placeholder:text-[#678383] focus:ring-2 focus:ring-primary2/20"
                      id="email"
                      placeholder="jane@example.com"
                      type="email"
                      {...register("email", { required: "Email required" })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                {/* <div className="w-full sm:w-32">
                <label
                  className="block text-xs font-black uppercase tracking-widest text-[#678383] mb-2"
                  htmlFor="role"
                >
                  Role
                </label>
                <select
                  className="w-full h-11 px-4 bg-background-light dark:bg-zinc-900 border-none rounded-xl text-sm font-bold text-[#121717] dark:text-white focus:ring-2 focus:ring-primary2/20 appearance-none"
                  id="role"
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="owner">Owner</option>
                </select>
              </div> */}
              </div>
              {/* <div>
              <label
                className="block text-xs font-black uppercase tracking-widest text-[#678383] mb-2"
                htmlFor="message"
              >
                Personal Message (Optional)
              </label>
              <textarea
                className="w-full p-4 bg-background-light dark:bg-zinc-900 border-none rounded-xl text-sm placeholder:text-[#678383] focus:ring-2 focus:ring-primary2/20 h-24 resize-none"
                id="message"
                placeholder="Hey, I'm adding you to the new redesign project!"
              ></textarea>
            </div> */}
              {/* <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#678383] mb-3">
                Suggested People
              </label>
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                <button className="flex-shrink-0 flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-full border-2 border-transparent group-hover:border-primary2 transition-all p-0.5">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAUMLJket6aOlh1QaXLkEPiDfhLSZYL6RxUcmwSrGsWnaopWA7zLYnbgqjNXiCj_Iwozzg-tl6VcFtXtTWFErhhaHap_Ry-SUh4W6p8vcjHmox_lawE9UXECycDhqDuFLIwBipdN72ZLmjU68aH_5uN4KuKilbIw4WTGpQ-frwTDH-wyIB9b-aZbUfDjLjaRcCf2OhhDWjFUShkg_p0WVtX5n8O-_0AuWd5AhD6Sru6du5AaitM-99RRwn90VrIVsXfQrcrQdG0giTp)",
                      }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-bold text-[#678383] group-hover:text-primary2">
                    Marcus
                  </span>
                </button>
                <button className="flex-shrink-0 flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-full border-2 border-transparent group-hover:border-primary2 transition-all p-0.5">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBbEO5mNaoTiY8OAuepYrNrx13JWDFLcRZXkcNfL1clmjW9f95SK5pO7Qv_F-QA9jgARvNc4c0DQQBRppyiImwUGqWAaFgTRC1QiMibTlKua5_UdPJ8SCsN-rZ8JFDNwcB6Lwz_3VKD4oakzcL5TzqavD6xtLvEovXjXlSRRRaao03mBaa5DMHWgEbe5_PVFmFF5SKXqhBrcQ1xy8a6-kMD7iL3zH3HINGlyICGd0cWdqHu23EjN7reFj6Ny4QfKANXs5W8SXzHlI96)",
                      }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-bold text-[#678383] group-hover:text-primary2">
                    Elena
                  </span>
                </button>
                <button className="flex-shrink-0 flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-full border-2 border-transparent group-hover:border-primary2 transition-all p-0.5">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCzbytXnTAYtBCQGgTyu7HsHkAFJJpi_ugl6O8_H7LPuaTZDH3nbEwzILJf7a8UdLNUux5AXJx9QTo1xrkYdSyQcRpMMscnj3lsQLv9tKNr0Nb8XfXpf_UfNH5yD5d7yPDqtHuXI1jeGvttgkzPgVALrmSc1uQWk4W4Az7LnLkJ8bkc9pPxmTzJ6gZxm9U1MSe_OrN-JP3QWZk7aLsD-a0HKXo1jnRsjxsnqEvtUldP0IoHn_UvOB7sOnKbe4NFgnRzj0NVO2fbhBWB)",
                      }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-bold text-[#678383] group-hover:text-primary2">
                    Lucas
                  </span>
                </button>
                <button className="flex-shrink-0 flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-full border-2 border-transparent group-hover:border-primary2 transition-all p-0.5">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCnlbGrtYPbNNL6sRS23uisMFtaeRQgyvm9B_v8j-CXMT8uD6uK5Gq3CvdszP9drKBn_AONl5mEEqTpK6ekIkLfU8dxpo5oVXxLlvrrBz5xVgYaQtULWS4HnPhxSyAKJMadvxn6wu-zxtFmyA0A5Xu-ecbc8QDm6QF9JZnjr57QNble3_cDYZjOvikSdoQdQ3MMApgpxNVSHIlL7Z6FisGuB0GVBJyc4peGtaE1hMmbDcfz7JiUp4KUGozv9WqNRMwFqIH7PAp4eDnP)",
                      }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-bold text-[#678383] group-hover:text-primary2">
                    Sofia
                  </span>
                </button>
              </div>
            </div> */}
            </div>
            <div className="p-6 bg-background-light dark:bg-zinc-900/50 flex items-center justify-end gap-3">
              <button
                disabled={isLoading}
                onClick={close}
                className="btn px-6 h-11 rounded-xl text-sm font-bold text-[#678383] hover:text-[#121717] dark:hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
                className="btn px-8 h-11 rounded-xl bg-primary2 text-white text-sm font-bold shadow-lg shadow-primary2/20 hover:brightness-110 transition-all flex items-center"
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-xl"></span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px] mr-2">
                      <UserPlus />
                    </span>
                    Add
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default AddProjectMemberModal;
