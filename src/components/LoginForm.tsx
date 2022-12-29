import React, {FC, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useAuthStore} from '../providers/RootStoreProvider';

export const LoginForm: FC = observer(() => {
    const authStore = useAuthStore();
    const [formType, setFormType] = useState<string>('signIn');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        authStore.isAuth ? setFormType('signIn') : setFormType('signUp');
    }, []);

    const signInAction = () => {
        return authStore.login(email, password);
    };

    const signUpAction = () => {
        return authStore.registration(email, password);
    };

    const authAction = (actionType: string) => {
        switch(actionType){
            case 'signIn':
                return signInAction();
            case 'signUp':
                return signUpAction();
            default:
                return signInAction();
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            {formType === 'signIn' ? 'Sign in' : 'Sign up'}
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='Email'
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='Password'
                    />
                </div>
                <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                >
                    Forget Password?
                </a>
                <div className="mt-6">
                    <button 
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        onClick={() => authAction(formType)}>
                        {formType === 'signIn' ? 'Login' : 'Sign up'}
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                {formType === 'signIn' ? `Don't have an account?{" "}` : `Have an account?{" "}`}
                <a
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                >
                    {formType === 'signIn' ? 'Sign in' : 'Sign up'}
                </a>
            </p>
        </div>
    </div>    
    );
});