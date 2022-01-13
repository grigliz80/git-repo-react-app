import { Route } from 'react-router-dom'

const Wellcome = () => {
    return(
        <section>
            <h1>The Wellcome Page</h1>
            <Route path='/wellcome/new-user'>
                <p>Wellcome, new User!</p>
            </Route>
        </section>
    )
}

export default Wellcome