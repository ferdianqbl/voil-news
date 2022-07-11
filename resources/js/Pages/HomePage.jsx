import React from "react";
import { Head } from "@inertiajs/inertia-react";

export default function HomePage(props) {
    console.log(props);
    return (
        <>
            <Head title={`Voil | ${props.title}`} />
            <h1 className="text-xl font-bold text-center">
                {props.description}
            </h1>
            <div className="card-box container mx-auto">
                {props.news?.map((item) => (
                    <div className="card shadow mb-5 p-10" key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.author}</p>
                            <p className="card-text">{item.category}</p>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
