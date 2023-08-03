import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTriggerErrorVibration, useTheme } from '../utils/store';
import { animated, useSpring } from '@react-spring/web';

const paths = [
    { path: '/', name: 'Home' },
    { path: '/resources', name: 'Resources' },
    { path: '/about', name: 'About' },
];

const classNames = (...classes: string[]): string => `${classes.join(' ')}`;

const getThemeIconOutput = (theme: 'dark' | 'light'): string[] => {
    switch (theme) {
        case 'light':
            return [
                'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
                'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
            ];
        case 'dark':
            return [
                'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
                'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
            ];
    }
};

export default function Nav() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [navBarStyleType, setNavBarStyleType] = useState<'full' | 'minimal'>('minimal');

    const [theme, setTheme] = useTheme();

    const toggleClick = (): void => setNavOpen(!navOpen);
    const triggerErrorVibration = useTriggerErrorVibration();
    const toggleTheme = (): void => setTheme(theme === 'light' ? 'dark' : 'light');

    // Spring

    return (
        <nav className="flex items-center flex-wrap justify-between p-6 transition-all bg-transparent">
            <div className="text-slate-900 dark:text-white">
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    <span className="font-thin es-skyscapers text-2xl tracking-wider font-">ES</span>
                </Link>
            </div>
            <div className="flex justify-end">
                <div
                    className=" flex items-center justify-center relative lg:absolute lg:right-3 lg:-translate-y-1/2 cursor-pointer w-[35px] h-[35px]"
                    onClick={toggleTheme}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={theme === 'dark' ? '#fff' : '#000'}
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                        className={` ${theme === 'dark' ? 'hover:animate-spin-slow' : ''}`}
                    >
                        <path
                            className={classNames(
                                'transition-all duration-100 ',
                                theme === 'dark' ? 'opacity-0' : 'opacity-100'
                            )}
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                            fill="currentColor"
                        />
                        <path />

                        <path
                            className={classNames(
                                'transition-all duration-100 ',
                                theme === 'light' ? 'opacity-0' : 'opacity-100'
                            )}
                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                            fill="currentColor"
                        />
                        {/* <animated.path
                            className={classNames('transition-all', theme === 'dark' ? 'opacity-0' : 'opacity-100')}
                            d={x.to({
                                range: [0, 1],
                                output: [
                                    'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
                                    'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',                                ],
                            })}
                        />
                        <animated.path
                            className={classNames('transition-all', theme === 'light' ? 'opacity-0' : 'opacity-100')}
                            d={x.to({
                                range: [0, 1],
                                output: [
                                    'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
                                    'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
                                ],
                            })}
                        /> */}
                    </svg>
                </div>
                <div className={`block lg:hidden transition-all ml-2 focus:outline-2 ${navOpen ? 'rotate-45' : ''} `}>
                    <svg
                        onClick={toggleClick}
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 6V18"
                            stroke={theme === 'dark' ? '#fff' : '#000'}
                            strokeLinecap="round"
                            strokeWidth={1}
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 12H18"
                            stroke={theme === 'dark' ? '#fff' : '#000'}
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <title>Menu</title>
                    </svg>
                </div>
            </div>
            <div className="w-full block  lg:flex lg:items-center lg:mr-[.9vw] lg:relative lg:text-right lg:w-auto transition-all ">
                <div className={`text-sm lg:flex-grow transition-all ${navOpen ? '' : 'lg:block hidden'}`}>
                    {paths.map((path) => (
                        <NavLink
                            key={path.name}
                            to={path.path}
                            onClick={() => (
                                toggleClick(), window.location.pathname === path.path && triggerErrorVibration()
                            )}
                            className={({ isActive }) =>
                                `block mt-4 lg:inline-block lg:mt-0 transition-all after:block after:w-0 after:h-[2px] after:transition-all  content-none hover:after:w-full mr-4 text-lg ${
                                    isActive
                                        ? 'text-slate-950 after:bg-slate-950 dark:text-white dark:after:bg-white'
                                        : 'text-slate-700 after:bg-slate-700 dark:text-blue-200 dark:after:bg-blue-200'
                                } after:rounded-full after:-mt-1`
                            }
                        >
                            {path.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
