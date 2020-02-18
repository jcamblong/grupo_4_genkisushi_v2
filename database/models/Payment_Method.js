module.exports = (sequelize, dataTypes) => {
    const PaymentMethod = sequelize.define ('payment_methods', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            type: {
                type: dataTypes.STRING,
                allowNull: false
            }, 
        }, 
        {
            tableName: 'payment_methods',
            underscored: true,
            timestamps: true
        }
    );
    PaymentMethod.associate = function (models){
        PaymentMethod.hasMany (models.orders, {
            as: 'orders',
            foreignKey: "payment_method_id"
        })
    }
    return PaymentMethod;
}