import React from 'react';
import type { AudienceItem } from '../types';

const audienceData: AudienceItem[] = [
    { text: '자신만의 콘텐츠로 책을 출판하고 싶은 작가 지망생' },
    { text: '강의와 교육 자료의 질을 높이고 싶은 강사 및 교육자' },
    { text: '새로운 아이디어로 콘텐츠를 만들고 싶은 크리에이터' },
    { text: '업무 보고서와 기획서 작성을 자동화하고 싶은 직장인' },
    { text: 'AI를 활용해 비즈니스를 확장하고 싶은 1인 창업가' },
];

const Benefits = () => {
    return (
        <div className="py-16 bg-white overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="relative">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
                        강사 소개
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 text-center">
                        AI 콘텐츠 제작의 전문가, 이신우 소장님을 소개합니다.
                    </p>
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">이신우 소장</h3>
                            <p className="text-md font-semibold text-indigo-600">두온교육출판사 / 미래이음연구소</p>
                        </div>
                        <p className="mt-4 text-lg text-gray-600">
                            다년간의 출판 경험과 AI 기술에 대한 깊은 이해를 바탕으로, 누구나 쉽게 아이디어를 현실로 만들 수 있도록 돕는 콘텐츠 전략가입니다. 그의 실전 노하우는 여러분의 창작 여정에 훌륭한 가이드가 될 것입니다.
                        </p>
                    </div>
                </div>

                <div className="relative mt-16 sm:mt-20 lg:mt-24">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                이런 분들께 추천합니다
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                AI를 통해 콘텐츠 제작의 새로운 가능성을 발견하고 싶은 모든 분들을 환영합니다.
                            </p>

                            <dl className="mt-10 space-y-5">
                                {audienceData.map((item) => (
                                     <div key={item.text} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">{item.text}</dt>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                             <img
                                className="relative mx-auto rounded-lg shadow-xl w-[490px] h-auto object-cover"
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1887&auto=format&fit=crop"
                                alt="콘텐츠 제작에 몰두하는 사람들"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;