
export default {
  fields: [
    {
      type: 'text',
      name: 'user_name',
      required: true,
      label: 'Username',
      defaultValue: 'kuldeep',
      editable: false,
    },
    {
      type: 'password',
      name: 'password',
      secureTextEntry: true,
      required: true,
      label: 'Password',
      defaultValue: '123',
    },
    {
      type: 'email',
      name: 'email',
      required: true,
      label: 'Email',
      defaultValue: 'www.jiji@jij.com',
    },
    {
      type: 'number',
      name: 'number',
      required: true,
      label: 'Number',
      defaultValue: '2',
    },
    {
      type: 'url',
      name: 'url',
      required: true,
      label: 'URL',
      defaultValue: 'www.jiji.com',
    },
    {
      type: 'text',
      name: 'address',
      label: 'Address',
      required: true,
      numberOfLines: 3,
      multiline: true,
    },
    {
      type: 'url',
      name: 'urllxs',
      required: true,
      label: 'URL',
    },
    {
      type: 'picker',
      name: 'picker',
      editable: false,
      mode: 'dialog',
      label: 'Select One',
      defaultValue: 'BIKE',
      options: ['CAR', 'BIKE', 'BICYCLE'],
    },
    {
      type: 'switch',
      name: 'switch',
      label: 'Notify Me',
      defaultValue: true,
    },
    {
      type: 'slider',
      name: 'select_distance',
      label: 'Select Distance',
      minimumValue: 10,
      maximumValue: 1000,
    },
    {
      type: 'date',
      mode: 'date',
      name: 'D-T', // D, T, D-T
      label: 'Select Date',
      minDate: new Date(2017, 3, 1),
      maxDate: new Date(2017, 3, 1),
    },
  ],
};
