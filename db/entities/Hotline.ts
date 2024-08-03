import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,OneToOne} from "typeorm"
import { Shop } from "./Shop.js"
import bcrypt from "bcrypt"

@Entity("hotline")
export class Hotline extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    @Column({})
    id: number;


    @Column({})
    hotlineNumber : number;

  

    @OneToOne(() => Shop,shop => shop.hotline)
    shop:Shop[]
}