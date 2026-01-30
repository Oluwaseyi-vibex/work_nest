import { EllipsisVertical } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="bg-white dark:bg-background-dark rounded-xl border border-[#f1f4f4] dark:border-[#2d3238] shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 group">
      <div className="flex justify-between items-start mb-4">
        {/* <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          <span className="material-symbols-outlined text-3xl">smartphone</span>
        </div> */}
        <button className="p-1 text-[#678383] hover:bg-[#f1f4f4] dark:hover:bg-[#2d3238] rounded">
          <span className="material-symbols-outlined">
            <EllipsisVertical />
          </span>
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-1">Sparky App Dev</h3>
        <p className="text-sm text-[#678383]">
          iOS &amp; Android Implementation
        </p>
      </div>
      <div className="space-y-4">
        {/* <div>
          <div className="flex justify-between text-xs font-bold mb-2">
            <span className="text-[#678383]">Progress</span>
            <span className="text-primary">20%</span>
          </div>
          <div className="w-full bg-[#f1f4f4] dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div> */}
        <div className="flex items-center justify-between pt-4 border-t border-[#f1f4f4] dark:border-[#2d3238]">
          <div className="flex avatar-stack">
            <div
              className="w-8 h-8 rounded-full bg-cover bg-center"
              data-alt="Team member portrait"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDSLuw3wLSE1MeA5Fd8O_givJPbueyVAFvCcZcNGSG_o9ftt26PkVWFWVXk3tTtoRql6-tOYAdHGiycrkzrNstz-Ktet7olSCaiwT9Yhg6Hg8g_9_IeQKnd6mN0QG4dQyCZT_wEDTsbMtLYiQAp34k7YyXTicHFftleFQLwbK2IGmLtpHiYDD5idc780UHvoiWIZlFK9nywr1VghtE8JSG6hC0v3Zp9FF-S4NI6GY6qpnzb-cHyOSHW5CJiLj0IFBa-mp29MSEjbWW2)",
              }}
            ></div>
            <div
              className="w-8 h-8 rounded-full bg-cover bg-center"
              data-alt="Team member portrait"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCX2HPjLi6A4i5t4Aq5YOOH3kleo8nzf9COJvZV1TYkRbeh3RrbfkO7aZJNZl4MT-x6Mb9HKsKRdiO_rqrvU-vDbf_L7eH2SywQrfvJpkJpTA7QR5L-cgBFrCtcvwRX1Io3yb9uVn1mYQc4xsfQ5goPXBsJ5v_YI8dxcNM7O_3mhqUeiv8vkgmHkW-EWjvDKOMr-lD6crmSjk2CQO3LtKhtmKeMJB6-rsk1cXevaFRdgA3FPY8jKxLmGkTnRB0V55viug19fMQhXcsX)",
              }}
            ></div>
          </div>
          {/* <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
            At Risk
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
