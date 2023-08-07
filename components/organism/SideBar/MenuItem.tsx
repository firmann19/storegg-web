/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
    title: string,
    icon: 'ic-menu-overview' | 'ic-menu-transaction' | 'ic-menu-card' | 'ic-menu-logout' | 'ic-menu-messages' | 'ic-menu-reward' | 'ic-menu-setting'
    active?: boolean;
    href: string,
}

function MenuItem(props:Partial<MenuItemProps>) {
  const {
    title, icon, href, active,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
        <p className="item-title m-0">
          <Link href={href} className="text-lg text-decoration-none">{title}</Link>
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
