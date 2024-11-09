import { FiHeart } from "react-icons/fi"
import { RiShoppingCartLine } from "react-icons/ri"
import { Link } from "react-router-dom"

const Navbar = () => {
    const navItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Shop",
            path: "/shop",
        },
        {
            label: "Cart",
            path: "/cart",
        },
        {
            label: "Wishlist",
            path: "/wishlist",
        },
    ]
    return (
        <div className="w-full flex py-4 justify-center items-center">
            <div className="w-10/12 flex px-2 justify-center items-center">
                <div className="flex-1">
                    <h1 className="logo font-bold text-2xl">
                        Furniture Shop
                    </h1>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <ul className="flex gap-2 justify-center items-center">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex text-xl gap-3 justify-end items-center">
                    <FiHeart />
                    <RiShoppingCartLine />
                </div>
            </div>
        </div>
    )
}

export default Navbar
