import React, {FC, useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import {LoginForm} from "./components/LoginForm";
import UserService from "./services/UserService";
import {Navigation} from "./components/Navigation";
import {useAuthStore} from "./providers/RootStoreProvider";

export const App: FC = observer(() => {
    // const authStore = useAuthStore();
    // const [users, setUsers] = useState<IUser[]>([]);

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         authStore.checkAuth();
    //     }
    // }, [])

    // async function getUsers() {
    //     try {
    //         const response = await UserService.fetchUsers();
    //         setUsers(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // if (authStore.isLoading) {
    //     return <div>Загрузка...</div>
    // }

    // if (!authStore.isAuth) {
    //     return (
    //         <div>
    //             <LoginForm/>
    //             <button onClick={getUsers}>Получить пользователей</button>
    //         </div>
    //     );
    // }

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
            </Routes>
        </>
        // <div>
        //     <h1>{authStore.isAuth ? `Пользователь авторизован ${authStore.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
        //     <h1>{authStore.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
        //     <button onClick={() => authStore.logout()}>Выйти</button>
        //     <div>
        //         <button onClick={getUsers}>Получить пользователей</button>
        //     </div>
        //     {users.map(user =>
        //         <div key={user.email}>{user.email}</div>
        //     )}
        // </div>
    );
});