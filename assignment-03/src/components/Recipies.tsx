import { TrashIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useAppSelector } from '~/redux/hooks';
import { loggedIn } from '~/redux/reducers/user';

interface Recipie {
    title: string;
    recipie: string;
}

export default function Recipies() {
    const isLoggedIn = useAppSelector(loggedIn);
    const [title, setTitle] = useState('');
    const [recipie, setRecipe] = useState('');
    const [recipies, setRecipies] = useState<Recipie[] | []>([]);

    useEffect(() => setRecipies(JSON.parse(localStorage.getItem('recipies') ?? '[]')), []);

    function addRecipie() {
        setRecipies([...recipies, { title, recipie }]);
        localStorage.setItem('recipies', JSON.stringify(recipies));
    }

    function removeRecipie(title: string) {
        setRecipies(recipies.filter((e) => e.title !== title));
        localStorage.setItem('recipies', JSON.stringify(recipies));
    }

    if (!isLoggedIn) {
        return <div>You must login first to use this.</div>;
    }

    return (
        <div className="mx-auto max-w-4xl bg-gray-100">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Recipie</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="title" className="sr-only">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Recipe Title"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="recipie" className="sr-only">
                                    Recipie
                                </label>
                                <input
                                    id="recipie"
                                    name="recipie"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Recipie"
                                    onChange={(e) => setRecipe(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={addRecipie}>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <h1 className="text-xl font-bold underline">My Recipies</h1>
            {recipies.length === 0 && <h1>No Recipie. Please add any first above!</h1>}
            {recipies.map((e, key) => {
                return (
                    <div className="group pt-6 sm:flex lg:items-end" key={key}>
                        <div className="h-auto w-full">
                            <p className="text-xl font-extrabold text-sky-600 lg:text-2xl">
                                {e.title}
                                <button onClick={() => removeRecipie(e.title)}>
                                    <TrashIcon className="mb-0.5 inline-flex h-6 w-6 p-1 text-red-500" />
                                </button>
                            </p>
                            <p className="text-sm font-semibold text-indigo-400 lg:text-base">
                                <span className="text-sm font-bold text-red-500 lg:text-base">Recipie: </span>
                                {e.recipie}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
