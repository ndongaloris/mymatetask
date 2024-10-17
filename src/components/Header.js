import "./header.css"
import logo from "../assets/N-animez.jpeg"

export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Goal</a>
                    </li>
                    <li>        <
                        a href="/">Tasks</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
