import React, { useState, useEffect } from 'react';

const Header = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-10-10T20:00:00+09:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isEventLive, setIsEventLive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (!Object.keys(newTimeLeft).length) {
                setIsEventLive(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    });
    
    const formatNumber = (num) => num.toString().padStart(2, '0');

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col text-center">
                <div className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                  {interval === 'days' ? timeLeft[interval] : formatNumber(timeLeft[interval])}
                </div>
                <div className="text-base sm:text-lg font-medium text-indigo-300 capitalize mt-1">{interval}</div>
            </div>
        );
    });

  return (
    <header className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1554475901-45389635c2ba?q=80&w=1974&auto=format&fit=crop" 
          alt="AI related abstract background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:px-8 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">GPT 콘텐츠 메이커</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">무료 온라인 특강</span>
        </h1>
        <p className="mt-6 text-2xl font-semibold text-gray-200">
          "AI가 글을 쓰는 순간, 당신의 아이디어는 콘텐츠가 됩니다."
        </p>
        <p className="mt-4 max-w-lg mx-auto sm:mx-0 text-lg text-gray-300 sm:max-w-3xl">
          생각만 하던 글쓰기와 출판, 이제 GPT와 함께 실현해보세요. 단 한 번의 특강으로 콘텐츠 제작의 판을 뒤집을 기회를 잡으세요!
        </p>

        <div className="mt-12">
            {isEventLive ? (
                <div className="text-center p-6 rounded-xl bg-green-500/30 backdrop-blur-sm border border-green-400 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        특강이 시작되었습니다!
                    </h3>
                    <p className="text-green-200 mt-1">지금 바로 참여하세요.</p>
                </div>
            ) : (
                <div className="max-w-xl mx-auto sm:mx-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h3 className="text-center sm:text-left text-xl font-semibold text-gray-200 mb-4">
                        특강 시작까지 남은 시간
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                        {timerComponents.length ? timerComponents : <span className="col-span-4 text-center">Loading...</span>}
                    </div>
                </div>
            )}
        </div>

        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:flex sm:justify-start">
          <div className="inline-flex rounded-md shadow-lg w-full sm:w-auto">
            <a
              href="#join"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full sm:w-auto transform transition-transform duration-300 hover:scale-105"
            >
              지금 바로 참여하기
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <h3 className="text-lg font-bold">🗓️ 날짜</h3>
                <p className="mt-1 text-indigo-300 text-xl font-semibold">2025년 10월 10일 (목)</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <h3 className="text-lg font-bold">⏰ 시간</h3>
                <p className="mt-1 text-indigo-300 text-xl font-semibold">오후 8시 (KST)</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <h3 className="text-lg font-bold">📍 장소</h3>
                <p className="mt-1 text-indigo-300 text-xl font-semibold">온라인 (ZOOM 라이브)</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;