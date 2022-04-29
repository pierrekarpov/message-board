import { Table, Model, Column, DataType } from "sequelize-typescript";



export interface MessageAttributes {
    content: string;
    userId: number;
}
@Table({
    paranoid: true,
    tableName: "Message",
})

export class Message extends Model<MessageAttributes> implements MessageAttributes {
    @Column({
        type: DataType.BLOB('medium'),
        allowNull: false,
    })
    content!: any;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;
}