"use client";
import EventStatusDashboard from "@/components/event/EventStatusDashboard";
import React, { useEffect, useState } from "react";
import { fetchUserEvents } from "@/services/api/user";
import Event from "@/models/event";
import { Spinner } from "@nextui-org/spinner";
import { useSession } from "next-auth/react";

export default function RegisteredEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const session = useSession();

    useEffect(() => {
        async function fetchEvents() {
            if (session.data == null) {
                return;
            }

            try {
                const events = await fetchUserEvents(
                    session.data.user.access_token
                );
                setEvents(events);
            } catch (error) {
                console.log(error);
            }
        }

        fetchEvents().then(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Spinner className="text-sky-500">
                    <span className="text-sky-500">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg:transparent">
                    <tr className="text-center font-[500] text-[#353535]">
                        <th scope="col" className="px-4 py-3.5 ">
                            Events Name
                        </th>
                        <th scope="col" className="px-12 py-3.5">
                            Organization
                        </th>
                        <th scope="col" className="py-3.5">
                            Status
                        </th>
                        <th scope="col" className="py-3.5">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {events.map((event) => (
                        <tr key={event.id} className="text-center">
                            <td className="whitespace-nowrap px-4 py-4">
                                <div className="text-sm font-[400] text-[#353535]">
                                    {event.title}
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm font-[400] text-[#353535]">
                                    {event.organization}
                                </div>
                            </td>
                            <td className="whitespace-nowrap py-4">
                                <EventStatusDashboard status={event.status} />
                            </td>
                            <td className="whitespace-nowrap py-4">
                                <button className="text-[#FF6F22] hover:underline">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
