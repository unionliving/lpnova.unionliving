import { Check, X } from 'lucide-react';
const WhyChooseUs = () => {
    const features = [
        {
            name: 'Fully Furnished Rooms',
            description: 'Ready to move-in with bed, wardrobe, study table',
            unionLiving: true,
            traditionalPG: false,
        },
        {
            name: 'High-Speed WiFi',
            description: 'Unlimited 100 Mbps internet for seamless studying',
            unionLiving: true,
            traditionalPG: false,
        },
        {
            name: 'Daily Housekeeping',
            description: 'Professional cleaning staff for common areas',
            unionLiving: true,
            traditionalPG: false,
        },
        {
            name: '24/7 Security',
            description: 'CCTV surveillance and security guards',
            unionLiving: true,
            traditionalPG: true,
        },
        {
            name: 'Community Events',
            description: 'Regular networking and fun activities',
            unionLiving: true,
            traditionalPG: false,
        },
        {
            name: 'App-Based Services',
            description: 'Raise complaints, pay rent, book amenities',
            unionLiving: true,
            traditionalPG: false,
        },
    ];
    return (<section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex rounded-[8px] bg-[#efe3d2] px-6 py-2.5 text-[13px] font-medium text-[#f26922] sm:px-8 sm:text-[14px]">
            Why Choose Us
          </span>
          <h2 className="mx-auto mt-5 max-w-[760px] text-[2rem] font-bold leading-[1.06] tracking-[-0.05em] text-black sm:text-[2.35rem] md:text-[3.05rem]">
            Union Living vs Traditional PG
          </h2>
          <p className="mx-auto mt-5 max-w-[610px] text-[14px] leading-[1.35] text-[#252525] md:mt-6 md:text-[18px]">
            See why thousands of students prefer Union Living over conventional paying guest accommodations.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[700px] overflow-x-auto">
          <div className="min-w-[620px]">
          <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr] items-center gap-3 px-2">
            <div className="text-[10px] font-medium text-[#9f9f9f] md:text-[11px]">Features</div>
            <div className="text-center">
              <span className="inline-flex min-w-[132px] items-center justify-center rounded-[8px] bg-[#de5a28] px-4 py-3 text-[12px] font-semibold text-white md:min-w-[160px] md:text-[13px]">
                Union Living
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex min-w-[132px] items-center justify-center rounded-[8px] bg-[#f1f2f8] px-4 py-3 text-[12px] font-semibold text-[#334155] md:min-w-[160px] md:text-[13px]">
                Traditional PG
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-3">
            {features.map((feature, index) => {
            const isHighlighted = index === 0;
            return (<div key={index} className={`grid grid-cols-[1.45fr_0.8fr_0.8fr] items-center gap-3 rounded-[10px] px-3 py-3 md:px-4 ${isHighlighted ? 'bg-[#f4f1ff]' : 'bg-[#f8f8f8]'}`}>
                <div>
                  <p className="text-[13px] font-bold leading-[1.15] text-[#263247] md:text-[14px]">{feature.name}</p>
                  <p className="mt-1 text-[10px] leading-[1.18] text-[#7f8aa3] md:text-[10.5px]">{feature.description}</p>
                </div>
                <div className="flex justify-center">
                  {feature.unionLiving ? (<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dcfce7] md:h-7 md:w-7">
                      <Check className="h-4 w-4 text-[#55c77a]" strokeWidth={2.4}/>
                    </div>) : (<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fde2e2] md:h-7 md:w-7">
                      <X className="h-4 w-4 text-[#f28282]" strokeWidth={2.4}/>
                    </div>)}
                </div>
                <div className="flex justify-center">
                  {feature.traditionalPG ? (<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dcfce7] md:h-7 md:w-7">
                      <Check className="h-4 w-4 text-[#55c77a]" strokeWidth={2.4}/>
                    </div>) : (<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fde2e2] md:h-7 md:w-7">
                      <X className="h-4 w-4 text-[#f28282]" strokeWidth={2.4}/>
                    </div>)}
                </div>
              </div>);
        })}
          </div>
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12">
          <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))} className="inline-flex min-w-[122px] items-center justify-center rounded-[8px] bg-[#f97316] px-7 py-3 text-[15px] font-medium text-white shadow-[5px_6px_0_rgba(0,0,0,0.12)] transition-colors hover:bg-[#ea580c]">
            Book Now
          </button>
        </div>
      </div>
    </section>);
};
export default WhyChooseUs;
