import { ethers } from "ethers";

const useDonate = (contract) => {
    const donate = async (pId, amount) => {
        const data = await contractType.call('donateToCampaign', pId, {
            value: ethers.utils.parseEther(amount)
        });

        return data;
    }

    return donate;
}

export default useDonate;