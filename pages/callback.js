import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Callback = () => {

    const router = useRouter();
    const { asPath } = useRouter();
    const access_token = asPath.slice(23, -34);

    const [cookie, setCookie] = useCookies(['access_token']);

    useEffect(() => {

        setCookie('access_token', access_token, { path: '/', maxAge: 3600 });
        router.push('/')

    });

    return (

        <div>

        </div>

    );

};

export default Callback;