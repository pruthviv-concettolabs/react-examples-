//we use for the hook useSelect
import { useSelector } from "react-redux";
const BookContainer = () => {
  const numBooks = useSelector((state) => state.numberOfBooks);
  return (
    <>
      <div>BookContainer {numBooks}</div>
    </>
  );
};

export default BookContainer;
