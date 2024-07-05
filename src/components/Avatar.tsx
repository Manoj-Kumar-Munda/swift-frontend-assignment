interface AvatarProps {
  name: string;
  size: "base" | "lg";
  bgColor?: string;
}

const Avatar = ({ name, size, bgColor="" }: AvatarProps) => {
  const avatarText = name.slice(0, 2);
  return (
    <div style={{backgroundColor: bgColor}} className={`avatar ${size}`}>
      <span className="avatar__text">{avatarText}</span>
    </div>
  );
};

export default Avatar;
