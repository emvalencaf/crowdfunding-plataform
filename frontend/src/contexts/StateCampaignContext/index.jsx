
// react tools
import {
    useContext,
    createContext,
} from 'react';

// thirdweb hooks
import {
    useAddress,
    useContract,
    useMetamask,
    useContractWrite,
} from '@thirdweb-dev/react';

// ethers
import {
    ethers
} from 'ethers';

// toast
import { toast } from 'react-hot-toast';
import { usePublishCampaign } from '../../hooks';

// context
export const StateCampaignContext = createContext();

// provider
const StateCampaignContextProvider = ({ children }) => {
    
    // contract
    const {
        contract
    } = useContract('0x4D10Ca8989c16513e81eF0c1892Af2842759E1BD');
    
    // owner wallet address
    const address = useAddress();
    console.log(address);


    const connect = useMetamask();

    const publishCampaign = usePublishCampaign(contract);

    return (
        <StateCampaignContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
                connect,
            }}
        >
            {children}
        </StateCampaignContext.Provider>
    )
}

export default StateCampaignContextProvider;