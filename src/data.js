import { i, image } from "framer-motion/client";

export default image;

import bank1 from './assets/bank/mandiri.png';
import bank2 from './assets/bank/bni.png';


export const listbank = [
    {id: 1, tipe: 'Bank Mandiri', nomor: '1220011501197', atasNama: 'Nur Khanifah', logo: bank1},
    {id: 2, tipe: 'Bank BNI', nomor: '1827020271', atasNama: 'Andri Yulianto', logo: bank2},
];

import Kado1 from './assets/kado/kado.png';

export const listKado = [
    {id: 1, alamatKado: 'jl. Mawar No. 123, Jakarta', logo: Kado1}
];