import { TextInput } from '@/packs/ui-kits/inputs/text-input';
import { useFormContext } from 'react-hook-form';
import { ContactFormState } from './definition';
import { css } from '@kuma-ui/core';
import { RadioGroup } from './radio-group';
import { Button } from '@/packs/ui-kits/buttons/custom-button';

export const FormInputs = (): JsxElement => {
  const { setValue, trigger, watch } = useFormContext<ContactFormState>();

  const name = watch('name');
  const surname = watch('surname');
  const email = watch('email');
  const phone = watch('phone');
  const message = watch('message');
  const onNameChange = (value: string) => {
    trigger('name');
    setValue('name', value);
  };
  const onSurnameChange = (value: string) => {
    trigger('surname');
    setValue('surname', value);
  };
  const onEmailChange = (value: string) => {
    trigger('email');
    setValue('email', value);
  };
  const onPhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    trigger('phone');
    setValue('phone', formattedValue);
  };
  const onMessageChange = (value: string) => {
    trigger('message');
    setValue('message', value);
  };

  return (
    <div className={mainClass}>
      <div className={rowClass}>
        <TextInput placeholder="Jhon" label="First Name" value={name} onChange={onNameChange} />
        <TextInput placeholder="Doe" label="Last Name" value={surname} onChange={onSurnameChange} />
      </div>
      <div className={rowClass}>
        <TextInput type="email" label="Email" value={email} onChange={onEmailChange} />
        <TextInput type="tel" label="Phone Number" value={phone} onChange={onPhoneChange} />
      </div>
      <RadioGroup />
      <TextInput placeholder="Write your message.." label="Message" value={message} onChange={onMessageChange} />
      <div className="flex justify-end max-md:justify-center max-md:pb-[30px] ">
        <Button className="max-md:w-full" type="submit">
          Send Message
        </Button>
      </div>
    </div>
  );
};
const rowClass = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 39px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const mainClass = css`
  display: flex;
  flex-direction: column;
  gap: 49px;
  @media (max-width: 800px) {
    gap: 20px;
  }
`;

const formatPhoneNumber = (input: string) => {
  let numbers = input.replace(/\D/g, '');

  if (!numbers.startsWith('1')) {
    numbers = '1' + numbers;
  }

  numbers = numbers.substring(0, 11);

  const formatted =
    '+1 ' +
    (numbers.substring(1, 4) || '') +
    (numbers.length > 4 ? ' ' + numbers.substring(4, 8) : '') +
    (numbers.length > 8 ? ' ' + numbers.substring(8) : '');

  return formatted.trim();
};
