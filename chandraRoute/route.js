import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Welcome to the group 22 database');
});

router.get('/Group22_Dining_Hall_Tracker', async (req, res) => {
	try {
		const halls = await db.DiningHall.findAll();
		const reply = halls.length > 0 ? { data: halls } : { message: 'no dining hall found' };
		res.json(reply);
  	} catch (err) {
    	console.error(err);
    	res.error('Server error');
	}
});

router.get('/Group22_Dining_Hall_Tracker/:hall_hours_id', async (req, res) => {
	try {
    	const hour = await db.HallHours.findAll({
      		where: {
        		hall_hours_id: req.params.hall_hours_id
      		}
    	});
    	res.json(hour);
  	} catch (err) {
    	console.error(err);
    	res.error('Server error');
  	}
});

export default router;