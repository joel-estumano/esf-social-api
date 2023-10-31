import { GrupoInterface } from "../interfaces/grupo.interface"

export class GrupoCreateDto implements GrupoInterface {
    nome: string
    detalhes: string
}