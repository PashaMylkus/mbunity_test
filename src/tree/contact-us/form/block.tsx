'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { ContactFormState } from './definition';
import { FormInputs } from './inputs';
import Image from 'next/image';
import LeterImgUrl from '../assets/letter_send.png';
import { css } from '@kuma-ui/core';

export const ContactForm = (): JsxElement => {
  const methods = useForm<ContactFormState>({
    defaultValues: {
      name: '',
      surname: '',
      subject: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormState) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className="p-[50px] max-w-full flex-[2] relative overflow-hidden" onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInputs />
        <div className={leterImgClass}>
          <Image width={LeterImgUrl.width} height={112} src={LeterImgUrl.src} alt="leter" />
        </div>
      </form>
    </FormProvider>
  );
};

const leterImgClass = css`
  height: 112px;
  position: absolute;
  right: 100px;
  bottom: 23px;
`;
