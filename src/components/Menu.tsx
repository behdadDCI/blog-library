import { GiBarbedCoil } from "react-icons/gi";

const MenuPage = () => {
  return (
    <div className="w-full container px-5 flex items-center flex-col">
      <div className="text-3xl bg-sky-500 flex items-center gap-2">
        <GiBarbedCoil />
        <span>top Books</span>
      </div>
    </div>
  );
};

export default MenuPage;
