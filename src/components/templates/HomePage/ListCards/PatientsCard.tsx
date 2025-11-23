import { AiOutlineUser } from "react-icons/ai";
const PatientsCard = ({ name, service, date, time }: any) => {
    return (
        <div className="neu__norm ps-5 pe-7 py-2 rounded-full w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="neu__inner rounded-full p-2 lg:p-3">
                    <AiOutlineUser className="lg:w-7 lg:h-7 w-5 h-5" />
                </div>
                <div className="text-[10px]">
                    <div className="font-semibold font_per">{name}</div>
                    <div className="text-(--alt-text)">{service}</div>
                </div>
            </div>
            <div className="flex flex-col items-end text-[10px]">
                <div className="font-semibold text-blue-500">{date}</div>
                <div className="text-amber-500">{time}</div>
            </div>
        </div>
    )
}

export default PatientsCard