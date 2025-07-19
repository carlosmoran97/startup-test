import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SitioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  direccion: string;

  @Column()
  url: string;

  @Column({ default: 0 })
  likes: number;
}
