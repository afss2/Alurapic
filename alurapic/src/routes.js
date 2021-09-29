import Cadastro from "@/components/cadastro/Cadastro";
import Home from "@/components/home/Home";
export const routes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/cadastro', component: Cadastro, title: 'Cadastro' },
];