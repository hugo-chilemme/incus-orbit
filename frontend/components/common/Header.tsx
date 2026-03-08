"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { useRouter } from "next/navigation";


import { MoreHorizontal, Star, Pencil, Menu, Ellipsis, GalleryHorizontalEnd, LoaderCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"


function renderItem(title, href) {
  const router = useRouter();
  return (
    <Button variant="ghost" key={title} onClick={() => router.push(href)}>
      {title}
    </Button>
  )
}


export default function ProjectHeader() {

  const navbars = [
    { title: "Containers", href: "/" },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2.5 max-w-7xl mx-auto w-full">
      
      {/* Left */}
      <div className="flex items-center text-black dark:text-white ">
        
        {navbars.map((item) => renderItem(item.title, item.href))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* <div className="h-7 rounded-md hover:bg-neutral-900 flex items-center justify-center relative gap-4 text-xs">
          <div className="relative">
            <LoaderCircle size={32} className="animate-spin text-indigo-500/75" />
            <span className="absolute top-0 w-full h-full flex items-center justify-center text-xs">
              2
            </span>
          </div>
        </div> */}

       {/* <Button variant="default" size="sm">
          <GalleryHorizontalEnd size={14} /> Nouveau serveur
        </Button> */}
      </div>

    </div>
  )
}