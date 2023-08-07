/* eslint-disable linebreak-style */
import React from 'react';
import TransactionDetailContent from '../../../components/organism/TransactionDetailContent';
import SideBar from '../../../components/organism/SideBar';

function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar />
      <TransactionDetailContent />
    </section>
  );
}

export default TransactionsDetail;
