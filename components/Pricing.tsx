import React from 'react';

const Pricing = () => {
  return (
    <div id="offer" className="bg-gray-900 relative">
        <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900"></div>
        </div>
      <div className="relative max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          참여자 전용 특별 혜택
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          특강에 참여하시는 모든 분들께 콘텐츠 제작의 필수품, 캔바(Canva) 유료 계정을 선물로 드립니다!
        </p>
        
        <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-center">
                 <svg className="w-20 h-20 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H12v-2.625z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.875A2.625 2.625 0 109.375 7.5H12v-2.625z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v-6.375M9.375 7.5a2.625 2.625 0 105.25 0 .375.375 0 00-.375-.375H9.75a.375.375 0 00-.375.375z" />
                 </svg>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white">캔바 교육용 유료 계정 1개월 무료 사용권</h3>
            <p className="mt-2 text-indigo-300">
                특강 참여자 전원에게 증정 (10월 31일까지 사용 가능)
            </p>
            <div className="mt-6 text-4xl font-bold text-indigo-400">
                +
            </div>
             <h3 className="mt-2 text-2xl font-bold text-white">✨ 후기 작성 시 1개월 추가 연장!</h3>
             <p className="mt-2 text-indigo-300">
                총 2개월 무료 이용 혜택을 놓치지 마세요! (12월 31일까지 사용 가능)
            </p>
        </div>

        <a
          href="#join"
          className="mt-12 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform transition-transform duration-300 hover:scale-105"
        >
          혜택받고 특강 참여하기
        </a>
      </div>
    </div>
  );
};

export default Pricing;