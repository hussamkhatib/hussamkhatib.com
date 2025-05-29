'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center gap-4">
      <Image className='rounded-full' src="/hero.jpeg" alt="Abid Kamal" width={100} height={100} />


      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Abid Kamal
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Muslim Social Media Coach
        </TextEffect>
      </div>
    </header>
  )
}
