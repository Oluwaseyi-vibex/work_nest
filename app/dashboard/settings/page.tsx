"use client";
import UserAvatar from "@/components/UserAvater";
import { useUser } from "@/hooks/useUser";
import { updateUserName } from "@/services/user.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { email } from "zod";

const page = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user.name,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserName,
    onSuccess: () => {
      toast.success("Update successful");
    },
    onError: () => {
      toast.error("Update failed. try again later");
    },
  });

  const changeNameHandler = (name: string) => {
    if (user.name === name) {
      toast.info("Are you messing with me? you did not change your name");
      return;
    }
    mutate(name);
  };

  return (
    <div className="flex-1 max-w-3xl">
      {/* <!-- Page Heading --> */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#121717] dark:text-white">
            Profile Settings
          </h1>
          <p className="text-[#678383] mt-1">
            Update your photo and personal details to showcase your professional
            brand.
          </p>
        </div>
        {/* <div className="flex gap-3">
          <button className="px-5 py-2 rounded-lg border border-[#e5e7eb] dark:border-[#2d323a] text-sm font-bold hover:bg-white dark:hover:bg-gray-800 transition-all">
            Discard
          </button>
          <button className="bg-primary2 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm shadow-primary2/20 hover:bg-primary2/90 transition-all">
            Save Changes
          </button>
        </div> */}
      </div>
      {/* <!-- Profile Content Card --> */}
      <div className="bg-white dark:bg-[#1f2329] rounded-xl border border-[#e5e7eb] dark:border-[#2d323a] shadow-sm overflow-hidden">
        {/* <!-- Profile Image Section --> */}
        <div className="p-8 border-b border-[#e5e7eb] dark:border-[#2d323a]">
          <h2 className="text-lg font-bold mb-6">Profile Picture</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <div className="relative group">
              <UserAvatar size={"xl"} />
              <button className="absolute bottom-1 right-1 bg-white dark:bg-[#1f2329] border border-[#e5e7eb] dark:border-[#2d323a] size-8 rounded-full flex items-center justify-center shadow-lg hover:text-primary2">
                <span className="material-symbols-outlined text-lg">edit</span>
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-lg mb-1">Update your photo</p>
              <p className="text-sm text-[#678383] mb-5">
                JPG, GIF or PNG. Maximum size of 800KB. Recommended dimensions
                400x400.
              </p>
              <div className="flex gap-3 justify-center sm:justify-start">
                <button className="px-4 py-2 bg-primary2/10 text-primary2 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-primary2 hover:text-white transition-all">
                  Upload New
                </button>
                <button className="px-4 py-2 bg-red-50 text-red-600 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-red-600 hover:text-white transition-all">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Form Section --> */}
        <div className="p-8">
          <h2 className="text-lg font-bold mb-6">Personal Details</h2>
          <form className="space-y-6">
            <div className="">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-80">
                  Full Name
                </label>
                <input
                  className="w-full rounded-lg border-[#e5e7eb] dark:border-[#2d323a] bg-background-light dark:bg-background-dark focus:border-primary2 focus:ring-primary2 text-sm p-3"
                  placeholder="Enter your full name"
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500">
                    {errors.fullName.message as string}
                  </p>
                )}
              </div>
              {/* <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-80">
                  Display Name
                </label>
                <input
                  className="w-full rounded-lg border-[#e5e7eb] dark:border-[#2d323a] bg-background-light dark:bg-background-dark focus:border-primary2 focus:ring-primary2 text-sm p-3"
                  placeholder="Username"
                  type="text"
                  value="jhenderson"
                />
              </div> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold opacity-80">
                  Email Address
                </label>
                <a
                  className="text-xs font-bold text-primary2 hover:underline"
                  href="#"
                >
                  Change Email
                </a>
              </div>
              <input
                className="w-full rounded-lg border-[#e5e7eb] dark:border-[#2d323a] bg-gray-100 dark:bg-gray-800 opacity-60 text-sm p-3 cursor-not-allowed"
                disabled
                type="email"
                value={user.email}
              />
              <p className="text-[11px] text-[#678383]">
                Your email is used for login and notifications.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold opacity-80">
                  Professional Bio
                </label>
                <span className="text-[11px] text-[#678383]">
                  156 / 300 characters
                </span>
              </div>
              <textarea
                className="w-full rounded-lg border-[#e5e7eb] dark:border-[#2d323a] bg-background-light dark:bg-background-dark focus:border-primary2 focus:ring-primary2 text-sm p-3 resize-none"
                rows={4}
              >
                Lead Product Designer at AgencyLabs. Specializing in
                high-performance SaaS platforms and design systems. Freelancing
                with top-tier tech startups.
              </textarea>
              <p className="text-[11px] text-[#678383]">
                Brief description for your profile. URLs and @mentions are
                allowed.
              </p>
            </div> */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-80">Timezone</label>
                <div className="relative">
                  <select className="w-full rounded-lg border-[#e5e7eb] dark:border-[#2d323a] bg-background-light dark:bg-background-dark focus:border-primary2 focus:ring-primary2 text-sm p-3 appearance-none">
                    <option>(GMT-05:00) Eastern Time</option>
                    <option>(GMT-08:00) Pacific Time</option>
                    <option>(GMT+00:00) London</option>
                    <option>(GMT+01:00) Paris</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-[#678383] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-80">Language</label>
                <div className="relative">
                  <select className="w-full rounded-lg border-[#e5e7eb] dark:border-[#2d323a] bg-background-light dark:bg-background-dark focus:border-primary2 focus:ring-primary2 text-sm p-3 appearance-none">
                    <option>English (US)</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Spanish</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-[#678383] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div> */}
          </form>
        </div>
        {/* <!-- Footer Actions Mobile/Bottom --> */}
        <div className="p-8 border-t border-[#e5e7eb] dark:border-[#2d323a] bg-gray-50/50 dark:bg-gray-800/20 flex justify-end gap-3">
          {/* <button className="px-5 py-2.5 rounded-lg text-sm font-bold opacity-70 hover:opacity-100 transition-all">
            Cancel
          </button> */}
          <button
            onClick={handleSubmit((data) => changeNameHandler(data.fullName))}
            disabled={isPending}
            className="bg-primary2 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary2/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {isPending ? (
              <span className="loading loading-dots loading-xl"></span>
            ) : (
              <span className="truncate"> Save Changes</span>
            )}
          </button>
        </div>
      </div>
      {/* <!-- Danger Zone --> */}
      <div className="mt-12 p-6 rounded-xl border border-red-200 bg-red-50/30 flex items-center justify-between">
        <div>
          <h3 className="text-red-600 font-bold">Deactivate Account</h3>
          <p className="text-sm text-red-500/70">
            Permanently delete your profile and all workspace data.
          </p>
        </div>
        <button className="px-4 py-2 border border-red-200 text-red-600 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-red-600 hover:text-white transition-all">
          Deactivate
        </button>
      </div>
    </div>
  );
};

export default page;
