/** @format */
import "./globals.css";

export default function Home() {
  return <div className="bg-gray">
    <div className="py-24 px-32">
    <h4>Where would you like to go?</h4>

    <form className="flex items-center relative">   
    <div className="relative w-full">
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required></input>
    </div>
    <button type="submit" className="absolute end-0 p-3 ms-2 text-sm font-medium text-white bg-gray-400	 border-gary-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-tr-md	rounded-br-md">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>
<div className="pt-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="projects-list-item project bg-cyan-600 h-24">
        <a className="text-white block text-right	pt-6 pr-4">My Projects</a>
    </div>
    <div className="h-16 projects-list-item estimates bg-orange-400 h-24">
    <a className="text-white block text-right	pt-6 pr-4">My Estimates</a>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="projects-list-item project bg-emerald-400 h-24">
    <a className="text-white text-right block	pt-6 pr-4">Create Projects</a>
    </div>
    <div className="h-16 projects-list-item estimates bg-stone-400 h-24">
    <a className="text-white text-right block	pt-6 pr-4">Item Catalog</a>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="projects-list-item project bg-cyan-400 h-24">
    <a className="text-white text-right block	pt-6 pr-4">Reporting Dashboards</a>
    </div>
    <div className="h-16 projects-list-item estimates bg-stone-500 h-24">
    <a className="text-white text-right block	pt-6 pr-4">Administration</a>
    </div>
  </div>
</div>
    </div>
    </div>;
}
