
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

// context
export const StateCampaignContext = createContext();

// provider
const StateCampaignContextProvider = ({ children }) => {
    
    // the crowdfunding contract 
    const {
        contract,
    } = useContract('0xD18ECD6B84856fABa1E30C713bd9dadAc18972dc');

    // owner wallet address
    const address = useAddress();

    const connect = useMetamask();

    const disconnect = useDisconnect();

    const publishCampaign = usePublishCampaign(contract);

    const getCampaigns = useGetCampaigns(contract);

    const getUserCampaigns = useGetUserCampaigns(address, contract);

    const donate = useDonate(contract);

    const getDonations = useGetDonations(contract);

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