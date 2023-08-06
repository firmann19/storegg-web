/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import SideBar from '../../../components/organism/SideBar';
import OverviewContent from '../../../components/organism/OverviewContent';

function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar />
      <OverviewContent />
    </section>
  );
}

export default Transactions;
