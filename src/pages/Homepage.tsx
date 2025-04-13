import React, { useEffect } from "react";
import CardPizza from "../sections/CardPizza";

import { useState } from "react";
import Itempizza from "../sections/Itempizza";
import Countpizza from "../sections/Countpizza";


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
    const [person, setPerson] = useState<Pizza>({
        title: "test",
        decription: "tester"
    })

    const handleChangePerson = (data: Pizza) => {
        setPerson(data);
        console.log(data);
    }
    const [count, setCount] = useState(0);
    // remove 
    const handleRemove = (id: number) => {
        const indexpizza = pizzas.findIndex(item => item.id === id);
        let newarrpizza = [...pizzas];// tạo mảng mới
        newarrpizza.splice(indexpizza, 1);
        //Bắt đầu tại vị trí indexpizza.
        //Xoá 1 phần tử tại vị trí đó.
        setPizzas(newarrpizza)
        console.log(id)
    }

    // boolean
    const [istrue, setIstrue] = useState(true);

    useEffect(() => {
        setPizzas(
            [...pizzas, { id: 4, title: "lllllll", decription: "kkkkkkkk" }]
        )
        console.log(
            "check"
        )
    }, [count]);

    return (
        <>
            {/* {console.log("render template")} */}
            <div
                style={{
                    height: "calc(100vh - 309px)",
                    padding: "4rem",
                    overflowY: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap"

                }}
            >
                {/* truyền prop từ CardPizza */}
                <div className="wrapper-card-items" >
                    {/* card pizza *y/}
                    {
                        pizzas.map((item => <CardPizza key={item.id} id={item.id} title={item.title} decription={item.decription} handleRemove={handleRemove} />))
                    }
                    {/* map qua CardPizza tất cả các thuộc tính prop từ file đó  */}

                    {/* itempizza */}
                    <Itempizza title={person.title} decription={person.decription} handleChangePerson={handleChangePerson} />
                </div>
                <button className="btn-main" onClick={() => setIstrue(true)}>open count</button>
                <button className="btn-main" onClick={() => setIstrue(false)}>close count</button>
                {istrue && <Countpizza count={count} setCount={(count) => setCount(count)} />}
            </div >
        </>

    );
};

export default Homepage;
