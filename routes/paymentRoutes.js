import express from 'express'
import { isAuthenticated } from '../middlewares/Auth.js';
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from '../controllers/paymentController.js';

const router=express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubscription)

//VERIFY PAYMENT AND SAVE REFERENCE IN DATA BASE
router.route("/paymentverification").post(isAuthenticated,paymentVerification)

//GET RAZOR PAY KEY
router.route("/razorpaykey").get(getRazorPayKey)

//cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription)


export default router;