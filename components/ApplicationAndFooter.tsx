import React from 'react';

const ApplicationAndFooter = () => {
  return (
    <>
      <div id="join" className="relative bg-gray-900 py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-16 px-8 bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl shadow-2xl overflow-hidden lg:px-16 lg:py-20 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="absolute opacity-20 lg:opacity-30">
                {/* Decorative background pattern */}
                <svg width="640" height="640" fill="none" viewBox="0 0 640 640" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <defs>
                        <pattern id="eab7140f-1b80-4954-bb96-ab8c0e75a960" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect width="4" height="4" fill="currentColor" className="text-indigo-500"></rect>
                        </pattern>
                    </defs>
                    <rect width="640" height="640" fill="url(#eab7140f-1b80-4954-bb96-ab8c0e75a960)"></rect>
                </svg>
            </div>
            <div className="relative z-10 lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                지금 바로 참여하세요!
              </h2>
              <p className="mt-4 text-lg text-indigo-200">
                AI와 함께 콘텐츠 제작의 새로운 미래를 경험하세요. 아래 링크를 통해 무료 특강에 바로 참여할 수 있습니다.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative z-10 lg:col-span-1 flex items-center justify-center">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white">
                    <h3 className="text-2xl font-bold text-center">Zoom 참여 정보</h3>
                    <div className="mt-4 space-y-2 text-lg">
                        <p><span className="font-semibold">회의 ID:</span> 834 7654 2414</p>
                        <p><span className="font-semibold">암호:</span> 250423</p>
                    </div>
                    <a
                        href="https://us06web.zoom.us/j/83476542414?pwd=3NtSdXJavx1XzQ0w6vd2I3k4xrgLwx.1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transform transition-transform duration-300 hover:scale-105"
                    >
                        Zoom 회의 참가하기
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-base text-gray-400">
            &copy; 2025 GPT Contents Maker Class. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default ApplicationAndFooter;