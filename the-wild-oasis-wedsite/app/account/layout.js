import SideNavigation from "../_Components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default layout;
