import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormValues {
  firstName: string;
  email: string;
  password: string;
  repeatPassword: string;
  city: string;
  gender: string;
  color: string[];
  textMessage: string;
}

export const BasicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      repeatPassword: '',
      city: '',
      gender: '',
      color: [],
      textMessage: '',
    },
  });

  // Slaptažodžių sutapimo tikrinimas formoje
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit: SubmitHandler<IFormValues> = (formData) => {
    console.log(formData);
  };

  return (
    <form
      className="max-w-md border rounded-lg mx-auto p-2"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex flex-col gap-2">
        {/* Info blokas */}
        <div className="h-16 w-full font-semibold text-lg">
          Informacinis blokas Maloniai kviečiame susisiekti arba užsiregistruoti
        </div>
        {/* Vardas ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="firstName">
                Vardas
              </label>
            </div>
            <div className="col-span-6">
              <input
                className="w-full p-2 rounded-lg border border-slate-500"
                aria-invalid={errors.firstName ? 'true' : 'false'}
                type="text"
                id="firstName"
                autoComplete="on"
                {...register('firstName', {
                  required: 'Pamiršote įvesti vardą',
                })}
              />
            </div>
          </div>
          {errors.firstName && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.firstName.message}
            </span>
          )}
        </div>
        {/* El. paštas **********************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="email">
                El. paštas
              </label>
            </div>
            <div className="col-span-6">
              <input
                className="w-full p-2 rounded-lg border border-slate-500"
                aria-invalid={errors.email ? 'true' : 'false'}
                type="email"
                id="email"
                autoComplete="on"
                {...register('email', {
                  required: 'Pamiršote įvesti el. pašto adresą',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Neteisingas el. pašto adreso formatas',
                  },
                })}
              />
            </div>
          </div>
          {errors.email && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>
        {/* Slaptažodis ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="password">
                Slaptažodis
              </label>
            </div>
            <div className="col-span-6">
              <input
                className="w-full p-2 rounded-lg border border-slate-500"
                aria-invalid={errors.password ? 'true' : 'false'}
                type="password"
                id="password"
                autoComplete="on"
                {...register('password', {
                  required: 'Pamiršote įvesti slaptažodį',
                  minLength: {
                    value: 6,
                    message:
                      'Slaptažodį turi sudaryti ne mažiau, kaip 6 simboliai',
                  },
                })}
              />
            </div>
          </div>
          {errors.password && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* Pakartoti slaptažodį ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 gap-2">
            <div className="col-span-3 flex justify-end">
              <label
                className="font-semibold text-right"
                htmlFor="repeatPassword"
              >
                Pakartoti slaptažodį
              </label>
            </div>
            <div className="col-span-6">
              <input
                className="w-full p-2 rounded-lg border border-slate-500"
                aria-invalid={errors.repeatPassword ? 'true' : 'false'}
                type="password"
                id="repeatPassword"
                autoComplete="on"
                {...register('repeatPassword', {
                  required: 'Pamiršote pakartoti slaptažodį',
                  validate: (value) =>
                    value === password.current || 'Slaptažodžiai nesutampa',
                })}
              />
            </div>
          </div>
          {errors.repeatPassword && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.repeatPassword.message}
            </span>
          )}
        </div>
        {/* Miestas ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="city">
                Miestas
              </label>
            </div>
            <div className="col-span-6">
              <select
                className="border border-slate-400 w-full p-2 rounded-lg"
                id="city"
                {...register('city', { required: 'Prašome pasirinkti miestą' })}
              >
                <option className="bg-rose-500" value={''}>
                  --pasirinkite--
                </option>
                <option value={'Vilnius'}>Vilnius</option>
                <option value={'Kaunas'}>Kaunas</option>
                <option value={'Šiauliai'}>Šiauliai</option>
                <option value={'Raseiniai'}>Raseiniai</option>
              </select>
            </div>
          </div>
          {errors.city && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.city.message}
            </span>
          )}
        </div>
        {/* Lytis ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="gender">
                Lytis
              </label>
            </div>
            <div className="col-span-6">
              <div className="flex gap-2">
                <div>
                  vyras{' '}
                  <input
                    type="radio"
                    id="gender"
                    value={'Vyras'}
                    {...register('gender', {
                      required: 'Prašome pasirinkti lytį',
                    })}
                  />
                </div>
                <div>
                  moteris{' '}
                  <input
                    type="radio"
                    id="genderm"
                    value={'Moteris'}
                    {...register('gender', {
                      required: 'Prašome pasirinkti lytį',
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          {errors.gender && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.gender.message}
            </span>
          )}
        </div>
        {/* Spalva ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="color">
                Spalva
              </label>
            </div>
            <div className="col-span-6">
              <div className="flex gap-2">
                <div>
                  raudona{' '}
                  <input
                    type="checkbox"
                    id="color"
                    value={'raudona'}
                    {...register('color', {
                      required: 'Prašome pasirinkti spalvą',
                    })}
                  />
                </div>
                <div>
                  geltona{' '}
                  <input
                    type="checkbox"
                    id="color-yellow"
                    value={'geltona'}
                    {...register('color', {
                      required: 'Prašome pasirinkti spalvą',
                    })}
                  />
                </div>
                <div>
                  žalia{' '}
                  <input
                    type="checkbox"
                    id="color-green"
                    value={'geltona'}
                    {...register('color', {
                      required: 'Prašome pasirinkti spalvą',
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          {errors.color && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.color.message}
            </span>
          )}
        </div>
        {/* Tekstas ******************************************/}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-3 justify-self-end">
              <label className="font-semibold" htmlFor="textMessage">
                Tekstas
              </label>
            </div>
            <div className="col-span-6">
              <textarea
                id="textMessage"
                className="rounded-lg border border-slate-400 w-full p-2"
                rows={4}
                {...register('textMessage', {
                  required: 'Pamiršote įrašyti laiško tekstą',
                  minLength: {
                    value: 10,
                    message:
                      'Laiško tekstas turi būti sudarytas bent iš 10 simbolių',
                  },
                  maxLength: {
                    value: 25,
                    message: 'Laiško tekstas neturi viršyti 250 simbolių',
                  },
                })}
              />
            </div>
          </div>
          {errors.textMessage && (
            <span className="text-sm text-right text-rose-500" role="alert">
              {errors.textMessage.message}
            </span>
          )}
        </div>
        <button className="py-2 bg-slate-500 hover:bg-slate-600 text-slate-50 font-semibold rounded-lg">
          Submito butonas
        </button>
      </div>
    </form>
  );
};
