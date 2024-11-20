import React from 'react';
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;

type dataStructure = {
    title: string
    link: string
}
const dataStructures: dataStructure[] = [
    { title: "Linked List", link: "/linked-list" }
]

function Options() {
    return (
        <div>
            <h1 className={"text-primary text-xl text-center mb-4"}>Data Structures</h1>
            <div className={"flex justify-center"}>
                <div className="grid gap-4 grid-cols-3">
                    {dataStructures.map((ds) => (
                        <a href={ds.link}
                            className={"bg-dark w-56 h-32 rounded-md drop-shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-all ease-in-out"}>
                            <h4 className="text-2xl text-white">{ds.title}</h4>
                        </a>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Options;