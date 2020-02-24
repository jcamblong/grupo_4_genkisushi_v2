module.exports = (sequelize, dataTypes) => {
    const OrderStatus = sequelize.define ('order_statuses', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            created_at: {
                type: dataTypes.DATE
            },
            updated_at: {
                type: dataTypes.DATE
            }
        }, 
        {
            tableName: 'order_statuses',
            underscored: true,
            timestamps: true
        }
    );
    OrderStatus.associate = function (models){
        OrderStatus.hasMany (models.orders, {
            as: 'orders',
            foreignKey: "order_status_id"
        })
    }
    return OrderStatus;
}