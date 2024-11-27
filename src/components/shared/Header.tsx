import { NavLink } from 'react-router-dom';
import { routerLinks } from '../../router/Router';

export const Header = () => {
  return (
    <header className="flex justify-between">
      <div>logo</div>
      <div className="flex gap-2">
        {routerLinks.map((link) => (
          <div key={link.title}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? 'bg-slate-400' : ''} rounded-lg py-1 px-2 border`
              }
              to={link.href}
            >
              {link.title}
            </NavLink>
          </div>
        ))}
      </div>
    </header>
  );
};
