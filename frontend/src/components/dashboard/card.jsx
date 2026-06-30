const Card = ({text}) => {
    return (
        <div className="flex flex-col justify-center p-4 rounded-2xl border border-slate-800 shadow-xl bg-slate-900/50 backdrop-blur-md h-32 hover:bg-slate-800/80 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <h3 className="text-slate-200 font-semibold text-lg group-hover:text-white transition-colors">{text}</h3>
        </div>
    )
}

export default Card