import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,OneToOne } from "typeorm"
import { Product } from "./Product.js";
import {Hotline} from "./Hotline.js"

@Entity("shop")
export class Shop extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({})
    shopName : string;

    @Column({})
    email : string;

    @Column({})
    password : string;

  @OneToMany(() => Product,product => product.shop)
    product:Partial<Product>

  @OneToOne(() => Hotline, hotline => hotline.shop)
    hotline:Partial<Hotline>
}