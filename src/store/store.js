import { reactive } from "vue";
import { ETHERIUM_BLOCKCHAIN, POLYGON_BLOCKCHAIN } from "../utils/Constants";

//Creating a reactive store object
export const store = reactive({
  // Initial state properties
  currentBlockChain: "",
  accountAddress: undefined,
  currentBlockChainBalance: undefined,
  currentChanId: undefined,
  isError: { status: false, msg: "" },
  isLoading: false,
  isSucces: false,

  // Methods
  toggleCurrentBlockChain() {
    if (this.currentBlockChain === ETHERIUM_BLOCKCHAIN) {
      this.currentBlockChain = POLYGON_BLOCKCHAIN;
      this.currentChanId = "";
      this.accountAddress = "";
      this.currentBlockChainBalance = "";
    } else {
      this.currentBlockChain = ETHERIUM_BLOCKCHAIN;
      this.currentChanId = "";
      this.accountAddress = "";
      this.currentBlockChainBalance = "";
    }
  },
  updateCurrentBlockChain(currentBlockChain) {
    this.currentBlockChain = currentBlockChain;
    this.currentChanId = "";
    this.accountAddress = "";
    this.currentBlockChainBalance = "";
  },
  updateAccountAddress(accountAddress) {
    this.accountAddress = accountAddress;
  },
  updateCurrentBlockChainBalance(currentBlockChainBalance) {
    this.currentBlockChainBalance = currentBlockChainBalance;
  },
  updateCurrentChainID(currentChainId) {
    this.currentChanId = currentChainId;
  },
  updateIsLoadingState(loadingState) {
    this.isLoading = loadingState;
  },
  updateIsSuccessState(successState) {
    this.isSucces = successState;
  },
});
