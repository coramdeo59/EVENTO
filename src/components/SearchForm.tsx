"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      if (!searchQuery ) return;
        router.push(`/events/${searchQuery}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
                <input
                    className="w-full h-16 text-lg rounded-lg bg-white/[7%] ring-accent/50 transition focus:ring-2 focus:bg-white/20 px-6 outline-none"
                    spellCheck={false}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for events in any city"
                    value={searchQuery}
                />
            </form>
        </div>
    );
};

export default SearchForm;