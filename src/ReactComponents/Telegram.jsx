import React from "react";
import Button from "./Button";

function Telegram() {
    return (
        <div className="motion-safe:animate-fadeIn3s  flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-8 justify-center rounded-3xl shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-violet-600 text-black shadow-sm shadow-green-400 md:mx-6 md:h-[300px]">
            <p className="mb-4 ml-0 mr-0 text-2xl font-semibold text-center px-[30px]  ">ISE-Study Resources
                <span className="font-normal text-sm block">Telegram</span></p>
            <a href="https://t.me/ise_nmamit" target="_blank">
                <Button buttonName="Click Here"/>
            </a>


        </div>);
}

export default Telegram;