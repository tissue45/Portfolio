import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown } from 'lucide-react'
import { scrollToSectionWithOffset } from '../utils/scrollToSection'

const Hero = () => {
  const scrollToNext = () => {
    scrollToSectionWithOffset('#about')
  }

  return (
    <section id="hero" className="min-h-screen pt-24 md:pt-28 relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-blue-50/40">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-blue-100/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-7rem)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1 text-sm text-sky-500 mb-5 shadow-sm">
              Portfolio 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-apple-dark mb-4">
              개발자 <span className="text-gradient-apple">곽승훈</span>
            </h1>
            <div className="text-xl md:text-2xl text-apple-gray-700 font-medium h-16 mb-6">
              <TypeAnimation
                sequence={[
                  '끊임없이 발전하는 개발자',
                  2000,
                  'AI와 웹 풀스택 개발자',
                  2000,
                  '기술과 창의성을 연결하는 개발자',
                  2000,
                  'AI와 협업하며 속도와 완성도를 높이는 개발자',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </div>
            <p className="text-lg text-apple-gray-700 leading-relaxed mb-8 max-w-2xl">
              AI를 다양한 도메인에 적용해 실제 서비스로 구현하고,
              웹 풀스택 개발 역량을 바탕으로 사용자 중심의
              혁신적인 디지털 솔루션을 만들어가는 개발자입니다.
            </p>
            <div className="flex">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSectionWithOffset('#projects')
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="apple-button bg-gradient-to-r from-sky-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg w-full sm:w-auto text-center"
              >
                프로젝트 보기
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/90 dark:bg-apple-gray-800/90 border border-sky-100 dark:border-apple-gray-700 rounded-3xl p-6 shadow-xl backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl bg-sky-50 dark:bg-apple-gray-700 p-4">
                  <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">포지션</p>
                  <p className="font-semibold text-apple-dark dark:text-white">Full-Stack</p>
                </div>
                <div className="rounded-2xl bg-sky-50 dark:bg-apple-gray-700 p-4">
                  <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">관심분야</p>
                  <p className="font-semibold text-apple-dark dark:text-white">AI + Product</p>
                </div>
                <div className="rounded-2xl bg-sky-50 dark:bg-apple-gray-700 p-4">
                  <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">주요스택</p>
                  <p className="font-semibold text-apple-dark dark:text-white">Node.js / Express.js</p>
                </div>
                <div className="rounded-2xl bg-sky-50 dark:bg-apple-gray-700 p-4">
                  <p className="text-sm text-apple-gray-600 dark:text-apple-gray-300">작업스타일</p>
                  <p className="font-semibold text-apple-dark dark:text-white">Vibe Coding</p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white/90 dark:bg-apple-gray-800/90 border border-sky-100 dark:border-apple-gray-700 rounded-3xl p-6 shadow-xl backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-apple-dark dark:text-white mb-4">
                개인정보
              </h4>
              <div className="space-y-3">
                <div className="rounded-xl bg-sky-50 dark:bg-apple-gray-700 p-3">
                  <p className="text-xs text-apple-gray-500 dark:text-apple-gray-400">이메일</p>
                  <p className="text-sm font-medium text-apple-dark dark:text-white">astrab45@naver.com</p>
                </div>
                <div className="rounded-xl bg-sky-50 dark:bg-apple-gray-700 p-3">
                  <p className="text-xs text-apple-gray-500 dark:text-apple-gray-400">전화번호</p>
                  <p className="text-sm font-medium text-apple-dark dark:text-white">010-4804-9665</p>
                </div>
                <div className="rounded-xl bg-sky-50 dark:bg-apple-gray-700 p-3">
                  <p className="text-xs text-apple-gray-500 dark:text-apple-gray-400">GitHub</p>
                  <a
                    href="https://github.com/tissue45"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-apple-dark dark:text-white hover:text-sky-500 underline underline-offset-2"
                  >
                    github.com/tissue45
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: -5 }}
          className="mx-auto mt-2 block animate-bounce text-apple-gray-400 hover:text-sky-500 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero