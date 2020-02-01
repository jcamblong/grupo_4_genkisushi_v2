module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define ('users', 
        {
            id: {
                type: dataTypes.autoIncrement,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            first_name: {
                type: dataTypes.STRING,
                allowNull: false
            }, 
            last_name: {
                type: dataTypes.STRING,
                allowNull: false
            }, 
            role_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            }, 
            email: {
                type: dataTypes.STRING,
                allowNull: false
            },
            password:{
                type: dataTypes.STRING,
                allowNull: false
            },
            phone:{
                type: dataTypes.STRING,
                allowNull: false
                },
            city: {
                type: dataTypes.STRING
            },
            street_name: {
                type: dataTypes.STRING
            },
            street_number: {
                type: dataTypes.INTEGER
            },
            street2: {
                type: dataTypes.STRING
            },
            neighborhood: {
                type: dataTypes.STRING
            },
            created_at: {
                type: dataTypes.DATE
            },
            updated_at: {
                type: dataTypes.DATE
            }
        }, 
        {
            tableName: 'users',
            underscored: true,
            timestamps: true
        }
    );
    User.associate = function (models){
        User.hasMany(models.orders, {
            as: 'orders',
            foreignKey: "user_id"
        })
    }
    User.associate = function (models){
        User.belongsTo(models.roles, {
            as: 'roles',
            foreignKey: "role_id"
        })
    }
    return User;
}