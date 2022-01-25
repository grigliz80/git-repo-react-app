import classes from './MainHeader.module.css'

const MainHeader = () => {
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>                       
                            LOGIN
                    </li>
                    <li>                       
                            GAME
                   </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader