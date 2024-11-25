import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import LinkedList from "@/components/data-structures/LinkedList";

function LinkedListPage() {
    return (
        <div>
            <Navbar />

            {/* Go Back */}
            <a href="/" className={"w-[75ch] mx-auto flex items-center justify-start text-light text-lg"}>
                <FaArrowLeft />
                <span className={"underline ml-2"}>Back</span>
            </a>

            {/* Body */}
            <div className={"w-[75ch] text-left mx-auto text-white font-primary py-12"}>
                <h1 className="text-5xl font-bold">Linked List</h1>
                <p className={"text-light mt-8 text-lg"}>
                    A linked list is a linear collection of data elements, called
                    <span className={"text-white"}> nodes </span>, whose order is not given by its place in memory.
                    Instead <span className={"text-white"}> each element points to the next </span> representing a
                    sequence.
                </p>
                <ul className="text-light mt-8 text-lg list-disc list-inside">
                    <li><span className={"text-white"}>Singly Linked: </span> Nodes point towards the next node in the sequence</li><li><span className={"text-white"}>Double Linked: </span> Nodes point towards the next node in the sequence, as well as the previous node in the sequence</li>
                </ul>
            </div>

            {/*  Linked List Animation  */}
            <LinkedList />

        </div>
    );
}

export default LinkedListPage;