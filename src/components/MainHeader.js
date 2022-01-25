import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'

const MainHeader = () => {
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/wellcome'>
                            GRIGORIY  WELLCOME 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>
                            LIST  WORDS
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader