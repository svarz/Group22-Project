export default (sequelize, DataTypes) => {
  const MealsLocation = sequelize.define(
    'MealsLocations',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return MealsLocation;
};
