import {PageLink, PageTitle} from "../../../_metronic/layout/core";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Ministry from "./components/Ministry.tsx";
import Position from "./components/Position.tsx";
import Branch from "./components/Branch.tsx";
import ContributionType from "./components/ContributionType.tsx";
import Department from "./components/Department.tsx";


const setupBreadCrumbs: Array<PageLink> = [
    {
        title: 'Setups',
        path: '#',
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
const SetupPage = () => {
    return (
        <Routes>
            <Route
                element={
                    <>
                        {/*<ProfileHeader />*/}
                        <Outlet />
                    </>
                }
            >
                <Route
                    path='ministries'
                    element={
                        <>
                            <PageTitle breadcrumbs={setupBreadCrumbs}>Ministries</PageTitle>
                            <Ministry />
                        </>
                    }
                />
                <Route
                    path='positions'
                    element={
                        <>
                            <PageTitle breadcrumbs={setupBreadCrumbs}>Positions</PageTitle>
                            <Position />
                        </>
                    }
                />
                <Route
                    path='branches'
                    element={
                        <>
                            <PageTitle breadcrumbs={setupBreadCrumbs}>Branches</PageTitle>
                            <Branch />
                        </>
                    }
                />
                <Route
                    path='contributiontypes'
                    element={
                        <>
                            <PageTitle breadcrumbs={setupBreadCrumbs}>Contribution Types</PageTitle>
                            <ContributionType />
                        </>
                    }
                />
                <Route
                    path='departments'
                    element={
                        <>
                            <PageTitle breadcrumbs={setupBreadCrumbs}>Departments</PageTitle>
                            <Department />
                        </>
                    }
                />
                <Route index element={<Navigate to='#' />} />
            </Route>
        </Routes>
    );
}
export default SetupPage;