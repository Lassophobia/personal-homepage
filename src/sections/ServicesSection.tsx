import { FadeIn } from '../components/FadeIn'

const services = [
  ['01','网页设计','现代网页的视觉设计与前端实现，兼顾页面布局、交互体验和多端适配。'],
  ['02','服务器维护','服务器部署、环境配置与日常运维，保障应用稳定、安全地持续运行。'],
  ['03','智能体调试','探索 AI 智能体的工作流程与调试方法，持续优化提示词、工具调用和任务执行效果。'],
  ['04','小程序开发','小程序的设计与开发，将创意快速转化为轻量、便捷且实用的移动端产品。'],
  ['05','AI 前沿探索','关注人工智能领域的新模型、新工具与新应用，尝试把前沿能力转化为真实可用的产品。'],
]

export function ServicesSection() {
  return <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
    <FadeIn><h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">学习方向</h2></FadeIn>
    <div className="mx-auto max-w-5xl border-t border-[rgba(12,12,12,.15)]">
      {services.map(([number,name,description], i) => <FadeIn key={number} delay={i*.1} className="grid grid-cols-[minmax(82px,25%)_1fr] gap-5 border-b border-[rgba(12,12,12,.15)] py-8 sm:grid-cols-[minmax(130px,27%)_1fr] sm:gap-8 sm:py-10 md:py-12">
        <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">{number}</span>
        <div className="flex flex-col justify-center gap-3 sm:gap-5"><h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">{name}</h3><p className="max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">{description}</p></div>
      </FadeIn>)}
    </div>
  </section>
}
