/* eslint-disable linebreak-style */
import React from 'react';
import SideBar from '../../../components/organism/SideBar';
import TransactionContent from '../../../components/organism/TransactionContent';

function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar />
      <TransactionContent />
    </section>
  );
}

export default Transactions;
