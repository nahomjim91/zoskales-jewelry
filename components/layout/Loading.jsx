export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated diamond icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#601616] to-[#3B1F1F] p-6 rounded-full animate-spin-slow shadow-2xl">
            
              <img src="/images/logo.png" alt="Logo" className="w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#601616] mb-4">
          Loading...
        </h2>

        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          Discovering exquisite treasures for you
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-[#601616] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-[#3B1F1F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-[#601616] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-full max-w-xs mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#601616] to-[#3B1F1F] animate-progress"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}