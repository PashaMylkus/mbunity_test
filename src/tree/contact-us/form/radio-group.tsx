import { css } from '@kuma-ui/core';
import { useFormContext } from 'react-hook-form';
import { ContactFormState } from './definition';
import { Radio } from '@/packs/ui-kits/inputs/radio';

const radio_item = [
  { label: 'General Inquiry', value: '1' },
  { label: 'General Inquiry', value: '2' },
  { label: 'General Inquiry', value: '3' },
  { label: 'General Inquiry', value: '4' },
];

export const RadioGroup = (): JsxElement => {
  const { setValue, trigger, watch } = useFormContext<ContactFormState>();
  const subject = watch('subject');

  const onChange = (value: string) => {
    trigger('subject');
    setValue('subject', value);
  };
  return (
    <div className="flex flex-col items-start gap-[14px]">
      <div className={titleClass}>Select Subject?</div>
      <div className="flex items-center justify-start gap-[20px]">
        {radio_item.map((item) => (
          <Radio key={item.value} name="example" label={item.label} value={item.value} checked={subject === item.value} onChange={onChange} />
        ))}
      </div>
    </div>
  );
};
const titleClass = css`
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
