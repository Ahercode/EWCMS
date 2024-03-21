import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {PageLink, PageTitle} from "../../../_metronic/layout/core";
import Ministry from "../setups/components/Ministry.tsx";
import Position from "../setups/components/Position.tsx";
import Branch from "../setups/components/Branch.tsx";
import ContributionType from "../setups/components/ContributionType.tsx";
import Department from "../setups/components/Department.tsx";

const memberBreadCrumbs: Array<PageLink> = [
    {
        title: 'Members',
        path: 'members',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]
const MemberPage = () => {
    return (
        <Routes>
            <Route
                element={
                    <>
                        <Outlet />
                    </>
                }
            >
                <Route
                    path='members-grid'
                    element={
                        <>
                            <PageTitle breadcrumbs={memberBreadCrumbs}>All Members</PageTitle>
                            <Ministry />
                        </>
                    }
                />
                <Route
                    path='positions'
                    element={
                        <>
                            <PageTitle breadcrumbs={memberBreadCrumbs}>Positions</PageTitle>
                            <Position />
                        </>
                    }
                />
                <Route
                    path='branches'
                    element={
                        <>
                            <PageTitle breadcrumbs={memberBreadCrumbs}>Branches</PageTitle>
                            <Branch />
                        </>
                    }
                />
                <Route
                    path='contributiontypes'
                    element={
                        <>
                            <PageTitle breadcrumbs={memberBreadCrumbs}>Contribution Types</PageTitle>
                            <ContributionType />
                        </>
                    }
                />
                <Route
                    path='departments'
                    element={
                        <>
                            <PageTitle breadcrumbs={memberBreadCrumbs}>Departments</PageTitle>
                            <Department />
                        </>
                    }
                />
                <Route index element={<Navigate to='#' />} />
            </Route>
        </Routes>
    );
}

export default MemberPage;