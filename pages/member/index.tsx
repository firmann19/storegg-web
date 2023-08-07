/* eslint-disable linebreak-style */
import React from 'react';
import SideBar from '../../components/organism/SideBar';
import OverviewContent from '../../components/organism/OverviewContent';

function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewContent />
    </section>
  );
}

export default Member;
