// hooks
import { useState } from "react";

// React router dom tools
import { Link, useNavigate } from 'react-router-dom';

// custom components
import {
    CustomIcon,
} from '../';

// assets
import { logo, sun } from '../../assets';
import { navlinks } from "../../constants";


const Sidebar = () => {

    // navigation controller
    const navigate = useNavigate();

    // 
    const [isActive, setIsActive] = useState('dashbord');


    return (
        <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
            <Link to="/">
                <CustomIcon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
            </Link>

            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {navlinks.map((link) => (
                        <CustomIcon
                            key={link.name}
                            {...link}
                            isActive={isActive}
                            handleClick={() => {
                                if (!link.disabled) {
                                    setIsActive(link.name);
                                    navigate(link.link);
                                }
                            }}
                        />
                    ))}
                </div>

                <CustomIcon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
            </div>
        </div>
    );
}

export default Sidebar;