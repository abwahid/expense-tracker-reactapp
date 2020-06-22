import React, { useContext } from 'react';
 // import the Global Context
 import { GlobalContext } from '../context/GlobalState';

 //import transactions
 import { Transaction } from './TRansaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>           
        </>
     )
}