"use client"

import { UserButton as ClerkUserButton, SignInButton, Show, ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { CalendarDays, Loader2 } from "lucide-react"

export const UserButton = () => {
    return (
        <div className="flex items-center gap-x-2">
            <ClerkLoading>
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
                <Show when="signed-out">
                    <SignInButton mode="modal">
                        <Button variant="ghost" className="font-semibold text-gray-700 hover:text-[#2671D9]">
                            Sign In
                        </Button>
                    </SignInButton>
                </Show>
                <Show when="signed-in">
                    <ClerkUserButton>
                        <ClerkUserButton.MenuItems>
                            <ClerkUserButton.Link 
                                label="My Bookings" 
                                href="/my-bookings" 
                                labelIcon={<CalendarDays className="h-4 w-4" />} 
                            />
                        </ClerkUserButton.MenuItems>
                    </ClerkUserButton>
                </Show>
            </ClerkLoaded>
        </div>
    )
}
