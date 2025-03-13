import { Container } from '@/packs/ui-kits/container/container';
import { InfoBlock } from './info/block';
import { ContactForm } from './form/block';

export const ContactPage = (): JsxElement => {
  return (
    <Container className="pt-[79px] mb-[50px] font-[family-name:var(--font-poppins)] flex items-center flex-col max-md:pt-[40px]">
      <h1 className="text-black  text-[40px] font-bold leading-[60px] max-md:text-[24px]">Contact Us</h1>
      <p className="text-[rgb(113,_113,_113)]  text-[18px] font-medium  pt-[5px] max-md:text-[14px] max-md:max-w-[184px] max-md:pt-0">
        Any question or remarks? Just write us a message!
      </p>
      <div className="mt-[50px] p-[10px] w-full rounded-[10px] [box-shadow:0px_0px_60px_30px_rgba(0,_0,_0,_0.03)] bg-[rgb(255,_255,_255)] flex max-md:mt-[20px] max-md:flex-col">
        <InfoBlock />
        <ContactForm />
      </div>
    </Container>
  );
};
