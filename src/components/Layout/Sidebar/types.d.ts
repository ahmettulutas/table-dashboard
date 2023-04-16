type MenuLink = {
   id:string,
   svg:React.FC<React.SVGProps<SVGElement>>
}
type SideBarItem = MenuLink & {
 subRoutes?: Array<MenuLink>
}