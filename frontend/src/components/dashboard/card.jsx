const Card = ({text}) => {
    return (
        <>
                <div className="card flex-1 p-5 rounded-2xl shadow-2xl bg-slate-800 h-20">
                    <h3>{text}</h3>
                </div>
        </>
    )
}

export default Card