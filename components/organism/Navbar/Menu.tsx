/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-extraneous-dependencies */
import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}

function Menu(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;

  const classTitle = cx({
    'nav-link': true,
    active,
  });
  return (
        <li className="nav-item my-auto">
            <Link href={href} className={classTitle} aria-current="page">
                {title}
            </Link>
        </li>
  );
}

export default Menu;
