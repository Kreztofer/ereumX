import React from 'react';
import { shortAddress } from '../../utils';
import './transactionCard.scss';

const TransactionCard = ({
  message,
  timestamp,
  addressFrom,
  amount,
  addressTo,
}) => {
  return (
    <div className="transaction-card">
      <div className="transaction-card_items">
        <a
          href={`https://goerli.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>From: {shortAddress(addressFrom)}</p>
        </a>
        <a
          href={`https://goerli.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>To: {shortAddress(addressTo)}</p>
        </a>
        <p>Amount: {amount}</p>

        <p>{timestamp}</p>
        {message && (
          <>
            <p>Message: {message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
