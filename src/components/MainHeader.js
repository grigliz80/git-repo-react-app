import classes from "./MainHeader.module.css"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../store/ui-slice"
import NavLang from "./UI/NavLang"

const MainHeader = () => {
  const dispatch = useDispatch();

  const loginOutToggleHandler = () => {
    dispatch(uiActions.logInOut())
  }

  const isLoggedIn = useSelector((st) => st.ui.isLoggedIn)

  return (
    <>
      <NavLang />
      <header className={classes.header}>
          <div className={classes["lang-menu"]}>
            <button 
                className={classes["but-lang"]}
                style={{
                        backgroundImage: 'url("https://i.postimg.cc/TwR7dLfh/flag-UA.jpg")'}}></button>
          </div>
          <img src="https://i.postimg.cc/02Q6VCQf/ezgif-com-gif-maker-1.gif" alt="logo" height="250%"/>
          <h1>Wellcome</h1>
        <nav>
          <ul>
            <li>
              <button onClick={loginOutToggleHandler}>LOGIN</button>
            </li>
            <li>
              <button disabled={!isLoggedIn}>GAME</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
