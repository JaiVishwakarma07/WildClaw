'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center">
            <Image
                alt="logo"
                className="hidden md:block cursor-pointer"
                height="50"
                width="50"
                src="/images/logo.png"
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-bold text-sm">WildClaw</span>
        </div>
    )
}
export default Logo