import React from "react";

// merge type from function Homepage (húng từ cha sang con  Homepage->itempizza)
type Props = Pizza & {
    handleChangePerson: (data: Pizza) => void;
};

const Itempizza = (
    {
        title,
        decription,
        handleChangePerson,
    }: Props
) => {

    return (
        <>
            <div>
                <div>{title}</div>
                <div>{decription}</div>
                <button className="text-2xl btn-main w-2.5 h-3" onClick={() => handleChangePerson({
                    title: "gggg",
                    decription: "gggg"
                })}
                >ChangePerson</button>
            </div >
        </>
    )
}
export default Itempizza