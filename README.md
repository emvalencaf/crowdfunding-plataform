# Crowdfunding Platform

In this project, a web application platform was developed for people to create crowdfunding campaigns or support these campaigns using the Ethereum blockchain network. The application was built using [Thirdweb](thirdweb.com), React.js, and Solidity.

## FEATURES

- [x] Connect/Disconnect your wallet using MetaMask.
- [x] Fetch all campaigns registered on this blockchain contract.
- [x] Fetch all of your campaigns.
- [x] Search campaigns by name.

## HOW TO RUN THIS WEBAPP LOCALLY

1. Firstly, navigate to the `backend` folder and open a terminal there. Then, type: `npm install` to install all the dependencies.
2. Once you have installed all the dependencies, create a file named `.env` in the `backend` folder and set your wallet's address as the value for the `PRIVATE_KEY` variable:
```
PRIVATE_KEY=

```
3. Now, run the command `npm run deploy` in the terminal and follow the steps to finish the deployment.
4. After deploying the contract, you will obtain the contract's address. Go to the file `/frontend/src/contexts/StateCampaignContext/index.jsx` and update the following line with your contract's address:
```
    // the crowdfunding contract 
    const {
        contract,
    } = useContract('');// INSERT HERE YOUR CONTRACT'S ADDRESS

```
5. Finally, open a terminal in the `frontend` folder and run the command `npm run dev` or `npm run start` to start the application.

## [DEMO](https://648f9d99cc1ae57d0f16a257--shiny-mandazi-069d44.netlify.app/)