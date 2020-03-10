module.exports = (sequelize, dataTypes) => {
    const Order = sequelize.define ('orders', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            }, 
            purchase_date: {
                type: dataTypes.DATE
            },
            payment_method_id:{
                type: dataTypes.INTEGER,
                allowNull: false
            },
            order_status_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            cupon_id:{
                type: dataTypes.INTEGER,
                allowNull: false
            },
            purchase_total:{
                type: dataTypes.DECIMAL

            },
            created_at: {
                type: dataTypes.DATE
            },
            updated_at: {
                type: dataTypes.DATE
            }
        }, 
        {
            tableName: 'orders',
            underscored: true,
            timestamps: true
        }
    );
    Order.associate = function (models){
        Order.belongsTo (models.payment_methods, {
            as: 'payment_methods',
            foreignKey: "payment_methods_id"
        })
        Order.belongsTo (models.users, {
            as: 'users',
            foreignKey: "user_id"
        })
        Order.belongsTo (models.order_statuses, {
            as: 'order_statuses',
            foreignKey: "order_status_id"
        })
        Order.belongsTo (models.cupons, {
            as: 'cupons',
            foreignKey: "cupon_id"
        })
        Order.hasMany (models.order_product, {
            as: 'order_product',
            foreignKey: "order_id"
        })
    };

    return Order;
}