import ListSongs from './components/listSongComponent';
import User from './components/userComponent';
import RegisterLogin from './components/registerLoginComponent';

const routes = [
    { path: '/', component: ListSongs },
    { path: '/mymusic', component: User },
    { path: '/registerLogin', component: RegisterLogin },

    // children: [
    // { path: 'profile', component: BarProfile }, 
    // { path: 'post', component: BarPost },
    // ]
]
export default routes;