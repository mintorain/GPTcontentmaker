import React from 'react';
import type { LectureTopic } from '../types';

const lectureTopics: LectureTopic[] = [
  {
    id: 1,
    title: '“한 줄 아이디어”를 GPT로 책과 콘텐츠로 확장하는 법',
    description: '머릿속에 맴도는 아이디어를 구체적인 목차와 원고로 발전시키는 GPT 활용 전략을 배웁니다.',
  },
  {
    id: 2,
    title: 'AI 기반 전자책·그래픽노블 실전 제작 과정',
    description: '글쓰기부터 이미지 생성까지, AI 툴을 활용해 전자책과 그래픽노블을 직접 만들어보는 과정을 체험합니다.',
  },
  {
    id: 3,
    title: '실제 출판 성공 사례로 배우는 콘텐츠 전략',
    description: 'AI를 활용해 성공적으로 책을 출판한 실제 사례를 분석하며, 자신만의 콘텐츠 성공 전략을 수립합니다.',
  },
  {
    id: 4,
    title: '나만의 도서 표지 디자인하기',
    description: '전문 디자이너가 아니어도 괜찮습니다. AI 이미지 생성 툴을 이용해 시선을 사로잡는 책 표지를 직접 디자인해봅니다.',
  },
];

const CourseCurriculum = () => {
  return (
    <div className="bg-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Special Lecture</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            특강에서 무엇을 배우나요?
          </p>
           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            실전 노하우와 AI 출판 성공 사례를 통해 콘텐츠 제작의 모든 것을 알려드립니다.
          </p>
        </div>
        <div className="mt-16">
          <div className="flow-root">
            <ul className="-mb-8">
              {lectureTopics.map((item, itemIdx) => (
                <li key={item.id}>
                  <div className="relative pb-8">
                    {itemIdx !== lectureTopics.length - 1 ? (
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex items-start space-x-4 group">
                      <div className="flex-shrink-0">
                        <span className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center ring-8 ring-purple-50 text-white font-bold text-lg shadow-md">
                          {item.id}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <p className="font-bold text-lg text-gray-900">{item.title}</p>
                      </div>
                      <div className="absolute bottom-full left-10 mb-2 w-72 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        {item.description}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-24 text-white">
        <svg viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CourseCurriculum;