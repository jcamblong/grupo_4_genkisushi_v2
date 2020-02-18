module.exports = (sequelize, dataTypes) => {
    const Order = sequelize.define ('orders', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            order_number: {
                type: dataTypes.INTEGER,
                allowNull: false
            }, 
            user_id: {
                type: dataTypes.INTEGER,
                allowNull: true
            }, 
            product_id: {
                type: dataTypes.INTEGER
            }, 
            date: {
                type: dataTypes.DATE
            },
            payment_method_id:{
                type: dataTypes.INTEGER
            },
            order_status: {
                type: dataTypes.STRING
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
    }
    Order.associate = function (models){
        Order.belongsTo (models.User, {
            as: 'users',
            foreignKey: "user_id"
        })
    }
    return Order;
}