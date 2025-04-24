import { Outlet } from 'react-router-dom'

const Layout = ({header, footer}) => {
  return (
    <>
        {header}
        <div className="layout">
            <Outlet />
        </div>
        {footer}
    </>
  )
}

export default Layout