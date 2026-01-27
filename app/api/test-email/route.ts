
import { NextResponse } from "next/server";
import { sendOwnerBookingNotification } from "@/lib/mail";

export async function GET() {
    try {
        await sendOwnerBookingNotification({
            bookingId: "TEST-123456",
            guestName: "Test User",
            guestEmail: "test@example.com",
            guestPhone: "+91 99999 99999",
            roomName: "Deluxe Test Suite",
            checkIn: "2024-01-01",
            checkOut: "2024-01-05",
            totalAmount: 5000,
            adults: 2,
            children: 1,
            numExtraBeds: 0
        });
        return NextResponse.json({ success: true, message: "Test email sent" });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
