import React from 'react';
import { Route, Routes, Outlet, Link} from "react-router-dom";
import Home from './page/Home';
import Run from './page/Run';
import Yuki from './page/Yuki';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="run" element={<Run />} />
                    <Route path="yuki" element={<Yuki />} />
                </Route>
            </Routes>
        </div>
    )
}

function Layout() {
    return (
        <div>
            <nav>
                <ul style={{
                    display: 'flex',
                    columnGap: '25px',
                    marginLeft: '650px'

                }}>
                    <li className="item1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item1">
                        <Link to="/run">Run</Link>
                    </li>
                    <li className="item1">
                        <Link to="/yuki">Yuki</Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
            <Outlet/>
        </div>
    )
}
