import { Post } from './post';
import { Album } from './album';
import { Comment } from './comment';
import { Foto } from './foto';
export class Modello {
     id: number;
     nome: string;
     veroFalso: boolean;
     numeroPost: number;
     numeroCommenti: number;
     numeroAlbum: number;
     numeroFoto: number;
     post: Post[];
     commenti: Comment[];
     album: Album[];
     foto: Foto[];
}
