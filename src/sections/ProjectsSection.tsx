import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LiveProjectButton } from '../components/Buttons'
import { FadeIn } from '../components/FadeIn'

const projects = [
  {
    number: '01',
    category: 'AI 互动小说',
    name: '天衍万象',
    url: 'https://github.com/Lassophobia/ai-interactive-novel',
    description: '一款基于 DeepSeek API 的本地 AI 互动小说创作工具。用户可以设定世界观、角色和故事风格，再通过选项或自定义行动推动剧情发展。',
    images: ['/projects/tianyan/1.png', '/projects/tianyan/3.png', '/projects/tianyan/2.png'],
  },
  {
    number: '02',
    category: '桌面阅读器',
    name: '墨伴',
    url: 'https://github.com/Lassophobia/moban-ai-reader',
    description: '一款本地优先的桌面阅读器，整合书源搜索、沉浸阅读、正文净化、智能换源、听书和 AI 陪读功能。',
    images: ['/projects/moban/1.png', '/projects/moban/3.png', '/projects/moban/home.png'],
  },
  {
    number: '03',
    category: '桌面播放器',
    name: '爱优腾',
    url: 'https://github.com/Lassophobia/aiyouteng-desktop',
    description: '一款使用 Electron 开发的桌面视频聚合播放工具，提供影视点播、电视直播和平台直播功能，主要用于前端开发与播放协议研究。',
    images: ['/projects/aiyouteng/1.png', '/projects/aiyouteng/3.png', '/projects/aiyouteng/2.png'],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const targetScale = 1 - (projects.length - 1 - index) * .03
  const scale = useTransform(scrollYProgress, [.35, .9], [1, targetScale])
  return <div ref={ref} className="relative h-[85vh] min-h-[620px]"><motion.article style={{ scale, top: `calc(6rem + ${index*28}px)` }} className="project-card-shadow sticky overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
    <div className="mb-6 grid grid-cols-[auto_1fr] items-end gap-x-5 gap-y-3 sm:grid-cols-[auto_auto_1fr_auto] sm:gap-x-7 md:mb-8">
      <span className="hero-heading text-[clamp(3.5rem,8vw,120px)] font-black leading-none">{project.number}</span>
      <span className="pb-2 text-xs font-medium uppercase tracking-[.2em] text-[#D7E2EA]/60 sm:text-sm">{project.category}</span>
      <h3 className="col-span-2 text-[clamp(1.45rem,3vw,3rem)] font-medium uppercase leading-none sm:col-span-1 sm:pb-2">{project.name}</h3>
      <div className="hidden pb-1 md:block"><LiveProjectButton href={project.url} /></div>
      <p className="col-span-2 max-w-4xl text-sm font-light leading-relaxed text-[#D7E2EA]/65 sm:col-start-2 sm:col-span-3 sm:text-base">{project.description}</p>
    </div>
    <div className="grid grid-cols-[40%_60%] gap-3">
      <div className="flex flex-col gap-3"><img src={project.images[0]} alt={`${project.name}项目截图 1`} className="h-[clamp(130px,16vw,230px)] w-full rounded-[28px] object-cover object-top sm:rounded-[40px] md:rounded-[60px]" /><img src={project.images[1]} alt={`${project.name}项目截图 2`} className="h-[clamp(160px,22vw,340px)] w-full rounded-[28px] object-cover object-top sm:rounded-[40px] md:rounded-[60px]" /></div>
      <img src={project.images[2]} alt={`${project.name}项目截图 3`} className="h-full min-h-[303px] w-full rounded-[28px] object-cover object-top sm:rounded-[40px] md:rounded-[60px]" />
    </div>
  </motion.article></div>
}

export function ProjectsSection() {
  return <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
    <FadeIn><h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">项目作品</h2></FadeIn>
    <div className="mx-auto max-w-[1500px]">{projects.map((project,index)=><ProjectCard key={project.number} project={project} index={index} />)}</div>
    <footer id="contact" className="flex min-h-[45vh] flex-col items-center justify-center gap-8 text-center"><p className="text-sm uppercase tracking-[.22em] text-[#D7E2EA]/60">有想实现的项目吗？</p><h2 className="hero-heading text-[clamp(3rem,9vw,120px)] font-black uppercase leading-none">一起创造</h2></footer>
  </section>
}
