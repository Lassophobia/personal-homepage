import { ContactButton } from '../components/Buttons'
import { FadeIn } from '../components/FadeIn'
import { Magnet } from '../components/Magnet'

const portrait = `${import.meta.env.BASE_URL}astronaut-hero.png`

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[620px] flex-col overflow-x-clip bg-[#0C0C0C] px-6 md:px-10">
      <div className="mt-10 overflow-visible sm:mt-9 md:mt-8">
        <FadeIn delay={.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[clamp(2.75rem,11.5vw,11rem)] font-black uppercase leading-[.92] tracking-tight">你好，我是罔生</h1>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={.6} y={30}>
          <Magnet padding={150} strength={3} className="pointer-events-auto">
            <img src={portrait} alt="罔生的人物肖像" className="w-full select-none object-contain [filter:drop-shadow(0_0_10px_rgba(170,128,255,.24))_drop-shadow(0_0_26px_rgba(118,33,176,.16))]" draggable={false} />
          </Magnet>
        </FadeIn>
      </div>

      <FadeIn delay={.35} y={20} className="absolute bottom-[18%] left-6 z-20 sm:bottom-[20%] md:bottom-[22%] md:left-10">
        <p className="text-[clamp(.9rem,1.45vw,1.35rem)] font-light leading-[1.55] tracking-wide text-[#D7E2EA]">
          <span className="block whitespace-nowrap">我是一名全栈独立开发者</span>
          <span className="block whitespace-nowrap">我把复杂的问题，做成简单、好用、</span>
          <span className="block whitespace-nowrap">还有一点点酷的数字产品。</span>
          <span className="mt-3 block whitespace-nowrap">可以去我的仓库看看</span>
          <span className="block whitespace-nowrap">我做了一些小东西，希望你喜欢</span>
        </p>
      </FadeIn>

      <FadeIn delay={.5} y={20} className="absolute bottom-7 right-6 z-20 sm:bottom-8 md:bottom-10 md:right-10"><ContactButton /></FadeIn>
    </section>
  )
}


