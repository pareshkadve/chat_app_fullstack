// Navbar UI Improvements
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all">
          <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-blue-500" />
          </div>
          <h1 className="text-lg font-bold text-gray-800">SyncSpeak</h1>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/settings" className="btn btn-sm text-gray-700 hover:bg-gray-200 transition">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link to="/profile" className="btn btn-sm text-gray-700 hover:bg-gray-200 transition">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button
                className="btn btn-sm bg-red-500 text-white hover:bg-red-600 transition"
                onClick={logout}
              >
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
