import React from "react";

function Sum(){

    function CalculateSum(){

        let sum = 0;

        for(let i=1;i<1000;i++){
            sum+=i;
        }

        return sum;
    }

    const total = CalculateSum();

    console.log('app render')

    return(
        <>
        <h1> This is our math library</h1>
        <h2>Sum: {total}</h2>
        </>
    )

};

export default Sum;