import { Link } from 'react-router';
import styles from './Header.module.css'

function Header() {
    return (
        <div className = {styles['header-wrapper']}>
            <h1 className = {styles.title}>My Blog</h1>
            <nav className = {styles['nav-wrapper']}>
                <Link to = "/">Home</Link>
                <Link to = "/posts">Posts</Link>
                <Link to = "/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Header;