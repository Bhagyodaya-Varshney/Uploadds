import { Stripe } from 'stripe';


const stripe = new Stripe(sk_test_51PfZoELWLxwu0EBOTUMoWmpeL5F6lI9M2iZzvlDYROyjWZG8R6cGglugS8OO7KCB3mqQmo6kf6LDFYyv54aUi4qR00M6O2QtUE);

export const paymentIntegration  = async(req,res) =>{
    const {id} = req.body;
    try{
        const paymentIntent = await stripe.paymentIntents.create(
            {
                amount:"29",
                currency:"inr",
                
            }
        )
    }
    catch(e){
        res.status(500).send({error:e.message})
    } 
}