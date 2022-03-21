import React, {useEffect} from 'react';
import Button from '../../../Components/Button';
import Checkbox from '@/Components/Checkbox';
import styled from 'styled-components';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post('/login');
    };
    return (
        <Wrapper
        >
           <h1>Admin Login Page</h1>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <InputComponent>
                    <Label
                    className="block w-50 mr-auto ml-auto" forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        className="mt-1 block w-75 mr-auto ml-auto"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </InputComponent>

                <InputComponent>
                    <Label
                     className="block w-50 mr-auto ml-auto"
                     forInput="password"
                     value="Password" />

                    <Input
                       className="mt-1 block w-75 mr-auto ml-auto"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </InputComponent>

                    <Button className="ml-4" processing={processing}>
                        Log in
                    </Button>

             </form>
        </Wrapper>
     );
 }

 const Wrapper = styled.div`
   h1 {
       color: rebeccapurple;
       font-weight: bold;
       font-size: 40px;
       margin-bottom: 20px;
   }
    box-shadow: 10px 10px 10px lightgray;
    padding: 30px;
    width: 30%;
    height: auto;
    border:1px solid gray;
    border-radius: 20px;
    margin: 220px auto;
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
 `;

const InputComponent = styled.div`
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;

    Label {
    color: rebeccapurple;
    font-size: 22px;
    margin-bottom: 10px;
    }

    Input {
        margin-bottom: 10px;
    }
`;
