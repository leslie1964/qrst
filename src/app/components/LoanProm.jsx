import Image from 'next/image';
import One from '../../../public/assets/asian-father-daughter-phone.jpg'
import Two from '../../../public/assets/woman-with-dog-improving-credit-score.jpg'
import Three from '../../../public/assets/family-in-kitchen.jpg'

export default function LoanPromoSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  p-8 pb-0 bg-gray-50">
      {/* Pre-qualifying Section */}
      <div className="flex flex-col justify-center">
        <h4 className="text-sm font-semibold text-gray-600">Credit Card & Loan Rates</h4>
        <h2 className="text-2xl font-bold text-[#13254B] mt-1 mb-2">Pre-qualifying is pre-tty easy!</h2>
        <p className="text-sm italic text-gray-600 mb-1">Find your best loan rate without affecting your credit.</p>
        <p className="text-sm text-gray-700 mb-4">
          See your personalized offers for a car loan, personal loan, or even a credit card in minutes! Plus,
          getting to know your buying power pays off by saving you money in the long run. Don’t wait!
        </p>
        <button className="bg-[#13254B] text-white px-4 py-2 rounded-full w-fit">Get my rate</button>
      </div>
      <div className="relative w-full h-64 md:h-auto">
        <Image
          src={One}
          alt="Woman checking credit score"
          className="h-[60vh]"
        />
      </div>

      {/* Credit Score Member Section */}
        <div className="relative w-full h-64 md:h-auto">
        <Image
          src={Two}
          alt="Woman checking credit score"
          className="h-[60vh]"
        />
      </div>
      <div className="flex flex-col justify-center p-8">
        <h4 className="text-sm font-semibold text-gray-600">Monthly Sweepstakes</h4>
        <h2 className="text-2xl font-bold text-[#13254B] mt-1 mb-2">
          Could you be our Credit Score Member of the Month?
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Increasing your score by 5 or more points could lead to better offers, lower rates, and a chance to win
          $1,000* towards paying down your BayPort debt!
        </p>
        <button className="bg-[#13254B] text-white px-4 py-2 rounded-full w-fit">How to win</button>
      </div>

      {/* Promotional Rate Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold text-[#13254B] mb-2">
          Love your home 100% with a 3.99% APR* promotional rate!
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Most financial institutions cap your borrowing at 80% of your home’s equity—but not BayPort! We let you borrow up to 100%, giving you full access to your home’s value when you need it.
        </p>
        <button className="bg-[#13254B] text-white px-4 py-2 rounded-full w-fit mb-2">Apply now</button>
        <p className="text-xs italic text-gray-600">Use promo code <strong>EQUITY</strong></p>
        <p className="text-[10px] text-gray-500 mt-2">
          *Certain restrictions and terms may apply. Interest rates are subject to change without notice. The promotional rate of 3.99% is good for 9 months once an advance has been made during the promotional period of April 1 – June 30, 2025.
          As of March 31, 2025, rates following the promotion period are 6.49–11.04% based on creditworthiness. Call or check our website for updated rates.
        </p>
      </div>
     <div className="relative w-full h-64 md:h-auto">
        <Image
          src={Three}
          alt="Woman checking credit score"
          className="h-[60vh]"
        />
      </div>
    </section>
  );
}