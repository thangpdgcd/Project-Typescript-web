import React from "react";
import logo from "../assets/img/pnglogo.png";
import { useState } from "react";
type Props = Pizza  // lấy thuộc tính từ file pizza.models.tsx

const CardPizza = ({ title, decription }: Props) => {

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
        <>
            <div className="containerCardpizza" >
                <div
                    style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "10px",
                        width: "100%",
                        maxWidth: "500px",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                        cursor: "pointer",
                        boxSizing: "border-box",

                    }}
                >
                    <img
                        src={logo}
                        alt="mylogo"
                        style={{
                            width: "100%",
                            height: "180px", // đặt cố định ảnh
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    <div
                        style={{
                            backgroundColor: "#0D2041",
                            padding: "1rem",
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: 600,
                                fontSize: "24px",
                                color: "#fff",
                                wordBreak: "break-word", // xử lý khi title quá dài
                            }}
                        >
                            {title}
                        </div>
                        <div
                            style={{
                                fontWeight: 400,
                                fontSize: "16px",
                                color: "#fff",
                                marginTop: "0.5rem",
                                wordBreak: "break-word",
                            }}
                        >
                            {decription}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default CardPizza;
