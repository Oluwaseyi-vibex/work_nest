import {
  ArrowLeftRight,
  EllipsisVertical,
  Mail,
  Settings,
  Trash2,
} from "lucide-react";
import React from "react";
import Loader from "../Loader";
import { formatDate } from "@/utils/formatData";
import { useForm } from "react-hook-form";

const ProjectMembers = ({ data, isLoading, onRemove, type }: any) => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
      <div className="flex-1 p-8 bg-background-light dark:bg-background-dark">
        <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-[#dde4e4] dark:border-zinc-800 shadow-sm overflow-hidden">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#dde4e4] dark:border-zinc-800">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#678383]">
                      Name
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#678383]">
                      Email Address
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#678383]">
                      Role
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#678383]">
                      Joined Date
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#678383] text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dde4e4] dark:divide-zinc-800">
                  {data.map((member) => (
                    <tr
                      className="hover:bg-background-light dark:hover:bg-zinc-900/50 transition-colors"
                      key={member.id}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-10 rounded-full bg-cover bg-center ring-2 ring-background-light dark:ring-zinc-800"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhSi2eCLIuz4a4FpcBlydKmPWN9LJfNZkdLEaEwQaZwXma2DkVinLvzoP1ZXT5-NIiC99Od323PcNMmizzq2RNSyCX0LPlbDhYeb3-zihTtaZvhgQQ2udWYJzp67p7RC70qNuMVlPNcCmUXpGvaPy2wSS1ST0QSdVyIEj0T4vBj5KmWBjb_sO8YBVKS4FaTTBU4208nwtAcgxRtC4LjhI-bEIe2iCI3AxfHzLbx1p_JHACgfrS40csjMW4UYEqbbs6w3h6W2BW0zq3')",
                            }}
                          ></div>
                          <div>
                            <p className="text-sm font-bold">
                              {member.user.name}
                            </p>
                            <p className="text-[11px] text-[#678383] font-medium">
                              Project Manager
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#678383]">
                        {member.user.email}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold bg-primary2/10 text-primary2 uppercase tracking-tight`}
                        >
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#678383]">
                        {formatDate(member.joinedAt)}
                      </td>
                      <td className="px-6 py-4 text-right dropdown dropdown-end">
                        <button
                          tabIndex={0}
                          className="material-symbols-outlined text-[#678383] hover:text-primary transition-colors"
                        >
                          <EllipsisVertical />
                        </button>

                        <div
                          tabIndex={-1}
                          className="absolute dropdown-content right-6 top-10 w-56 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-[#dde4e4] dark:border-zinc-800 z-50 py-1 overflow-hidden"
                        >
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#121717] dark:text-zinc-200 hover:bg-background-light dark:hover:bg-zinc-800 transition-colors">
                            <span className="material-symbols-outlined text-[18px] text-[#678383]">
                              <Settings />
                            </span>
                            <span className="font-semibold">
                              Edit Permissions
                            </span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#121717] dark:text-zinc-200 hover:bg-background-light dark:hover:bg-zinc-800 transition-colors">
                            <span className="material-symbols-outlined text-[18px] text-[#678383]">
                              <ArrowLeftRight />
                            </span>
                            <span className="font-semibold">
                              Transfer Ownership
                            </span>
                          </button>
                          <div className="h-px bg-[#dde4e4] dark:bg-zinc-800 my-1 mx-2"></div>
                          <button
                            onClick={() => onRemove(member.user.email)}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              <Trash2 />
                            </span>
                            <span className="font-bold">
                              Remove from Project
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* <tr className="hover:bg-background-light dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover bg-center ring-2 ring-background-light dark:ring-zinc-800"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHWLd4etMBH8ftvhro8reQ5UFZq6Vt5Jk8ukWFg6id1ehkaMOTuxdH8atETvyuscg-Vt1NdLGiXOyP_ciY1usIcXDgESpGJUGTZcPwUeycey5cfgZ2i5KaEtNxa2BQ8healawvVM_a8hzEtCJyK-aisCt2i2Q3IDR-SAMAoBkKTWqf64A0HO3xD7YNAH40yyitMyfKBjvUgt2h6hJ1dIkjoJrTdBoapCmCSpnmAbl4QCywlciR1MJfkPo7okH50YCqgzQz_RcvVkOS')",
                        }}
                      ></div>
                      <div>
                        <p className="text-sm font-bold">Sarah Jenkins</p>
                        <p className="text-[11px] text-[#678383] font-medium">
                          UI Designer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    sarah.j@freelance.io
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white uppercase tracking-tight">
                      Editor
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    Oct 14, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-[#678383] hover:text-primary transition-colors">
                      <EllipsisVertical />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-background-light dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover bg-center ring-2 ring-background-light dark:ring-zinc-800"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsSyy4ejpzPLEKBuNrw3GUdVs3taREb34DS1U1JKt_xNKpShEimIOi7rOPJgZ9O0v-XMt_IRkE2--LUoq2nlIGauU6Lpbt_VA-yJ_ydDLcqwnz1HVtXlAPoos5sORqIz-ORNiIZ-jcnY8Ds_CfsGK3gQgGqArJiwGOAWfiWT8w5KsTs4eC6v1uZ5iySWc_xfV0MLst2Ghgn-lOnB7ArrH-pgLZm-gGa4EXNc04qfZNtDcFZwImcFGqv2N4QsACH92mipg04DvS-Knn')",
                        }}
                      ></div>
                      <div>
                        <p className="text-sm font-bold">Michael Chen</p>
                        <p className="text-[11px] text-[#678383] font-medium">
                          Lead Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    m.chen@devstack.net
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white uppercase tracking-tight">
                      Editor
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    Oct 15, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-[#678383] hover:text-primary transition-colors">
                      <EllipsisVertical />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-background-light dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover bg-center ring-2 ring-background-light dark:ring-zinc-800"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk2Z-i12APZBTcfrLOds4iCEJ6gJUFttugPzbhGHoEKMPcFe9Pmq24GDl6GZDNmzXhaPnYxvhkLLAnk0WwGmDzpbvMTSsTRF2SMvfG3yWkjlpt5rV8s67SXVBAxsziQ3-nHlFKydg2_7vA0e5fgLXGcINkVOYdAzNhkHD-KYOd8e1hnwixrtCCOA_i2WzF0K3RZY4IzbR0o_ynUdQQv8OL0LEsSHSontJ0-2k1RAq9KFfhUH24t3LIVCMG1qlryC9qmT0ioKsAuY2J')",
                        }}
                      ></div>
                      <div>
                        <p className="text-sm font-bold">Emma Wilson</p>
                        <p className="text-[11px] text-[#678383] font-medium">
                          Client Reviewer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    emma@clientcorp.com
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase tracking-tight">
                      Viewer
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    Oct 18, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-[#678383] hover:text-primary transition-colors">
                      <EllipsisVertical />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-background-light dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover bg-center ring-2 ring-background-light dark:ring-zinc-800"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBF-63n-rz9ObjFYeoR7hj7Q4gTcoclQv_-i3ux9lqEZOWkhszMgjDJW7GyrWnZPt02bMwpdyCkjHAeBVZZonbY5CxET31a-xealcQefwwr4DceriQ1eydi7u8yiAaykkXS0r9pR5FuCVA9d8XZ1LNjhd1mdOtu4fNbKU2kGOjzo5Fvhqm_aCN1Tc3SV-I3o3BrodDJDuSepRbVil0VWv_adBjSBdiK5E-5LAog0WMtnLYQJwB6nYzbwwfiCMq-g9C1BxBWiEg9GVI')",
                        }}
                      ></div>
                      <div>
                        <p className="text-sm font-bold">David Smith</p>
                        <p className="text-[11px] text-[#678383] font-medium">
                          QA Analyst
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    d.smith@agency.com
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#dde4e4] dark:bg-zinc-800 text-[#121717] dark:text-white uppercase tracking-tight">
                      Viewer
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#678383]">
                    Oct 20, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-[#678383] hover:text-primary transition-colors">
                      <EllipsisVertical />
                    </button>
                  </td>
                </tr> */}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="mt-8 p-6 border-2 border-dashed border-[#dde4e4] dark:border-zinc-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary2/10 flex items-center justify-center text-primary2">
              <span className="material-symbols-outlined text-3xl">
                <Mail />
              </span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Need to add more hands?</h4>
              <p className="text-xs text-[#678383]">
                Invite external freelancers or clients by their email to
                collaborate on this specific project.
              </p>
            </div>
          </div>
          <button className="px-6 h-10 rounded-lg border-2 border-primary2 text-primary2 text-sm font-bold hover:bg-primary2/5 transition-colors">
            Send Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectMembers;
