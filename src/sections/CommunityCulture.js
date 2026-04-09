const CommunityCulture = () => {
    return (<section id="community" className="overflow-hidden bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="community-artboard relative mx-auto hidden aspect-[1280/820] w-full md:block">
          <div className="community-copy left-[2.6%] top-[2.5%]">Experi</div>
          <div className="community-copy left-[67.4%] top-[1.3%]">ence</div>
          <div className="community-copy left-[28.4%] top-[25.2%]">Community</div>
          <div className="community-copy left-[2%] top-[47.3%]">Culture</div>
          <div className="community-copy left-[79.2%] top-[47.7%]">At</div>
          <div className="community-copy left-[23.6%] top-[67.6%]">Union Living</div>

          <div className="community-tile left-[39%] top-[2.5%] h-[18%] w-[26%]">
            <img src="/assets/community-1.jpeg" alt="Union Living community gathering" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[2.0%] top-[24.6%] h-[16.4%] w-[11.1%]">
            <img src="/assets/community-2.jpeg" alt="Community dinner outdoors" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[14.4%] top-[24.6%] h-[16.6%] w-[11.2%]">
            <img src="/assets/community-3.jpeg" alt="Residents gathering on a terrace" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[44.2%] top-[45.3%] h-[16.8%] w-[20.2%]">
            <img src="/assets/community-5.png" alt="Shared workspace and events area" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[65.9%] top-[45.3%] h-[16.8%] w-[11.3%]">
            <img src="/assets/community-6.png" alt="Talk or workshop session" className="h-full w-full object-cover"/>
          </div>

          <div className="community-tile left-[2.0%] top-[67%] h-[16.6%] w-[20.2%]">
            <img src="/assets/community-6.png" alt="Residents playing games together" className="h-full w-full object-cover"/>
          </div>
        </div>

        <div className="community-mobile md:hidden">
          <h2 className="font-display text-center text-[2.35rem] leading-[0.92] tracking-[0.04em] text-[#ff5a0a] sm:text-[2.7rem]">
            Experience
            <br />
            Community
            <br />
            Culture At
            <br />
            Union Living
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="community-tile aspect-[1.1/1]">
              <img src="/assets/community-2.jpeg" alt="Community dinner outdoors" className="h-full w-full object-cover"/>
            </div>
            <div className="community-tile aspect-[1.1/1]">
              <img src="/assets/community-3.jpeg" alt="Residents gathering on a terrace" className="h-full w-full object-cover"/>
            </div>
            <div className="community-tile aspect-[1.25/1] col-span-2">
              <img src="/assets/community-1.jpeg" alt="Union Living community gathering" className="h-full w-full object-cover"/>
            </div>
            <div className="community-tile aspect-[1.35/1] col-span-2">
              <img src="/assets/community-5.png" alt="Shared workspace and events area" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12">
          <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))} className="inline-flex min-w-[152px] items-center justify-center rounded-[10px] bg-[#f97316] px-7 py-3 text-[16px] font-medium text-white shadow-[8px_8px_0_rgba(0,0,0,0.12)] transition-colors hover:bg-[#ea580c] sm:min-w-[176px] sm:px-9 sm:py-4 sm:text-[18px]">
            Book Now
          </button>
        </div>
      </div>
    </section>);
};
export default CommunityCulture;
