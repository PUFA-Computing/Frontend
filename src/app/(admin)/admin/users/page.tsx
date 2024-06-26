"use client";
import Title from "@/components/admin/Title";
import UserTable from "@/components/admin/UserTable";
import { GetUser } from "@/services/api/user";
import React from "react";
import User from "@/models/user";
import EditUserModal from "@/app/(admin)/admin/users/_components/EditUserModal";
import ViewVerificationModal from "@/app/(admin)/admin/users/_components/ViewStudentVerificationModal";
import { useSession } from "next-auth/react";

export default function UsersList() {
	const session = useSession();
    const [users, setUsers] = React.useState<User[]>([]);
    const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
    const [verificationInfo, setVerificationInfo] = React.useState<any | null>(
        null
    );

    React.useEffect(() => {
		 async function fetchUsers() {
			  if(session.data == null) {
				 return;
			  }
            try {
                const users = await GetUser(session.data.user.access_token);
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
        }

        fetchUsers().then((r) => r);
    }, [session.data]);

    const openModal = (user: User) => {
        setSelectedUser(user);
    };

    const closeModal = () => {
        setSelectedUser(null);
    };

    const openVerificationModal = (info: any) => {
        setVerificationInfo(info);
    };

    const closeVerificationModal = () => {
        setVerificationInfo(null);
    };

    return (
        <div>
            <UserTable
                users={users}
                onEditClick={openModal}
                onViewVerification={openVerificationModal}
            />
            {selectedUser && (
                <EditUserModal user={selectedUser} onClose={closeModal} />
            )}

            {verificationInfo && (
                <ViewVerificationModal
                    verificationInfo={verificationInfo}
                    onClose={closeVerificationModal}
                />
            )}
        </div>
    );
}
