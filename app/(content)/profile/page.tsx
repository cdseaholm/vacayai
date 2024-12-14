import ProfilePage from "@/components/pageSpecifics/profile/profilePage";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export async function generateMetadata(): Promise<Metadata> {
    const session = await getServerSession();
    const user = session ? session.user : '';
    const userName = user ? user.name : ''

    return {
        title: `Profile Page for ${userName}`,
        description: `A Profile Page for ${userName} to manage their personal information and Vacation interests.`,
    };
}

export default async function Page() {
    const session = await getServerSession();

    return (
        <div style={{minHeight: '100vh', width: '100vw'}}>
            <ProfilePage session={session} />
        </div>
    );
}