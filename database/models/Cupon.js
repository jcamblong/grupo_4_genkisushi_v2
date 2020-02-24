module.exports = (sequelize, dataTypes) => {
    const Cupon = sequelize.define ('cupons', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            detail: {
                type: dataTypes.STRING,
                allowNull: false
            }, 
            discount: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            due_date: {
                type: dataTypes.DATE,
                allowNull: false
            },
            valid: {
                type: dataTypes.INTEGER,
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
            tableName: 'cupons',
            underscored: true,
            timestamps: true
        }
    );
    Cupon.associate = function (models){
        Cupon.hasMany (models.orders, {
            as: 'orders',
            foreignKey: "cupon_id"
        })
    };
    return Cupon;
};