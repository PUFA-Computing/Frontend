"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Seperator from "@/components/Seperator";
import { Spinner } from "@/components/ui/Spinner";
import {
    GetUserProfile,
    UpdateUserProfile,
} from "@/services/api/user";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import User from "@/models/user";

export default function AcademicInformation() {
    const session = useSession();

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User>();
    const [major, setMajor] = useState<string>("");
    const [batch, setBatch] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            if (session.data == null) {
                return;
            }
            try {
                const userData = await GetUserProfile(
                    session.data.user.id,
                    session.data.user.access_token
                );
                setUserData(userData);
                setMajor(userData.major);
                setBatch(userData.year);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData().then((r) => r);
    }, [session.data]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Spinner className="text-sky-500">
                    <span className="text-sky-500">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <section>
            <div className="grid grid-cols-1 gap-5 p-4 lg:grid-cols-2">
                <div>
                    <div className="rounded-lg border border-[#CBCBCB] bg-white shadow-lg">
                        <div className="mt-2 px-6 py-3">
                            <p className="text-[16px] font-[500]">
                                Academic Information
                            </p>
                        </div>
                        <Seperator className="border-gray-100" />
                        <div className="mt-2 space-y-6 px-6  pb-6">
                            <div>
                                <Input
                                    htmlFor="major"
                                    label="Major"
                                    type="text"
                                    value={major}
                                    placeholder={userData?.major}
                                    onChange={(e) => setMajor(e.target.value)}
                                />
                            </div>
                            <div>
                                <Input
                                    htmlFor="batch"
                                    label="Batch"
                                    type="text"
                                    value={batch}
                                    placeholder={userData?.year}
                                    onChange={(e) => setBatch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="rounded-lg border border-[#CBCBCB] bg-white shadow-lg"
                        style={{ height: "fit-content" }}
                    >
                        <div className="mt-2 px-6 py-3">
                            <p className="text-[16px] font-[500]">
                                Verify Your Student ID
                            </p>
                        </div>
                        <Seperator className="border-gray-100" />
                        <div className="px-6 py-2">
                            <div className="text-[#353535]">
                                <label
                                    htmlFor="dropzone-file"
                                    className="mx-auto mt-2 flex w-full max-w-xl cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 p-6 hover:border-gray-400 dark:border-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-8 w-8 text-gray-500 dark:text-gray-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                    </svg>

                                    <h2 className="mt-1 font-medium tracking-wide">
                                        Verify Your Student ID
                                    </h2>

                                    <p className="mt-2 text-xs tracking-wide ">
                                        Upload or drag & drop your file PDF,
                                        PNG, or JPG.{" "}
                                    </p>

                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        // onChange={handleProfilePictureChange}
                                    />
                                </label>
                            </div>
                            <div className="mt-6 flex justify-end space-x-2">
                                <Button
                                    // onClick={handleProfilePictureUpload}
                                    className="border-[#02ABF3] bg-[#02ABF3] px-8 py-2 text-white hover:bg-white hover:text-[#02ABF3]"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
