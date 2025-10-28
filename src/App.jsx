import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Menu} from "./pages/Menu.jsx";
import {Navbar} from "./pages/Navbar.jsx";
import {Todo} from "./pages/Todo.jsx";
import {Prayer} from "./pages/Prayer.jsx";
import {Login} from "./pages/Login.jsx";
import {AuthProvider} from "./contexts/AuthContextProvider.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryPage} from "./pages/ReactQueryPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {RegistrationPage} from "./pages/RegistrationPage.jsx";
import {CustomHook} from "./pages/CustomHook.jsx";
import {Provider} from "react-redux";
import store from "./store/store.jsx";
import {ReduxPage} from "./pages/ReduxPage.jsx";
import {ReduxThunk} from "./pages/ReduxThunk.jsx";

function App() {
    const queryClient = new QueryClient();

    return (
        <div className="app">
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Router>
                            <Navbar/>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/menu" element={<Menu/>}/>
                                <Route path="/todo" element={<Todo/>}/>
                                <Route path="/prayer" element={<Prayer/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/reactQuery" element={<ReactQueryPage/>}/>
                                <Route path="/register" element={<RegistrationPage/>}/>
                                <Route path="/customHook" element={<CustomHook/>}/>
                                <Route path="/redux" element={<ReduxPage/>}/>
                                <Route path="reduxThunk" element={<ReduxThunk/>}/>
                            </Routes>
                        </Router>
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </div>
    )
}

export default App