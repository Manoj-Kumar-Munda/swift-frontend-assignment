interface ProfileGridItemProps {
  label: string;
  data: string | number;
}

const ProfileGridItem = ({ label, data }: ProfileGridItemProps) => {
  console.log(label);
  console.log(data);
  
  return (
    <div className=" flex flex-col gap-2">
      <span className="text-gray-500">{label}</span>
      <div className="bg-gray-200 py-2 px-3 rounded-md">
        <span>{data}</span>
      </div>
    </div>
  );
};

export default ProfileGridItem;
