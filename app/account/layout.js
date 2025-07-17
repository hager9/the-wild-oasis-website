import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-[16rem_1fr] gap-8 h-full">
      <SideNavigation />
      <div className="py-1 w-full">{children}</div>
    </div>
  );
}
