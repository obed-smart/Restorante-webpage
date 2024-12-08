
function Foooter() {
    return (
        <div className="mt-20 py-5 flex justify-between items-center">
            <div className="flex items-center gap-14">
                <h1 className="font-semibold text-2xl">
                    <span className="bg-tetiary text-white px-[4px] rounded-md mr-[3px]">
                        F
                    </span>
                    OODI
                </h1>
                <p className="text-[17px]">
                    Copyright &copy; {new Date().getFullYear()} Dscode | All rights reserved
                </p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <figure className="bg-2ttx p-2 w-10 h-10 flex items-center justify-center rounded-full"><img src="\🦆 icon _facebook_.png" alt="_facebook_" className=""/></figure>
                <figure className="bg-footer-bg p-2 w-10 h-10 flex items-center justify-center rounded-full"><img src="\🦆 icon _instagram_.png" alt="_instagram_" /></figure>
                <figure className="bg-footer-bg p-2 w-10 h-10 flex items-center justify-center rounded-full"><img src="\🦆 icon _twitter_.png" alt="_twitter_" /></figure>
                <figure className="bg-footer-bg p-2 w-10 h-10 flex items-center justify-center rounded-full"><img src="\🦆 icon _youtube_.png" alt="_youtube_" /></figure>
            </div>
        </div>
    )
}

export default Foooter
