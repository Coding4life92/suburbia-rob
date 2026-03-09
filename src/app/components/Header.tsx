import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

export async function Header() {
    const client = createClient()
    const settings = await client.getSingle('settings');

    return (
        <header className="header absolute left-0 right-0 top-0 z-50 px-4 py-6 md:px-6 md:py-8">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-y-6 md:gap-y-0 grid-cols-[1fr_auto_1fr]">

                {/* Logo */}
                <Link href="/" className="justify-self-start">
                    <Logo className="text-brand-purple h-[clamp(3rem,6vw,5rem)]" />
                </Link>

                {/* Nav */}
                <nav
                    aria-label="Main"
                    className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
                >
                    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-8">
                        {settings.data.navigation.map((item) => (
                            <li key={item.link.text}>
                                <PrismicNextLink
                                    field={item.link}
                                    className="text-base md:text-[clamp(1.125rem,2vw,1.25rem)]"
                                />
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Cart */}
                <div className="justify-self-end">
                    <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
                        <span className="md:hidden">1</span>
                        <span className="hidden md:inline">Cart (1)</span>
                    </ButtonLink>
                </div>

            </div>
        </header>
    )
}