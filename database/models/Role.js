module.exports = (sequelize, dataTypes) => {
    const Role = sequelize.define ('roles', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            name: {
                type: dataTypes.STRING(45),
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
            tableName: 'roles',
            underscored: true,
            timestamps: true
        }
    );
    Role.associate = function (models){
        Role.hasMany (models.users, {
            as: 'users',
            foreignKey: "role_id"
        })
    }
    return Role;
}