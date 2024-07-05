import { ClassNameValue, twMerge } from "tailwind-merge";

interface AvatarProps {
  name: string;
  className?: ClassNameValue
}

const Avatar = ({ name, className }: AvatarProps) => {
  const avatarText = name.slice(0, 2).toUpperCase();
  return (
    <div className={twMerge(" w-10 h-10 bg-white rounded-full flex items-center justify-center", className)}>
      <span>{avatarText}</span>
    </div>
  );
};

export default Avatar;
