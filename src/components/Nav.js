const Header = (props) => {
    return ( 
        <nav className="container flex justify-center bg-purple-500 py-6 px-3 text-2xl">
            <h2 className=" font-bold text-gray-50 font-ubuntu ">{props.headline}</h2>
        </nav>
     );
}
 
export default Header;