import SideNav from "../ui/dashboard/sidenav";
import NavBar from "../ui/dashboard/nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen w-full flex-col bg-gray-100 md:flex-row md:overflow-hidden">
        {/** Sidebar - Static **/}
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        
        <div className="flex-grow p-0 md:overflow-y-auto md:p-0">
          {/** Top/Header Nav Bar - Static **/}
          <div className="flex-none sticky top-0 py-2 md:overflow-y-hidden md:p-2 bg-black-700 text-white h-20">
            <NavBar/>
          </div>
          {/** Display child -- Dynamic **/}
          <div className="flex-grow p-2 md:overflow-y-auto md:p-2">
            {children}
          </div>            
        </div>
      </div>
    );
  }