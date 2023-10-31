import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GrupoInterface } from "../interfaces/grupo.interface";

@Entity()
export class GrupoEntity implements GrupoInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 90 })
    nome: string

    @Column({ length: 90 })
    detalhes: string;
}