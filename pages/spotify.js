import Link from 'next/link';

const Spotify = () => {

    const endpoint = 'https://accounts.spotify.com/authorize';
    const redirect = 'http://localhost:3000/callback';
    const cliendId = '6500a893d198432a8511599a60ac8ae3';

    const scopes = ["playlist-read-private", "user-top-read", "user-read-recently-played"];
    
    const url = `${endpoint}?client_id=${cliendId}&redirect_uri=${redirect}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

    return (

        <div className='h-screen w-full flex flex-col items-center justify-center bg-black space-y-10 select-none'>
            <div className='w-96 h-screen flex flex-col items-center justify-center space-y-10'>
                <p className='text-white font-semibold text-4xl text-center'>Log into your streaming service</p>
                <Link className='bg-[#1ed760] h-16 w-full rounded-full flex items-center justify-center space-x-2' href={url}>
                    <p className='text-black font-bold text-xl uppercase flex items-center'>
                        Spotify
                    </p>
                </Link>
            </div>
        </div>

    )

}

export default Spotify;