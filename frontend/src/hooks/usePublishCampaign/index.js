// hooks
import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { toast } from "react-hot-toast";


const usePublishCampaign = (contract) => {

    // get create campaign function
    const {
        mutateAsync: createCampaign
    } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();

    const publishCampaign = async (formFields) => {
        try {
            
            const data = await createCampaign([
                address, // campaign wallet
                formFields.title, // campaign title
                formFields.description, // campaign description
                formFields.target, // campaign endgoal
                new Date(formFields.deadline).getTime(), // campaign deadline
                formFields.image, // campaign cover image url
            ]);
    
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

    return publishCampaign;
};

export default usePublishCampaign;