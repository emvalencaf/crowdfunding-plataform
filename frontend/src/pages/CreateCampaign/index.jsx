// components
import { useNavigate } from "react-router-dom";
import { useStateCampaign } from "../../hooks";
import CreateCampaignContent from "./components/CreateCampaignContent";
import { toast } from "react-hot-toast";

const CreateCampaign = () => {
    // navigate controller
    const navigate = useNavigate();

    // states campaign
    const {
        address,
    } = useStateCampaign();

    if (!address) {
        toast.error('you must be connected to publish a campaign');
        return navigate('/');
    };

    return (
        <div
            className="
            bg-[#1c1c24]
            flex
            justify-center
            items-center
            flex-col
            rounded-[10px]
            sm:p-10
            p-4
            "
        >
            <CreateCampaignContent />
        </div>
    );
}

export default CreateCampaign;