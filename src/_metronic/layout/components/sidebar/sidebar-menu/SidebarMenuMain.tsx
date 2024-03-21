import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      {/*<SidebarMenuItem*/}
      {/*  to='/dashboard'*/}
      {/*  icon='element-11'*/}
      {/*  title={intl.formatMessage({id: 'MENU.DASHBOARD'})}*/}
      {/*  fontIcon='bi-app-indicator'*/}
      {/*/>*/}
    <SidebarMenuItem
        to='/crafted/pages/profile/overview'
        title='Members'
        // hasBullet={true}
        icon='profile-circle'
    />
    <SidebarMenuItem
        to='#'
        title='Contributions'
        // hasBullet={true}
        icon='profile-circle'
    />
      <SidebarMenuItem
        to='#'
        title='Reports'
        // hasBullet={true}
        icon='cloud-change'
      />
    {/*  <SidebarMenuItem*/}
    {/*    to='/crafted/pages/profile/overview'*/}
    {/*    title='My Profile'*/}
    {/*    // hasBullet={true}*/}
    {/*    icon='profile-circle'*/}
    {/*/>*/}

      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Setups'
        icon='element-7'
        fontIcon='bi-layers'
      >
        {/*<SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />*/}
        <SidebarMenuItem to='/setups/branches' title='Branches' hasBullet={true} />
        <SidebarMenuItem to='/setups/contributiontypes' title='Contribution Types' hasBullet={true} />
        <SidebarMenuItem to='/setups/departments' title='Departments' hasBullet={true} />
        <SidebarMenuItem to='/setups/ministries' title='Ministries' hasBullet={true} />
        <SidebarMenuItem to='/setups/positions' title='Positions' hasBullet={true} />
      </SidebarMenuItemWithSub>
      {/*<div className='menu-item'>*/}
      {/*  <div className='menu-content pt-8 pb-2'>*/}
      {/*    <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<SidebarMenuItemWithSub*/}
      {/*  to='/apps/chat'*/}
      {/*  title='Chat'*/}
      {/*  fontIcon='bi-chat-left'*/}
      {/*  icon='message-text-2'*/}
      {/*>*/}
      {/*  <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />*/}
      {/*  <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />*/}
      {/*  <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />*/}
      {/*</SidebarMenuItemWithSub>*/}
      {/*<SidebarMenuItem*/}
      {/*  to='/apps/user-management/users'*/}
      {/*  icon='abstract-28'*/}
      {/*  title='User management'*/}
      {/*  fontIcon='bi-layers'*/}
      {/*/>*/}

    </>
  )
}

export {SidebarMenuMain}
