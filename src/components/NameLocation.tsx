import React from 'react';

import Person from '../interface/Person'

function NameLocation(props: any) {
    return (
        <div>
            <h2>Name & Location</h2>
            <hr></hr>

            {
                props.values.map((data: Person, index: number) => {
                    return <div key={index}>
                        <h4>{data.name}</h4>
                        <p>{data.location}</p>
                        <hr></hr>
                    </div>
                })
            }

        </div>
    );
}

export default NameLocation;