import React, { useEffect } from "react";
type Props = {
    count: number,
    setCount: (count: number) => void;
}
const Countpizza = ({ count, setCount }: Props) => {
    useEffect(() => {
        return () => {
            setCount(0);
        }
    }, [])
    return (
        <>
            <button className="btn-main" onClick={() => setCount(count + 1)}>add</button>
        </>)
}
export default Countpizza;