import { buyBook } from "./BuyBook";

const purchaseBook = () => {
  return {
    type: buyBook,
  };
};

export default purchaseBook;
