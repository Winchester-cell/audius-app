import sideBarContent from "@/contents/sidebarContent";
import SideBarSingleItem from "./SideBarSingleItem";
import SidbarDropDown from "./SidbarDropDown";
import SimpleBar from "simplebar-react";
const NavigateSection = () => {
    return (
        <div className=" w-full neu__inner rounded-3xl p-1 flex flex-col gap-5 overflow-hidden">
            <SimpleBar className="h-full p-4">
                {
                    sideBarContent.map((field, index) => {
                        return (
                            <section key={index} className="flex h-full flex-col gap-5">
                                {
                                    field.items.map((item, idx) => {
                                        return (
                                            item.type === 'single-item' ? <SideBarSingleItem key={idx} {...item} /> : <SidbarDropDown key={idx} {...item} />
                                        )
                                    })
                                }
                            </section>
                        )
                    })
                }
            </SimpleBar>
        </div>
    )
}

export default NavigateSection