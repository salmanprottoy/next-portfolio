import React from "react";

interface SkillBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, label, className }) => (
  <span
    className={`inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary text-primary font-medium text-sm shadow-md border border-tertiary hover:shadow-lg hover:border-light hover:text-light transition-all duration-300 transform hover:scale-105 group w-[150px] justify-center ${
      className || ""
    }`}
  >
    <span className="w-6 h-6 flex items-center justify-center [&>img],[&>span]:transition-colors group-hover:[&>img],[&>span]:filter group-hover:[&>img],[&>span]:invert group-hover:[&>img],[&>span]:brightness-200">
      {icon}
    </span>
    {label}
  </span>
);

export default SkillBadge;
