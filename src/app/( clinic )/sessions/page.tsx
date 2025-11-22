'use client'
import HeadTitle from "@/components/modules/HeadTitles/HeadTitle"
import FilterControlsSection from "@/components/templates/SessionsPage/FilterControlsSection"
import SessionsTable from "@/components/templates/SessionsPage/SessionsTable";

const SessionsPage = () => {


    return (
        <div className="px-5 pb-5 flex flex-col gap-5">
            <HeadTitle title="Sessions" description="View and managing sessions" />
            <FilterControlsSection />
            <SessionsTable />
        </div>
    )

}

export default SessionsPage