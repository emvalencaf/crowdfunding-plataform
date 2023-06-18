
// react tools
import {
    useContext,
    createContext,
} from 'react';

// custom hooks
import { useDonate, useGetCampaigns, useGetUserCampaigns, useGetDonations, usePublishCampaign } from '../../hooks';

// thirdweb hooks
import {
    useAddress,
    useContract,
    useMetamask,
    useDisconnect,
} from '@thirdweb-dev/react';

// ethers
import {
    ethers
} from 'ethers';

// toast
import { toast } from 'react-hot-toast';

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

    const connect = useMetamask();

    const disconnect = useDisconnect();

    const publishCampaign = usePublishCampaign(contract);

    const getCampaigns = useGetCampaigns(contract);

    const getUserCampaigns = useGetUserCampaigns(address, contract);

    const donate = useDonate();

    const getDonations = useGetDonations();

    return (
        <StateCampaignContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
                getCampaigns,
                connect,
                getUserCampaigns,
                donate,
                getDonations,
                disconnect,
            }}
        >
            {children}
        </StateCampaignContext.Provider>
    )
}

export default StateCampaignContextProvider;