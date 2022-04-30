import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router'
import Image from 'next/image';

loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
  const router = useRouter();
  const { success, canceled } = router.query;
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if(success !== undefined || canceled !== undefined) {
    if (success) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (canceled) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }
  }, [success, canceled]);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <div className="text-3xl my-4 text-orange-600">Hii ayisha</div>
      <div className="text-xl mb-2 text-amber-900">Please purchase this robo image of 10 rs</div>
      <div className="text-sm font-semibold mb-2">I will return the money back in few hours</div>
      <div className="p-5">

              <Image src="https://stripe-camo.global.ssl.fastly.net/05275f145ee7ebe3bf6b4050f72c6b76e640fca9695daefb0be31db184119350/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333564564306454525577304e6b7845627a677766475a7358327870646d5666626c4a366233644f4e47686b62586b7761486c7a6545784e567a51335330353230305556336959557738" height={300} width={350}></Image>
      </div>
      <div className="font-semibold text-lg mb-2 mx-6">Price: 10 Rs</div>
      <section>
        <button className="mx-3" type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}