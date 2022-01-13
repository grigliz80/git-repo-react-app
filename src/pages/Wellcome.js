import { Route } from 'react-router-dom'

const Wellcome = () => {
    return(
        <section>
            <h1>The Wellcome Page</h1>
            <p>And some changes in this page</p>
            <Route path='/wellcome/new-user'>
                <p>Wellcome, new User!</p>
            </Route>
        </section>
    )
}

export default Wellcome