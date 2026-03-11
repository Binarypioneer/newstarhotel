import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/prisma"
import { CheckoutForm } from "@/components/checkout-form"
import { calculateNights } from "@/lib/availability"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Checkout - O New Star Hotel",
}

interface BookingPageProps {
    searchParams: {
        roomId?: string
        checkIn?: string
        checkOut?: string
        adults?: string
        children?: string
    }
}

export default async function BookingPage({ searchParams }: { searchParams: Promise<BookingPageProps['searchParams']> }) {
    const params = await searchParams
    const { userId } = await auth()
    const user = await currentUser()

    // 1. Authentication Check
    if (!userId || !user) {
        const callbackUrl = encodeURIComponent(`/book?roomId=${params.roomId}&checkIn=${params.checkIn}&checkOut=${params.checkOut}&adults=${params.adults}&children=${params.children}`)
        redirect(`/auth/login?callbackUrl=${callbackUrl}`)
    }

    // 2. Validate Params
    if (!params.roomId || !params.checkIn || !params.checkOut) {
        redirect("/rooms") // Invalid request, send back to search
    }

    const roomId = parseInt(params.roomId)
    const isDateValid = !isNaN(new Date(params.checkIn).getTime()) && !isNaN(new Date(params.checkOut).getTime())

    if (isNaN(roomId) || !isDateValid) {
        redirect("/rooms")
    }

    // 3. Fetch Room
    const room = await db.room.findUnique({
        where: { id: roomId },
        include: { floor: true }
    })

    if (!room) {
        redirect("/rooms")
    }

    // 4. Calculations
    const nights = calculateNights(params.checkIn, params.checkOut)
    if (nights < 1) {
        redirect("/rooms")
    }

    const totalAmount = Number(room.price_per_night) * nights

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">Secure Checkout</h1>

                <CheckoutForm
                    room={{
                        ...room,
                        price_per_night: Number(room.price_per_night),
                        floor_id: room.floor_id ?? 0,
                        image_url: room.image_url ?? undefined
                    }}
                    checkIn={params.checkIn}
                    checkOut={params.checkOut}
                    nights={nights}
                    totalAmount={totalAmount}
                    adults={Number(params.adults || 1)}
                    children={Number(params.children || 0)}
                    user={{
                        id: user.id,
                        name: `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`,
                        email: user.emailAddresses[0].emailAddress,
                        image: user.imageUrl
                    }}
                />
            </div>
        </div>
    )
}
