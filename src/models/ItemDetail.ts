/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Item from './Item';
import User from './User';
import Retailer from './Retailer';

@Entity('items_details')
class ItemDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number;

  @ManyToOne(() => Item)
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @Column()
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  retailer_id: number;

  @ManyToOne(() => Retailer)
  @JoinColumn({ name: 'retailer_id' })
  retailer: Retailer;

  @Column()
  purchased_date: Date;

  @Column()
  expiration_date: Date;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ItemDetail;
