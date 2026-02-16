import { useState } from "react";
import { deleteFile, fetchFileHistory } from "@/services/file.service";
import { GetFileHistorry } from "@/types";
import { formatDate } from "@/utils/formatData";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Eye, FileText, FileVideoCamera, Image, Trash } from "lucide-react";
import { toast } from "react-toastify";
import Loader from "../Loader";
import UserAvatar from "./../UserAvater";

const file = ({ projectId }: { projectId: string }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { data } = useQuery({
    queryKey: ["file-history", projectId],
    queryFn: () => fetchFileHistory(projectId),
    // enabled: !!projectId,
  });

  const deleteFileMutation = useMutation({
    mutationFn: (fileId: string) => {
      setDeleteLoading(true);
      return deleteFile(fileId);
    },
    onSuccess: () => {
      setDeleteLoading(false);
      toast.success("File deleted!");
    },
    onError: (err: any) => {
      setDeleteLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });

  return (
    <>
      <div className="bg-white dark:bg-[#1f2329] rounded-xl border border-[#dde4e4] dark:border-[#2d323a] overflow-hidden shadow-sm mt-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#fcfdfd] dark:bg-[#252a32] border-b border-[#dde4e4] dark:border-[#2d323a]">
              <th className="px-6 py-4 text-xs font-bold text-[#678383] uppercase tracking-wider">
                File Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#678383] uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#678383] uppercase tracking-wider">
                Uploaded By
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#678383] uppercase tracking-wider">
                Date
              </th>
              {/* <th className="px-6 py-4 text-xs font-bold text-[#678383] uppercase tracking-wider">
                Size
              </th> */}
              <th className="px-6 py-4 text-xs font-bold text-[#678383] uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dde4e4] dark:divide-[#2d323a]">
            {/* <!-- Row 1 --> */}
            {data?.data?.map((file: GetFileHistorry) => (
              <tr
                className="file-row group hover:bg-[#f5f7f9] dark:hover:bg-[#2d323a] transition-all"
                key={file.id}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                      <span className="material-symbols-outlined text-xl">
                        <FileText />
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#121717] dark:text-white truncate max-w-[200px]">
                      {file.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#678383]">Image</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <UserAvatar />
                    <span className="text-sm font-medium text-[#121717] dark:text-white">
                      {file?.uploader?.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#678383]">
                  {formatDate(file.createdAt)}
                </td>
                {/* <td className="px-6 py-4 text-sm text-[#678383]">4.2 MB</td> */}
                <td className="px-6 py-4 text-right">
                  <div className="file-actions flex justify-end gap-1 transition-opacity">
                    <button
                      onClick={() =>
                        window.open(file.url, "_blank", "noopener,noreferrer")
                      }
                      className="p-2 text-[#678383] hover:text-primary2 transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">
                        <Eye />
                      </span>
                    </button>
                    <button
                      disabled={deleteLoading}
                      onClick={() => deleteFileMutation.mutate(file.id)}
                      className="p-2 text-[#678383] hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {deleteLoading ? <Loader /> : <Trash />}
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* <!-- Row 2 --> */}
            {/* <tr className="file-row group hover:bg-[#f5f7f9] dark:hover:bg-[#2d323a] transition-all">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined text-xl">
                      <Image />
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#121717] dark:text-white truncate max-w-[200px]">
                    homepage-hero-v2.png
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#678383]">PNG Image</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div
                    className="size-6 rounded-full bg-center bg-cover"
                    data-alt="Avatar of Alex Rivera"
                    style={{
                      backgroundImage:
                        "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBkZN5sfFBLlHqKS23mPKL6OcEw0TQfYlg1Q_d8OPsr-vZWmcwMhTS_JmIxfIatewXjnarZQD87U-BX3gwolRZhCf5GjHZFx8pLxjoOSujcSGJRDGFk9dWXd7lnAWnCGUbTcuNlZyEAbXDMLbhJZstf9xFf0qEy_b_SRqhQ4oDd-zKatFTUyJR9x9XpUzRCnPEwFk5WB_ieAv7veE-mAsQLdMCMf9iaTnvK4hkZJgqNA3SGQRKY7W2eh5vBrn-D0n1mxO6dO05C3YZ7)",
                    }}
                  ></div>
                  <span className="text-sm font-medium text-[#121717] dark:text-white">
                    Alex Rivera
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#678383]">Oct 14, 2023</td>
              <td className="px-6 py-4 text-sm text-[#678383]">1.8 MB</td>
              <td className="px-6 py-4 text-right">
                <div className="file-actions opacity-0 flex justify-end gap-1 transition-opacity">
                  <button className="p-2 text-[#678383] hover:text-primary2 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      download
                    </span>
                  </button>
                  <button className="p-2 text-[#678383] hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr> */}
            {/* <!-- Row 3 --> */}
            {/* <tr className="file-row group hover:bg-[#f5f7f9] dark:hover:bg-[#2d323a] transition-all">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-xl">
                      description
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#121717] dark:text-white truncate max-w-[200px]">
                    contract_v2_final.docx
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#678383]">Document</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div
                    className="size-6 rounded-full bg-center bg-cover"
                    data-alt="Avatar of Sarah Jenkins"
                    style={{
                      backgroundImage:
                        "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCvU9zVunKtZBwf_b8A-wO4gpC8E3PwL1Wh54Ef-YJXnUgP5YOX9h3MBPcjkiF01kc1C3jTGheZc4nJuKZsSz_ZcHT7QSAKnAEhKG4QZaonfXs0PPMEwrKmntQ-vY8IdU_6P0RxMqQVZnXdJjRfna_fKLip_P18g_6fWD8u7AwQupQDbocofYarnKBnEG5sT_mMu7UvpmiCyPfZHYlqweTDu56y9zCECqij2Mnr3VppDmbsb6RVVZXTbQU5_w8vpPPWkpPxqPmcGLyC)",
                    }}
                  ></div>
                  <span className="text-sm font-medium text-[#121717] dark:text-white">
                    Sarah Jenkins
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#678383]">Oct 15, 2023</td>
              <td className="px-6 py-4 text-sm text-[#678383]">120 KB</td>
              <td className="px-6 py-4 text-right">
                <div className="file-actions opacity-0 flex justify-end gap-1 transition-opacity">
                  <button className="p-2 text-[#678383] hover:text-primary2 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      download
                    </span>
                  </button>
                  <button className="p-2 text-[#678383] hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr> */}
            {/* <!-- Row 4 --> */}
            {/* <tr className="file-row group hover:bg-[#f5f7f9] dark:hover:bg-[#2d323a] transition-all">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <span className="material-symbols-outlined text-xl">
                      <FileVideoCamera />
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#121717] dark:text-white truncate max-w-[200px]">
                    explainer-video-draft.mp4
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#678383]">Video</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div
                    className="size-6 rounded-full bg-center bg-cover"
                    data-alt="Avatar of Mark Thompson"
                    style={{
                      backgroundImage:
                        "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDKswk-LzFVbzhNtsvSgXh0Pi_TfrhFeD96MwXFzB_sL9KjqEWvXp4jOdoTgfgmn8XPwHPr_UI7-BmuebMxjpuSP_izghmzneePoLroDHSG_bXWeWZg3ZsR0bKmhoyK9QQB1hc6AExIUVdcsV29_Sm0oJk0UVe4m3c5GacrQSlceFPx8OTb75S7EIxDc_Dd2Ya9eMDWqZxiv9kYe2L8DLrsd86xNE4l5qBLAw_JXqboZI2ePyPNH0XLEcrIduWSf_DyirhdDrFLcAIl)",
                    }}
                  ></div>
                  <span className="text-sm font-medium text-[#121717] dark:text-white">
                    Mark Thompson
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#678383]">Oct 18, 2023</td>
              <td className="px-6 py-4 text-sm text-[#678383]">45.2 MB</td>
              <td className="px-6 py-4 text-right">
                <div className="file-actions opacity-0 flex justify-end gap-1 transition-opacity">
                  <button className="p-2 text-[#678383] hover:text-primary2 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      download
                    </span>
                  </button>
                  <button className="p-2 text-[#678383] hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
        {/* <!-- Drag and Drop Zone Hint --> */}
        {/* <div className="p-8 border-2 border-dashed border-[#dde4e4] dark:border-[#2d323a] m-6 rounded-xl flex flex-col items-center justify-center bg-[#fcfdfd] dark:bg-[#252a32]">
          <div className="size-12 rounded-full bg-primary2/10 flex items-center justify-center text-primary2 mb-4">
            <span className="material-symbols-outlined text-2xl">
              cloud_upload
            </span>
          </div>
          <p className="text-sm font-bold text-[#121717] dark:text-white">
            Drag and drop files here
          </p>
          <p className="text-xs text-[#678383] mt-1">
            Files up to 50MB are supported
          </p>
        </div>
      </div> */}
        {/* <!-- Footer / Status Bar --> */}
        {/* <div className="mt-6 flex justify-between items-center text-xs font-medium text-[#678383]">
        <p>Showing 4 of 4 files</p>
        <div className="flex items-center gap-4">
          <button className="hover:text-[#121717] dark:hover:text-white transition-colors">
            Previous
          </button>
          <div className="flex gap-1">
            <span className="size-6 flex items-center justify-center rounded bg-primary2 text-white">
              1
            </span>
          </div>
          <button className="hover:text-[#121717] dark:hover:text-white transition-colors">
            Next
          </button>
        </div>*/}
      </div>
    </>
  );
};

export default file;
