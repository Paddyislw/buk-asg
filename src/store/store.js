import { reactive } from "vue";
import { ETHERIUM_BLOCKCHAIN, POLYGON_BLOCKCHAIN } from "../utils/Constants";

export const store = reactive({
  currentBlockChain: POLYGON_BLOCKCHAIN,
  accountAddress: undefined,
  currentBlockChainBalance: undefined,
  currentChanId: undefined,
  isError: { status: false, msg: "" },
  isLoading: false,
  isSucces: false,
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
