import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const resources = [
    { name: 'Chem', path: '/resources/chem', description: 'Chemistry' },
    { name: 'Phys', path: '/resources/phys', description: 'Physics' },
    { name: 'Bio', path: '/resources/bio', description: 'Biology' },
    { name: 'Math', path: '/resources/math', description: 'Mathematics' },
];

export default function Resources() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-3/4 self-center relative left-1/2 -translate-x-1/2">
                <h1 className="text-5xl underline lg:text-6xl relative lg:w-8/12 w-10/12 text-left my-12 ">
                    Resources
                </h1>
                <div className="flex flex-row flex-wrap justify-evenly">
                    {resources.map((resource) => (
                        <Fragment key={resource.name}>
                            <div
                                className="container border-slate-700 rounded-xl shadow-sm border m-2 lg:w-1/3 w-full p-4 cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-md dark:hover:shadow-slate-700"
                                onClick={() => navigate(resource.path)}
                            >
                                <h1 className="text-lg">{resource.name}</h1>
                                <h1>{resource.description}</h1>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
