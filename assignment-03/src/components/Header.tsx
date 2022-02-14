import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { logOut, loggedIn } from '~/redux/reducers/user';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(loggedIn);
    const handleSignOut = () => {
        dispatch(logOut());
        navigate('/');
    };

    // TODO: Work on mobile nav?
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 text-3xl font-bold">Recipies</div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {!isLoggedIn && (
                                                    <NavLink
                                                        className={({ isActive }) =>
                                                            `${
                                                                isActive
                                                                    ? 'bg-sky-600 text-white'
                                                                    : 'text-gray-100 hover:bg-sky-700 hover:text-white'
                                                            } rounded-md px-3 py-2 text-sm font-medium`
                                                        }
                                                        to={'/'}>
                                                        Sign In
                                                    </NavLink>
                                                )}
                                                {isLoggedIn && (
                                                    <NavLink
                                                        className={({ isActive }) =>
                                                            `${
                                                                isActive
                                                                    ? 'bg-sky-600 text-white'
                                                                    : 'text-gray-100 hover:bg-sky-700 hover:text-white'
                                                            } rounded-md px-3 py-2 text-sm font-medium`
                                                        }
                                                        to={'/recipies'}>
                                                        Recipies
                                                    </NavLink>
                                                )}
                                                {isLoggedIn && (
                                                    <button
                                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-sky-700 hover:text-white"
                                                        onClick={handleSignOut}>
                                                        Sign Out
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-sky-600 p-2 text-gray-200 hover:bg-sky-700 hover:text-white focus:outline-none">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}
