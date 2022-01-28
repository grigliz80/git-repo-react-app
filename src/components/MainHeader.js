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
      <NavLang style={{ border: "1px solid yellow" }} />
      <header className={classes.header}>
          <div className={classes["lang-menu"]}>
            <button 
                className={classes["but-lang"]}
                style={{
                        backgroundImage: 'url("https://avatars.githubusercontent.com/u/74158661?v=4")'}}></button>
          </div>
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

export default MainHeader;
