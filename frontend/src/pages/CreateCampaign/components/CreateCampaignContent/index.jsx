// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// custom hooks
import { useStateCampaign } from "../../../../hooks";

// custom components
import { FormField, CustomButton } from "../../../../components";

// assets
import { money } from "../../../../assets";

// ethers
import { ethers } from "ethers";

// utils
import { checkImageUrl } from '../../../../utils';

// toast
import { toast } from "react-hot-toast";

const CreateCampaignContent = () => {
    // navigator controller
    const navigate = useNavigate();

    // form states
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: '',
    });


    // contexts campaign states
    const {
        createCampaign
    } = useStateCampaign();

    // handler of the change events
    const handleFormFieldChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    // handler submit events
    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            // validation
            if (!form.name) throw new Error('must inform an author name');
            
            if (!form.title) throw new Error('must inform a title for your campaign');
            
            if (!form.description) throw new Error('must inform a campaign description');
            
            if (!form.target) throw new Error('must set a end goal for your campaign');
            
            if (!form.deadline) throw new Error('must inform a end date for your campaign');

            if (!form.image) throw new Error('must fill a cover image url for your campaign cover');

            // check if image url exists
            checkImageUrl(form.image, async (exists) => {
                if (!exists) {
                    setForm({
                        ...form,
                        image: '',
                    });
                    toast.error('must provide a valid image URL');
                }

                setIsLoading(true);
                
                await createCampaign({
                    ...form,
                    target: ethers.utils.parseUnits(form.target, 18)
                });

                setIsLoading(false);
                toast.success('campaign successfully created');
                navigate('/');
            });

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

    }

    return (
        <>
            {
                isLoading && 'Loader...'

            }
            <div
                className="
                flex
                justify-center
                items-center
                p-[16px]
                sm:min-w-[380px]
                bg-[#3a4a43]
                rounded-[10px]

                "
            >
                <h1
                    className="
                    font-epilogue
                    font-bold
                    sm:Text-[25px]
                    text-[18px]
                    leading-[38px]
                    text-white

                    "
                >
                    Start a Campaign
                </h1>
            </div>
            <form
                onSubmit={handleSubmit}
                className="
                w-full
                mt-[65px]
                flex
                flex-col
                gap-[30px]
                "
            >
                <div
                    className="
                    flex
                    flex-wrap
                    gap-[40px]
                    "
                >
                    <FormField
                        labelName="Your Name *"
                        placeholder="John Doe"
                        type="text"
                        name="name"
                        value={form.name}
                        handleChange={handleFormFieldChange}
                    />
                    <FormField
                        labelName="Campaign Title *"
                        placeholder="A dream project"
                        type="text"
                        name="title"
                        value={form.title}
                        handleChange={handleFormFieldChange}
                    />
                </div>
                <FormField
                    labelName="Sell your idea *"
                    placeholder="Write your dream project in a way that resonates with other people's dreams"
                    name="description"
                    isTextArea
                    value={form.description}
                    handleChange={handleFormFieldChange}
                />
                <div
                    className="
                    w-full
                    flex
                    justify-start
                    items-center
                    p-4
                    bg-[#8c6dfd]
                    h-[120px]
                    rounded-[10px]
                    "
                >
                    <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
                    <h4
                        className="
                        font-epilogue
                        font-bold
                        text-[25px]
                        text-white
                        ml-[20px]
                        "
                    >
                        You will get 100% of the raised amount
                    </h4>
                </div>
                <div
                    className="
                    flex
                    flex-wrap
                    gap-[40px]
                    "
                >
                    <FormField
                        labelName="Your goal *"
                        placeholder="ETH 0.50"
                        type="number"
                        name="target"
                        value={form.target}
                        handleChange={handleFormFieldChange}
                    />
                    <FormField
                        labelName="End Date *"
                        placeholder="A dream project"
                        type="date"
                        name="deadline"
                        value={form.deadline}
                        handleChange={handleFormFieldChange}
                    />
                </div>
                <FormField
                    labelName="Fill the image's url of your cover's project"
                    placeholder="ex: http://www.mypictures.com/my-dream-project.jpeg"
                    name="image"
                    type="url"
                    value={form.image}
                    handleChange={handleFormFieldChange}
                />
                <div
                    className="
                    flex
                    justify-center
                    items-center
                    mt-[40px]
                    "
                >
                    <CustomButton
                        btnType="submit"
                        title="Submit new campaign"
                        styles="bg-[#1dc071]"
                    />
                </div>
            </form>
        </>
    );
};

export default CreateCampaignContent;