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

import { MoreHorizontal, Star, Pencil, Menu, Ellipsis, GalleryHorizontalEnd } from "lucide-react"
import { Separator } from "@/components/ui/separator"


function renderItem(title, href) {
  return (
    <Button variant="ghost" key={title}>
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem className="text-red-500">
              Se déconnecter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical"/>

       <Button variant="default" size="sm">
          <GalleryHorizontalEnd size={14} /> Nouveau serveur
        </Button>
      </div>

    </div>
  )
}