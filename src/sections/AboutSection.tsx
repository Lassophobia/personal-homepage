import { AnimatedText } from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'
import { FadeIn } from '../components/FadeIn'

const decor = [
  ['https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png','top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',.1,-80],
  ['https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png','bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',.25,-80],
  ['https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png','top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',.15,80],
  ['https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png','bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',.3,80],
] as const

export function AboutSection() {
  return <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
    {decor.map(([src, cls, delay, x]) => <FadeIn key={src} delay={delay} duration={.9} x={x} y={0} className={`pointer-events-none absolute ${cls}`}><img src={src} alt="" className="w-full object-contain" /></FadeIn>)}
    <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
      <FadeIn y={40}><h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">关于我</h2></FadeIn>
      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <AnimatedText text={"我是罔生，目前生活在杭州。专注于产品设计与前端开发，喜欢在理性逻辑和感性表达之间找平衡。\n\n过去几年，我参与过从 0 到 1 的产品构建，也独立做过一些不太正经但挺有意思的小东西。如果你有好的创意但苦于编程技术导致创意无法落地的话，欢迎随时和我联系，我会尽量将你的创意落地，期待我们的相遇。"} />
        <ContactButton />
      </div>
    </div>
  </section>
}
