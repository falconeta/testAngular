import { Foto } from './foto';
export interface Album {
    userId: number;
    id: number;
    title: string;
    foto: Foto;
}
