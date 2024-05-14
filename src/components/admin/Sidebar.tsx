import React from 'react';
import {Cog6ToothIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    icon: any;
    // icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface Team {
    name: string;
    href: string;
    current: boolean;
    initial: string;
}

interface SidebarProps {
    navigation: NavigationItem[];
    teams: Team[];
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = ({navigation, teams}: SidebarProps) => {

    return (
        <nav className="flex flex-1 flex-col overflow-hidden">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >
                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true"/>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                            <li key={team.name}>
                                <a
                                    href={team.href}
                                    className={classNames(
                                        team.current
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >
                          <span
                              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                                    <span className="truncate">{team.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="mt-auto">
                    <a
                        href="/admin/settings"
                        className={classNames(
                            usePathname() === '/admin/settings'
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                    >
                        <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true"/>
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
