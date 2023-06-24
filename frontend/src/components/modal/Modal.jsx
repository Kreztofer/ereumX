import './modal.scss';
import { ImCancelCircle } from 'react-icons/im';
import { TransactionContext } from '../../context/TransactionContext';
import { useContext } from 'react';
import TransactionCard from '../transactionCard/TransactionCard';
import loader from '../../images/loading.gif';

const Modal = ({ setModal }) => {
  const { currentAccount, transactions, isLoading } =
    useContext(TransactionContext);

  const handleCancel = () => {
    setModal(false);
    document.body.style.overflowY = 'auto';
  };
  return (
    <div className="modal ">
      <div className="transactions bg-black-gradient">
        <div className="cancel">
          <ImCancelCircle
            onClick={() => handleCancel()}
            className="circle"
            color="#26D0CE"
          />
        </div>
        <div className="modal-header">
          {currentAccount ? (
            <h3>Latest Transactions</h3>
          ) : (
            <h3>Connect your account to see your latest transactions</h3>
          )}
        </div>

        <div>
          {isLoading ? (
            <>
              <img src={loader} alt="loading" />
            </>
          ) : (
            <>
              {transactions.reverse()?.map((transaction, i) => (
                <TransactionCard key={transaction.id} {...transaction} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
