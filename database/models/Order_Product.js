module.exports = (sequelize, dataTypes) => {
    const OrderProduct = sequelize.define ('order_product', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            order_id:{
                type: dataTypes.INTEGER,
                allowNull: false
            },
            product_id:{
                type: dataTypes.INTEGER,
                allowNull: false
            },
            quantity:{
                type: dataTypes.INTEGER,
                allowNull: false
            },
            purchase_price:{
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
            tableName: 'cupons',
            underscored: true,
            timestamps: true
        }
    );
    OrderProduct.associate = function (models){
        OrderProduct.belongsTo (models.orders, {
            as: 'orders',
            foreignKey: "order_id"
        })
    };
    OrderProduct.associate = function (models){
        OrderProduct.belongsTo (models.products, {
            as: 'products',
            foreignKey: "product_id"
        })
    };
    return OrderProduct;
};