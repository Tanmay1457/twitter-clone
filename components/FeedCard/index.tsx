import React from 'react'
import Image from 'next/image'
import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineFileUpload } from 'react-icons/md';


const FeedCard: React.FC = () => {
    return(
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/123176100?v=4" alt="user-image" height={50} width={50}/>

            </div>
            <div className="col-span-11">
                 <h5>Tanmay Nigade</h5>
                 <p>You can customize the styling further using CSS classes to match your design preferences.</p>
                 <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                    <div>
                    <BiMessageRounded />
                    </div> 
                    <div>
                    <FaRetweet />
                    </div> 
                    <div>
                    <CiHeart />
                    </div>
                    <div>
                    <MdOutlineFileUpload />
                    </div>
                 </div>
            
            </div>

        </div>
    </div>
    );
};
export default FeedCard; 