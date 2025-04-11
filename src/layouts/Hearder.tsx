import React from "react"

const Header = () => {
    return (
        <div className="flex-basic-beetwen" style={{
            padding: "1.5rem 4rem", display: "flex", justifyContent: "space-between", width: "100%", height: "60%"
        }}>
            <div style={{ fontSize: "40px", fontWeight: "600", font: "italic bold cursive" }}>PIZZA</div>
            <div className="btn-main" style={{ width: "160px", font: "san serif", height: "50px", float: "right" }}>Create Pizza</div>
        </div >
    )
}
export default Header