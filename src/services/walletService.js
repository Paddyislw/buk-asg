import { store } from "../store/store";
import { ethers } from "ethers";
import { ETHERIUM_BLOCKCHAIN, POLYGON_BLOCKCHAIN } from "../utils/Constants";

/**
 * Function to fetch balance for a given provider and network.
 * @param {object} provider - The provider object for interacting with the blockchain.
 * @param {string} networkName - The name of the blockchain network (e.g., Ethereum, Polygon).
 */
const fetchBalance = async (provider, networkName) => {
  try {
    store.isLoading = true;

    // Request accounts from MetaMask
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const network = await provider.getNetwork();

    // Check if accounts are available
    if (accounts.length > 0) {
      const address = accounts[0];
      const balance = await provider.getBalance(address);
      const formattedBalance = ethers.utils.formatEther(balance, "ether");

      // Update store with account address, balance, and chain ID
      store.updateAccountAddress(address);
      store.updateCurrentBlockChainBalance(formattedBalance);
      store.updateCurrentChainID(network.chainId);
    } else {
      store.isError = {
        status: true,
        msg: `No ${networkName} accounts available.`,
      };
      console.error(`No ${networkName} accounts available.`);
    }
  } catch (error) {
    store.isError = {
      status: true,
      msg: `Error fetching ${networkName} balance`,
    };
    console.error(`Error fetching ${networkName} balance:`, error);
  } finally {
    store.isLoading = false;
  }
};

/**
 * Function to get Ethereum balance.
 */
export const getEthBalance = async () => {
  const providerEthereum = new ethers.providers.Web3Provider(window.ethereum);
  await fetchBalance(providerEthereum, "Ethereum");
};

/**
 * Function to get Polygon (Matic) balance.
 */
export const getMaticBalance = async () => {
  const providerPolygon = new ethers.providers.JsonRpcProvider(
    "https://polygon-rpc.com"
  );
  await fetchBalance(providerPolygon, "Polygon");
};

/**
 * The function getCurrentNetworkId asynchronously retrieves the current network ID using the Ethereum
 * API and updates the current blockchain based on the response.
 */
export const getCurrentNetworkId = async () => {
  try {
    const response = await window.ethereum.request({ method: "eth_chainId" });
    if (response === "0x1") {
      store.updateCurrentBlockChain(ETHERIUM_BLOCKCHAIN);
    } else {
      store.updateCurrentBlockChain(POLYGON_BLOCKCHAIN);
    }
    console.log(response)
  } catch (error) {
    console.error("Some error occured while getting current network");
  }
};
