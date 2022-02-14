import { Route, Routes } from 'react-router-dom';
import Recipies from './components/Recipies';
import Header from '~/components/Header';
import SignUp from '~/components/Signup';
import Signin from '~/components/SignIn';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<Signin />} />
                <Route path="/recipies" element={<Recipies />} />
            </Routes>
        </div>
    );
}

export default App;
