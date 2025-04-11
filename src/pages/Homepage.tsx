import React from "react";
import CardPizza from "../sections/CardPizza";

import { useState } from "react";


const Homepage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([{
        id: 1,
        title: "Pizza",
        decription: "Sot ca chua"

    },
    {
        id: 2,
        title: "Pizza",
        decription: "Sot Pho Mai"
    },
    {
        id: 3,
        title: "Pizza",
        decription: "Sot Cay"
    }
    ]); //props form pizza.models.tsx

    return (
        <div
            style={{
                height: "calc(100vh - 309px)",
                padding: "4rem",
                overflowY: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

            }}
        >
            {/* truyền prop từ CardPizza */}
            <div className="wrapper-card-items" >
                {
                    pizzas.map((item => <CardPizza id={item.id} title={item.title} decription={item.decription} />))
                }
                {/* map qua CardPizza tất cả các thuộc tính prop từ file đó  */}
            </div>
            {/* <div className="wrapper-card-items" >
                <CardPizza title="Pizza Thit bam" decription="Thit Bam Sot Ca Chua" />
            </div>
            <div className="wrapper-card-items" >
                <CardPizza title="Pizza Thit bam" decription="Thit Bam Sot Ca Chua" />
            </div> */}


        </div >

    );
};

export default Homepage;
