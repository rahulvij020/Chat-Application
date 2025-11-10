const ChatShimmer = () => {
    return (
        <div className="flex flex-col h-full animate-pulse">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                <div className="flex-1">
                    <div className="h-4 w-32 bg-white/20 rounded"></div>
                    <div className="h-3 w-20 bg-white/10 rounded mt-1"></div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                {/* Message 1 */}
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div>
                        <div className="h-4 w-40 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 w-24 bg-white/10 rounded"></div>
                    </div>
                </div>

                {/* Message 2 */}
                <div className="flex items-start gap-3 justify-end">
                    <div>
                        <div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 w-16 bg-white/10 rounded"></div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>

                {/* Message 3 */}
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div>
                        <div className="h-4 w-48 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-white/10 rounded"></div>
                    </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                    <div>
                        <div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 w-16 bg-white/10 rounded"></div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>

               <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div>
                        <div className="h-4 w-40 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 w-24 bg-white/10 rounded"></div>
                    </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                    <div>
                        <div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 w-16 bg-white/10 rounded"></div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
            </div>

            {/* Input Box */}
            <div className="p-4 border-t border-white/10">
                <div className="h-10 bg-white/20 rounded-lg"></div>
            </div>
        </div>
    );
};

export default ChatShimmer;
