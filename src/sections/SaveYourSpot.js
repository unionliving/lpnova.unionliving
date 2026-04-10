import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { submitLeadSquaredLead } from '../lib/leadSquared';

const STEPS = ['name', 'phone', 'email', 'college', 'budget'];

const BUDGET_OPTIONS = [
  { label: '0-10k', value: '10000' },
  { label: '11k-15k', value: '15000' },
  { label: '16k-20k', value: '20000' },
  { label: '21k-25k', value: '25000' },
];

const SaveYourSpot = () => {
  const [step, setStep] = useState('name');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    budget: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setError('');
  };

  const currentIndex = STEPS.indexOf(step);

  const submitToLeadSquared = async () => {
    setIsSubmitting(true);
    try {
      const payload = [
        { Attribute: 'FirstName',                  Value: form.name },
        { Attribute: 'Phone',                       Value: form.phone },
        { Attribute: 'EmailAddress',                Value: form.email },
        { Attribute: 'mx_College_or_Company_Name',  Value: form.college },
        { Attribute: 'mx_Monthly_Budget',           Value: form.budget },
        { Attribute: 'Source',                      Value: 'Ruturaj Nova Landing Page' },
        { Attribute: 'SearchBy',                    Value: 'Phone' },
      ];

      const { response, result } = await submitLeadSquaredLead(payload);

      if (response.ok && result?.Status === 'Success') {
        if (result?.Message) {
          console.log('Lead Created/Updated:', {
            Id: result.Message.Id,
            RelatedId: result.Message.RelatedId,
            IsCreated: result.Message.IsCreated,
          });
        }
        // Meta Pixel
        if (window.fbq) window.fbq('trackCustom', 'Form_Submit');
        // Google Ads conversion
        if (window.gtag) window.gtag('event', 'conversion', {
          send_to: 'AW-11425120901/9ZMYCIbzufsbEIWF9scq',
          value: 1.0,
          currency: 'INR',
        });
        setStep('done');
      } else {
        setError('Submission failed: ' + (result?.ExceptionMessage || response.statusText || 'Unknown error'));
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    setError('');

    if (step === 'name') {
      if (!form.name.trim()) {
        setError('Please enter your full name');
        return;
      }
      setStep('phone');
      return;
    }

    if (step === 'phone') {
      if (form.phone.replace(/\D/g, '').length < 10) {
        setError('Enter a valid 10-digit mobile number');
        return;
      }
      setStep('email');
      return;
    }

    if (step === 'email') {
      if (!form.email.includes('@') || !form.email.includes('.')) {
        setError('Please enter a valid email address');
        return;
      }
      setStep('college');
      return;
    }

    if (step === 'college') {
      if (!form.college.trim()) {
        setError('Please enter your college / university / company');
        return;
      }
      setStep('budget');
      return;
    }

    if (step === 'budget') {
      if (!form.budget) {
        setError('Please select your monthly budget');
        return;
      }
      submitToLeadSquared();
      return;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleContinue();
    }
  };

  const stepQuestion = () => {
    if (step === 'name') return 'What is your full name?';
    if (step === 'phone') return 'What is your phone number?';
    if (step === 'email') return 'What is your email address?';
    if (step === 'college') return 'Your College / University / Company?';
    if (step === 'budget') return 'What is your monthly budget?';
    return '';
  };

  const stepSubLabel = () => {
    if (step === 'name') return 'Please enter your full name';
    if (step === 'phone') return 'Enter your 10-digit mobile number';
    if (step === 'email') return 'Please enter your email address';
    if (step === 'college') return 'Enter your college or university';
    if (step === 'budget') return 'Please choose an option';
    return '';
  };

  const buttonLabel = () => {
    if (step === 'budget') return isSubmitting ? 'Submitting...' : 'Submit';
    return 'Continue';
  };

  return (
    <section id="book" className="bg-[#f3ebdd] py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-[600px_50px_1fr_364px] lg:gap-0 xl:px-1">
          <div className="overflow-hidden rounded-[18px] lg:mt-[4px]">
            <img
              src="/save-spot.jpg"
              alt="Students enjoying a game night"
              className="h-[380px] w-full object-cover object-center md:h-[440px] lg:h-[600px]"
            />
          </div>

          <div className="hidden lg:block" />

          <div className="flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left lg:max-w-[240px] lg:pt-[52px]">
            <h2 className="font-display text-[3.15rem] uppercase leading-[0.9] !tracking-[5px] text-black sm:text-[4.6rem] lg:text-[4.5rem]">
              <span className="block">Save</span>
              <span className="block">Your</span>
              <span className="block">Spot</span>
            </h2>
            <p className="mt-7 max-w-[250px] text-[17px] leading-[1.35] text-[#2a251e] lg:max-w-[250px]">
              A lifestyle filled with networking, workshops, seminars, and housing made convenient.
            </p>
          </div>

          <div className="rounded-[16px] bg-white px-8 py-8 shadow-sm sm:px-10 lg:min-h-[606px] lg:px-10 lg:py-10">
            <div className="mx-auto max-w-[320px]">
              <div className="text-center">
                <p className="text-[22px] font-semibold tracking-[-0.03em] text-[#1a1814]">Get Free Consultation                </p>

                <div className="mx-auto mt-6 flex w-full max-w-[200px] items-center gap-[6px]">
                  {STEPS.map((currentStep, index) => {
                    const done = step === 'done' || index < currentIndex;
                    const active = index === currentIndex;

                    return (
                      <span
                        key={currentStep}
                        className="flex-1 rounded-full transition-all duration-300"
                        style={{
                          height: done || active ? '3px' : '1.5px',
                          backgroundColor: done || active ? '#f97316' : '#ddd6cc',
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {step !== 'done' ? (
                <div className="mt-9">
                  <p className="text-center text-[17px] font-bold leading-[1.3] text-[#1a1814]">
                    {stepQuestion()}
                  </p>

                  <p className="mt-3 text-center text-[13px] text-[#7a7570]">{stepSubLabel()}</p>

                  <div className="mt-6 space-y-[10px]">
                    {step === 'name' && (
                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) => update('name', event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. Rahul Sharma"
                        autoFocus
                        className="flex h-[52px] w-full items-center justify-center rounded-[8px] border border-[#e8e2da] bg-white px-4 text-center text-[14px] font-semibold text-[#2a251e] placeholder-[#bfb9b1] outline-none transition-colors focus:border-[#f97316] focus:bg-[#fffaf7]"
                      />
                    )}

                    {step === 'phone' && (
                      <div className="flex h-[52px] overflow-hidden rounded-[8px] border border-[#e8e2da] bg-white transition-colors focus-within:border-[#f97316] focus-within:bg-[#fffaf7]">
                        <span className="flex shrink-0 items-center border-r border-[#e8e2da] bg-[#f9f6f2] px-3 text-[13px] font-semibold text-[#5a5550]">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          value={form.phone}
                          onChange={(event) => update('phone', event.target.value.replace(/\D/g, ''))}
                          onKeyDown={handleKeyDown}
                          placeholder="10-digit mobile number"
                          autoFocus
                          className="flex-1 bg-transparent px-3 text-center text-[14px] font-semibold text-[#2a251e] placeholder-[#bfb9b1] outline-none"
                        />
                      </div>
                    )}

                    {step === 'email' && (
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) => update('email', event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="you@example.com"
                        autoFocus
                        className="flex h-[52px] w-full items-center justify-center rounded-[8px] border border-[#e8e2da] bg-white px-4 text-center text-[14px] font-semibold text-[#2a251e] placeholder-[#bfb9b1] outline-none transition-colors focus:border-[#f97316] focus:bg-[#fffaf7]"
                      />
                    )}

                    {step === 'college' && (
                      <input
                        type="text"
                        value={form.college}
                        onChange={(event) => update('college', event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your college or university"
                        autoFocus
                        className="flex h-[52px] w-full items-center justify-center rounded-[8px] border border-[#e8e2da] bg-white px-4 text-center text-[14px] font-semibold text-[#2a251e] placeholder-[#bfb9b1] outline-none transition-colors focus:border-[#f97316] focus:bg-[#fffaf7]"
                      />
                    )}

                    {step === 'budget' && (
                      <div>
                        {BUDGET_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => update('budget', option.value)}
                            className={`mb-[10px] flex h-[52px] w-full items-center justify-center rounded-[8px] border text-[14px] font-semibold transition-colors ${
                              form.budget === option.value
                                ? 'border-[#f97316] bg-[#fff5f0] text-[#2a251e]'
                                : 'border-[#e8e2da] bg-white text-[#2a251e] hover:border-[#f9c4aa]'
                            }`}
                          >
                            Rs. {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {error && <p className="mt-3 text-center text-[11px] text-red-500">{error}</p>}

                  <p className="mx-auto mt-8 max-w-[280px] text-center text-[13px] leading-[1.5] text-[#7a7570]">
                    No matter how long you&apos;re staying, you&apos;ll feel right at home.
                  </p>

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={isSubmitting}
                    className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#f97316] text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6b0a] disabled:opacity-60"
                  >
                    {buttonLabel()}
                    {!isSubmitting && <ArrowRight size={16} />}
                  </button>

                  <p className="mt-4 text-center text-[11px] text-[#bfb9b1]">
                    Step {currentIndex + 1} of {STEPS.length}
                  </p>
                </div>
              ) : (
                <div className="mt-9 text-center">
                  <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ddf9e4]">
                    <Check className="h-9 w-9 text-[#18a957]" strokeWidth={2.4} />
                  </div>
                  <p className="mt-7 text-[1.85rem] font-semibold leading-none text-[#182033]">
                    Enquiry submitted
                  </p>
                  <p className="mx-auto mt-4 max-w-[320px] text-[1rem] leading-relaxed text-[#767c88]">
                    Our team will reach out shortly
                  </p>
                  <div className="hidden mt-6 rounded-[8px] border border-[#e8e2da] bg-[#faf7f3] px-5 py-4 text-left">
                    {[
                      ['Name', form.name],
                      ['Phone', `+91 ${form.phone} ✓`],
                      ['Email', form.email],
                      ['College', form.college],
                      ['Budget', `Rs. ${form.budget}/mo`],
                    ].map(([label, value]) => (
                      <div key={label} className="mb-2 flex items-baseline justify-between gap-3 last:mb-0">
                        <span className="shrink-0 text-[11px] text-[#9f9a94]">{label}</span>
                        <span className="truncate text-right text-[12px] font-semibold text-[#2a251e]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:mt-10">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
            className="inline-flex min-w-[160px] items-center justify-center rounded-[10px] bg-[#f97316] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_6px_0_rgba(180,80,0,0.25)] transition-colors hover:bg-[#ea6b0a]"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaveYourSpot;
