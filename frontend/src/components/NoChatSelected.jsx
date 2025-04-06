import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-10 sm:p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Floating Chat Icon */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center 
              shadow-xl shadow-primary/30 animate-bounce transition-all duration-300 
              transform translate-y-[-10px] hover:translate-y-[-15px]"
            >
              <MessageSquare className="w-9 h-9 text-primary" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-primary">Welcome to SyncSpeak!</h2>
        <p className="text-base-content/70 text-lg">
          Select a conversation from the sidebar to start chatting.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
