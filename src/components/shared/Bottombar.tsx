import { bottombarLinks } from '@/constant';
import { INavLink } from '@/lib/types';
import { Link, useLocation } from 'react-router-dom';

const Bottombar = () => {
    const { pathname } = useLocation();
    return (
        <section className="bottom-bar">
            {bottombarLinks.map((link: INavLink) => (
                <Link
                    to={link.route}
                    key={link.label}
                    className={`rounded-[10px] flex-center items-center justify-center flex-col gap-1 p-2 transition ${
                        pathname === link.route && 'bg-primary-500'
                    }`}>
                    <img
                        src={link.imgURL}
                        alt={link.label}
                        width={16}
                        height={16}
                        className={`${
                            pathname === link.route && 'invert-white'
                        }`}
                    />
                    <p className="tiny-medium text-light-2">{link.label}</p>
                </Link>
            ))}
        </section>
    );
};

export default Bottombar;
