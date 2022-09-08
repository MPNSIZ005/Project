import React from "react";

//We will use Route in order to define the different routes in our application
import { Route, Routes } from "react-router-dom";

//We import all the components we need in our app

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import ArticleList from "./components/articleList";
import CreateArticle from "./components/createarticle";
import EditArticle from "./components/editarticle";

const App = () => {
    return (
        <div>
            <Navbar />
            <div class = "list-inline">
                <Routes>
                    <Route exact path="/" element={<RecordList />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </div>
            <div>
                <Routes>
                    <Route exact path="/" element={<ArticleList/>} />
                    <Route path="/editarticle/:id" element={<EditArticle/>} />
                    <Route path="/createarticle" element={<CreateArticle/>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;