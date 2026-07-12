import { ArrowUpRight } from 'lucide-react'

export function ContactButton() {
  return <a href="mailto:396469047@qq.com" className="contact-button inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-[.18em] text-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">联系我 <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} /></a>
}

export function LiveProjectButton({ href }: { href: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-[.16em] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base">查看项目 <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} /></a>
}

