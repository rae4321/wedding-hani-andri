import { i, image } from "framer-motion/client";

export default image;

import bank1 from './assets/bank/mandiri.png';
import bank2 from './assets/bank/bca.png';
import bank3 from './assets/bank/dana.png';

export const listbank = [
    {id: 1, tipe: 'Bank Mandiri', nomor: '157000xxxxxx', atasNama: 'Nama Mempelai Pria', logo: bank1},
    {id: 2, tipe: 'Bank BCA', nomor: '8690xxxxxx', atasNama: 'Nama Mempelai Wanita', logo: bank2},
    {id: 3, tipe: 'E-Wallet DANA / OVO', nomor: '081234567890', atasNama: 'Nama Mempelai', logo: bank3}
];

import Kado1 from './assets/kado/kado.png';

export const listKado = [
    {id: 1, alamatKado: 'jl. Mawar No. 123, Jakarta', logo: Kado1}
];