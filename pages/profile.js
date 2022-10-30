import Client from "../lib/client";
import { useState } from "react";

export const getServerSideProps = async (context) => {

    Client.setAccessToken(context.req.headers.cookie.slice(13));
    const user = await Client.getMe();

    return {
        props: { user }
    }

}

const Profile = ({ user }) => {

    const [userInfo, setUserInfo] = useState(user);
    const [rating, setRating] = useState(50);
    console.log(userInfo.body)

    return (

        <div className="h-screen w-full flex flex-col items-center justify-center bg-black">
            <div className="flex">
                <img className="h-52 w-52 rounded-full" src={userInfo.body.images[0].url} />
                <div className="h-52 flex items-center ml-20">
                    <div className="flex flex-col">
                        <p className="text-2xl font-semibold text-white">{userInfo.body.display_name}</p>
                        <p className="text-[#474747]">{userInfo.body.id}</p>
                    </div>
                    <div className="bg-[#1e1d1d] rounded-full h-10 px-8 w-auto flex items-center ml-20">
                        <p className="font-semibold text-white">Edit Profile</p>
                    </div>
                    <div className="bg-[#1e1d1d] h-15 h-10 w-10 rounded-full ml-2">
                    </div>
                </div>
            </div>
            <div className="space-y-4">

                <div className="w-96 mt-10 font-semibold text-xl text-white">
                    <p>Music Rating</p>
                </div>
                <div className="w-96 h-10 bg-[#1e1d1d] rounded-full relative">
                    <div className={`absolute max-w-[100%] h-10 bg-[#d73842] rounded-full z-10 w-[${rating}%]`}></div>
                    <div className="flex justify-end items-center h-10">
                        <p className="text-white px-5 font-semibold z-20">{rating}</p>
                    </div>
                </div>
                <div className="w-96 font-semibold">
                    <p>According to friends*</p>
                    <p className="text-[#767676] text-sm">Calculated when friends rate your songs.</p>
                </div>

            </div>
        </div>

    );

};

export default Profile;