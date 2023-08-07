/* eslint-disable linebreak-style */
import React from 'react';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" active href="/" />
          <MenuItem title="Transactions" icon="ic-menu-transaction" href="/member/transactions" />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
          <MenuItem title="Settings" icon="ic-menu-setting" href="/member/edit-profile" />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default SideBar;
